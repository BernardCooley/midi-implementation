"use client";

import React, { useEffect, useState } from "react";
import {
    Flex,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { MidiChannel } from "../types";
import { midiDevices } from "../data/midi-ccs";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const [channels, setChannels] = useState<MidiChannel[]>([]);

    useEffect(() => {
        setChannels(
            midiDevices
                .map((device) => {
                    return device.midiChannels.map((channel) => {
                        return {
                            channel: channel.channel,
                            devices: [`${device.name} ${channel.name}`],
                        };
                    });
                })
                .flat()
                .reduce((acc: MidiChannel[], curr: MidiChannel) => {
                    const existingChannel = acc.find(
                        (ch) => ch.channel === curr.channel
                    );
                    if (existingChannel) {
                        existingChannel.devices.push(...curr.devices);
                    } else {
                        acc.push(curr);
                    }
                    return acc;
                }, [])
                .sort((a, b) => a.channel - b.channel)
        );
    }, []);

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "50%"]}
            margin="auto"
        >
            <TableContainer w="full">
                <Table variant="simple" layout="" size="sm">
                    <Thead>
                        <Tr>
                            <Th>Channel</Th>
                            <Th>Device</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {channels.map((channel) => (
                            <Tr key={`${channel.channel}`}>
                                <Td>{channel.channel}</Td>
                                <Td>
                                    <Flex direction="column" gap={2}>
                                        {channel.devices.map((device) => (
                                            <Text key={`${channel}-${device}`}>
                                                {device}
                                            </Text>
                                        ))}
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
};

export default MidiChannelTable;
