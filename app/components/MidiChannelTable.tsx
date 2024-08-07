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
import { fetchMidiChannels } from "@/bff";
import { IMidiChannels } from "../types";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const [channels, setChannels] = useState<IMidiChannels[] | null>([]);

    const getMidiChannels = async () => {
        const midiChannels = await fetchMidiChannels({
            userId: "rsthsrtjryjrsyjyr",
        });
        setChannels(midiChannels);
    };

    useEffect(() => {
        getMidiChannels();
    }, []);

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "50%"]}
            margin="auto"
        >
            <TableContainer w="full">
                <Table variant="simple" size="sm">
                    <Thead>
                        <Tr>
                            <Th>Port</Th>
                            <Th>Ch</Th>
                            <Th>Device</Th>
                            <Th>Param</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {channels &&
                            channels.map((channel) => (
                                <Tr key={`${channel.channel}`}>
                                    <Td>
                                        <Text>{channel.port}</Text>
                                    </Td>
                                    <Td>{channel.channel}</Td>
                                    <Td>
                                        <Text>{channel.device.name}</Text>
                                    </Td>
                                    <Td>
                                        <Text>{channel.parameter}</Text>
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
