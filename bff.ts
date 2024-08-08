import { Device } from "@prisma/client";
import { IMidiChannels } from "./app/types";

export class GoneError extends Error {
    statusCode = 410;
}
export class NotFoundError extends Error {
    statusCode = 404;
}
export class BadRequestError extends Error {
    statusCode = 400;
}
export class UnauthorisedError extends Error {
    statusCode = 401;
}
export class InternalError extends Error {
    statusCode = 500;
}

export const handleFetchErrors = (response: Response) => {
    switch (response.status) {
        case 401:
            throw new UnauthorisedError(response.statusText);
        case 400:
            throw new BadRequestError(response.statusText);
        case 404:
            throw new NotFoundError(response.statusText);
        case 410:
            throw new GoneError(response.statusText);
        default:
            null;
    }
};

export const fetchWithErrorHandling = async <T>(
    endpoint: RequestInfo,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    body?: any
) => {
    try {
        const res = await fetch(endpoint, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (res.ok) {
            return (await res.json()) as T;
        }
        handleFetchErrors(res);
    } catch (e) {
        throw e;
    }
    return null;
};

interface GetMidiChannelsProps {
    userId: string;
}

export const fetchMidiChannels = async ({
    userId,
}: GetMidiChannelsProps): Promise<IMidiChannels[] | null> => {
    try {
        const midiChannels: IMidiChannels[] | null =
            await fetchWithErrorHandling("/api/getMidiChannels", "POST", {
                userId,
            });
        return midiChannels;
    } catch (error) {
        throw error;
    }
};

interface AddMidiChannelProps {
    channel: number;
    parameter: string;
    port: string;
    userId: string;
    deviceId: string;
}

export const addMidiChannel = async ({
    channel,
    parameter,
    port,
    userId,
    deviceId,
}: AddMidiChannelProps) => {
    try {
        const response = await fetchWithErrorHandling(
            "/api/addMidiChannel",
            "POST",
            {
                channel,
                parameter,
                port,
                userId,
                deviceId,
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
};

interface DeleteMidiChannelProps {
    id: string;
}

export const deleteMidiChannel = async ({ id }: DeleteMidiChannelProps) => {
    try {
        const response = await fetchWithErrorHandling(
            "/api/deleteMidiChannel",
            "POST",
            {
                id,
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const fetchDevices = async (): Promise<Device[] | null> => {
    try {
        const midiDevices: Device[] | null = await fetchWithErrorHandling(
            "/api/getDevices",
            "GET"
        );
        return midiDevices;
    } catch (error) {
        throw error;
    }
};
