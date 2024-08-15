interface MidiCC {
    parameterName: string;
    number: number;
}

interface DeviceParamters {
    groupName: string;
    ccs: MidiCC[];
}

export interface MidiDeviceListItem {
    id: string;
    name: string;
    imageSrc: string;
    manufacturer: {
        id: string;
        name: string;
    };
    _count: {
        deviceParamters: number;
    };
}

export interface MidiDevice {
    name: string;
    deviceParamters: DeviceParamters[];
    imageSrc: string;
    manufacturer: {
        id: string;
        name: string;
    };
    users: {
        id: string;
    }[];
}

export interface CC {
    parameterName: string;
    number: number;
    deviceName: string;
    groupName: string;
}

export interface IMidiChannel {
    id: string;
    port: string;
    channel: number;
    device: {
        name: string;
        id: string;
        manufacturerId: string;
    };
    parameter: string;
}

export interface IMidiChannelInput {
    port: string;
    channel: number;
    deviceId: string;
    parameter: string;
}

export type Environments = "development" | "production" | "test";