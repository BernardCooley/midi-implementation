"use client";

import { IMidiChannel, MidiDeviceListItem } from "@/app/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DeviceContextProps {
    addChannel: (newMidiChannel: IMidiChannel) => void;
    deleteChannel: (id: string) => void;
    updateChannel: (updatedMidiChannel: IMidiChannel) => void;
    midiChannels: IMidiChannel[];
    updateMidiChannels: (newMidiChannels: IMidiChannel[]) => void;
    userDevices: MidiDeviceListItem[];
    updateUserDevices: (newDevices: MidiDeviceListItem[]) => void;
    allDevices: MidiDeviceListItem[];
    updateAllDevices: (newDevices: MidiDeviceListItem[]) => void;
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

    const [userDevices, setUserDevices] = useState<MidiDeviceListItem[]>([]);

    const updateUserDevices = (newDevices: MidiDeviceListItem[]) => {
        setUserDevices(newDevices);
    };

    const [allDevices, setAllDevices] = useState<MidiDeviceListItem[]>([]);

    const updateAllDevices = (newDevices: MidiDeviceListItem[]) => {
        setAllDevices(newDevices);
    };

    return (
        <DeviceContext.Provider
            value={{
                addChannel,
                deleteChannel,
                updateChannel,
                midiChannels,
                updateMidiChannels,
                userDevices,
                updateUserDevices,
                allDevices,
                updateAllDevices,
            }}
        >
            {children}
        </DeviceContext.Provider>
    );
};
