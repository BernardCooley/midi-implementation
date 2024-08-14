"use client";

import { IMidiChannel } from "@/app/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DeviceContextProps {
    deviceSearchTerm: string;
    updateDeviceSearchTerm: (newSearchTerm: string) => void;
    addChannel: (newMidiChannel: IMidiChannel) => void;
    deleteChannel: (id: string) => void;
    updateChannel: (updatedMidiChannel: IMidiChannel) => void;
    midiChannels: IMidiChannel[];
    updateMidiChannels: (newMidiChannels: IMidiChannel[]) => void;
}

export const DeviceContext = createContext<DeviceContextProps | null>(null);

export const useDeviceContext = () => {
    const deviceContext = useContext(DeviceContext);

    if (!deviceContext) {
        throw new Error(
            "useDeviceContext has to be used within <DeviceContext.Provider>"
        );
    }

    return deviceContext;
};

export const DeviceContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [midiChannels, setMidiChannels] = useState<IMidiChannel[]>([]);
    const [deviceSearchTerm, setDeviceSearchTerm] = useState("");

    const addChannel = (newMidiChannel: IMidiChannel) => {
        setMidiChannels((prevMidiChannels) => [
            ...prevMidiChannels,
            newMidiChannel,
        ]);
    };

    const deleteChannel = (id: string) => {
        setMidiChannels((prevMidiChannels) =>
            prevMidiChannels.filter((channel) => channel.id !== id)
        );
    };

    const updateChannel = (updatedMidiChannel: IMidiChannel) => {
        setMidiChannels((prevMidiChannels) =>
            prevMidiChannels.map((channel) =>
                channel.id === updatedMidiChannel.id
                    ? updatedMidiChannel
                    : channel
            )
        );
    };

    const updateMidiChannels = (newMidiChannels: IMidiChannel[]) => {
        setMidiChannels(newMidiChannels);
    };

    const updateDeviceSearchTerm = (newSearchTerm: string) => {
        setDeviceSearchTerm(newSearchTerm);
    };

    return (
        <DeviceContext.Provider
            value={{
                addChannel,
                deleteChannel,
                updateChannel,
                midiChannels,
                updateMidiChannels,
                deviceSearchTerm,
                updateDeviceSearchTerm,
            }}
        >
            {children}
        </DeviceContext.Provider>
    );
};
