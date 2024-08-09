"use client";

import { MidiDeviceListItem } from "@/app/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DeviceContextProps {
    deviceList: MidiDeviceListItem[];
    updateDeviceList: (newDeviceList: MidiDeviceListItem[]) => void;
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

    const updateDeviceList = (newDeviceList: MidiDeviceListItem[]) => {
        setDeviceList(newDeviceList);
    };

    return (
        <DeviceContext.Provider value={{ deviceList, updateDeviceList }}>
            {children}
        </DeviceContext.Provider>
    );
};
