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
}

export interface CC {
    parameterName: string;
    number: number;
    deviceName: string;
    groupName: string;
}