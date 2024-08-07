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
import { MidiChannel } from "@prisma/client";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const [channels, setChannels] = useState<MidiChannel[] | null>([]);

    const getMidiChannels = async () => {
        const midiChannels = await fetchMidiChannels({
            userId: 123456789,
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
                            <Th>Channel</Th>
                            <Th>Device</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {channels &&
                            channels.map((channel) => (
                                <Tr key={`${channel.channel}`}>
                                    <Td>{channel.channel}</Td>
                                    <Td>
                                        <Flex direction="column" gap={2}>
                                            <Text>{channel.device}</Text>
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
