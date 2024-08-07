import { CC, MidiDevice } from "./app/types";

export function convertToCCArray(midiCCs: MidiDevice[]): CC[] {
    const result: CC[] = [];

    midiCCs.forEach((device: MidiDevice) => {
        const deviceName = device.name;
        device.deviceParamters.forEach((parameterGroup) => {
            const groupName = parameterGroup.groupName;
            parameterGroup.ccs.forEach((cc) => {
                result.push({
                    parameterName: cc.parameterName,
                    number: cc.number,
                    deviceName: deviceName,
                    groupName: groupName,
                });
            });
        });
    });

    return result;
}

export function convertToMidiCCs(ccArray: CC[]): MidiDevice[] {
    const midiCCs: any[] = [];
    const deviceMap: { [key: string]: any } = {};

    ccArray.forEach((cc) => {
        if (!deviceMap[cc.deviceName]) {
            deviceMap[cc.deviceName] = {
                name: cc.deviceName,
                deviceParamters: [],
            };
            midiCCs.push(deviceMap[cc.deviceName]);
        }

        const device = deviceMap[cc.deviceName];
        let group = device.deviceParamters.find(
            (g: any) => g.groupName === cc.groupName
        );

        if (!group) {
            group = {
                groupName: cc.groupName,
                ccs: [],
            };
            device.deviceParamters.push(group);
        }

        group.ccs.push({
            parameterName: cc.parameterName,
            number: cc.number,
        });
    });

    return midiCCs;
}

export const formatNumberRanges = (numbers: number[]) => {
    if (!numbers.length) return "";

    numbers.sort((a, b) => a - b);

    let ranges = [];
    let start = numbers[0];
    let end = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === end + 1) {
            end = numbers[i];
        } else {
            ranges.push(start === end ? `${start}` : `${start}-${end}`);
            start = numbers[i];
            end = numbers[i];
        }
    }
    ranges.push(start === end ? `${start}` : `${start}-${end}`);

    return ranges.join(", ");
};