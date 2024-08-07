interface MidiCC {
    parameterName: string;
    number: number;
}

interface DeviceParamters {
    groupName: string;
    ccs: MidiCC[];
}

export interface MidiDevice {
    name: string;
    deviceParamters: DeviceParamters[];
    imageSrc: string;
    midiChannels: {
        channel: number;
        name: string;
    }[];
}

export interface CC {
    parameterName: string;
    number: number;
    deviceName: string;
    groupName: string;
}

export interface IMidiChannels {
    port: string;
    channel: number;
    device: {
        name: string;
        id: string;
        manufacturerId: string;
    };
    parameter: string;
}