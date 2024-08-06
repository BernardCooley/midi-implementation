"use client";

import React from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";
import { midiChannels } from "../data/midi-channels";
import { IoMdArrowDropright } from "react-icons/io";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} variant="unstyled">
                <Flex alignItems="center">
                    <Image height="30px" src="connection.png" alt="" />
                    <Icon fontSize="2xl" as={IoMdArrowDropright} />
                </Flex>
            </Button>
            <Drawer
                size="full"
                placement="left"
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        Midi Channels
                    </DrawerHeader>
                    <DrawerBody>
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
                                            <Th>Ch</Th>
                                            <Th>Param</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {midiChannels.map((channel) => (
                                            <Tr key={`${channel.channel}`}>
                                                <Td>{channel.channel}</Td>
                                                <Td>
                                                    <Flex
                                                        direction="column"
                                                        gap={2}
                                                    >
                                                        {channel.devices.map(
                                                            (device) => (
                                                                <Text
                                                                    key={`${channel}-${device}`}
                                                                >
                                                                    {device}
                                                                </Text>
                                                            )
                                                        )}
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="unstyled" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MidiChannelTable;
