"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Flex,
    Icon,
    IconButton,
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
import { addMidiChannel, deleteMidiChannel, fetchMidiChannels } from "@/bff";
import { IMidiChannels } from "../types";
import { MdDelete, MdEdit } from "react-icons/md";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);
    const [channels, setChannels] = useState<IMidiChannels[] | null>([]);
    const [idToTelete, setIdToDelete] = useState<string | null>(null);

    const getMidiChannels = async () => {
        const midiChannels = await fetchMidiChannels({
            userId: "rsthsrtjryjrsyjyr",
        });
        setChannels(midiChannels);
    };

    useEffect(() => {
        getMidiChannels();
    }, []);

    const createMidiChannel = async () => {
        await addMidiChannel({
            channel: 6,
            parameter: "Track 6",
            port: "A",
            userId: "rsthsrtjryjrsyjyr",
            deviceId: "rgerherheteaht",
        });

        getMidiChannels();
    };

    const removeMidiChannel = async (id: string) => {
        setIdToDelete(id);
        onOpen();
    };

    const editMidiChannel = async (id: string) => {
        console.log("🚀 ~ editMidiChannel ~ id:", id);
    };

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "50%"]}
            margin="auto"
        >
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Midi Channel
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={async () => {
                                    await deleteMidiChannel({
                                        id: idToTelete || "",
                                    });
                                    getMidiChannels();
                                    setIdToDelete(null);
                                    onClose();
                                }}
                                ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <Button onClick={createMidiChannel}>Add new</Button>
            <TableContainer w="full">
                <Table variant="simple" size="sm">
                    <Thead>
                        <Tr>
                            <Th>Port</Th>
                            <Th>Ch</Th>
                            <Th>Device</Th>
                            <Th>Param</Th>
                            <Th>Actions</Th>
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
                                    <Td>
                                        <Flex>
                                            <IconButton
                                                onClick={() =>
                                                    removeMidiChannel(
                                                        channel.id
                                                    )
                                                }
                                                color="red"
                                                variant="unstyled"
                                                aria-label="Delete"
                                                icon={<MdDelete />}
                                            />
                                            <IconButton
                                                onClick={() =>
                                                    editMidiChannel(channel.id)
                                                }
                                                variant="unstyled"
                                                aria-label="Delete"
                                                icon={<MdEdit />}
                                            />
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
