"use client";

import { IMidiChannel, MidiDeviceListItem } from "@/app/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DeviceContextProps {
    deviceList: MidiDeviceListItem[];
    addChannel: (newMidiChannel: IMidiChannel) => void;
    deleteChannel: (id: string) => void;
    updateChannel: (updatedMidiChannel: IMidiChannel) => void;
    updateDeviceList: (newDeviceList: MidiDeviceListItem[]) => void;
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
    const [deviceList, setDeviceList] = useState<MidiDeviceListItem[]>([]);
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

    const updateDeviceList = (newDeviceList: MidiDeviceListItem[]) => {
        setDeviceList(newDeviceList);
    };

    const updateMidiChannels = (newMidiChannels: IMidiChannel[]) => {
        setMidiChannels(newMidiChannels);
    };

    return (
        <DeviceContext.Provider
            value={{
                deviceList,
                addChannel,
                deleteChannel,
                updateChannel,
                updateDeviceList,
                midiChannels,
                updateMidiChannels,
            }}
        >
            {children}
        </DeviceContext.Provider>
    );
};