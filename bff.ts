import {
    IMidiChannelInput,
    IMidiChannel,
    MidiDevice,
    MidiDeviceListItem,
} from "./app/types";

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
}: GetMidiChannelsProps): Promise<IMidiChannel[] | null> => {
    try {
        const midiChannels: IMidiChannel[] | null =
            await fetchWithErrorHandling("/api/getMidiChannels", "POST", {
                userId,
            });
        return midiChannels;
    } catch (error) {
        throw error;
    }
};

export interface AddMidiChannelProps {
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
}: AddMidiChannelProps): Promise<IMidiChannel | null> => {
    try {
        const response: IMidiChannel | null = await fetchWithErrorHandling(
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

export const deleteMidiChannel = async ({
    id,
}: DeleteMidiChannelProps): Promise<IMidiChannel | null> => {
    try {
        const response: IMidiChannel | null = await fetchWithErrorHandling(
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

export const fetchDevices = async (): Promise<MidiDeviceListItem[] | null> => {
    try {
        const midiDevices: MidiDeviceListItem[] | null =
            await fetchWithErrorHandling("/api/getDevices", "GET");
        return midiDevices;
    } catch (error) {
        throw error;
    }
};

interface GetDeviceProps {
    id: string;
}

export const fetchDevice = async ({
    id,
}: GetDeviceProps): Promise<MidiDevice | null> => {
    try {
        const midiDevice: MidiDevice | null = await fetchWithErrorHandling(
            "/api/getDevice",
            "POST",
            {
                id,
            }
        );
        return midiDevice;
    } catch (error) {
        throw error;
    }
};

export const addDevice = async (data: MidiDevice[]) => {
    try {
        const response = await fetchWithErrorHandling(
            "/api/addDevice",
            "POST",
            {
                data,
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
};

interface UpdateDeviceProps {
    id: string;
    data: IMidiChannelInput;
}

export const updateMidiChannel = async ({
    data,
    id,
}: UpdateDeviceProps): Promise<IMidiChannel | null> => {
    try {
        const response: IMidiChannel | null = await fetchWithErrorHandling(
            "/api/updateMidiChannel",
            "POST",
            {
                id,
                data,
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
};
