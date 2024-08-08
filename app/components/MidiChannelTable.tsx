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
import { GrDuplicate } from "react-icons/gr";
import MidiChannelModal from "./MidiChannelModal";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose,
    } = useDisclosure();
    const cancelRef = useRef(null);
    const [channels, setChannels] = useState<IMidiChannels[] | null>([]);
    const [idToTelete, setIdToDelete] = useState<string | null>(null);
    const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
    const [selectedChannel, setSelectedChannel] =
        useState<IMidiChannels | null>(null);

    useEffect(() => {
        if (indexToEdit !== null && channels) {
            setSelectedChannel(channels[indexToEdit]);
        } else {
            setSelectedChannel(null);
        }
    }, [indexToEdit]);

    useEffect(() => {
        if (selectedChannel) {
            onModalOpen();
        }
    }, [selectedChannel]);

    const getMidiChannels = async () => {
        const midiChannels = await fetchMidiChannels({
            userId: "123456789",
        });
        setChannels(midiChannels);
    };

    useEffect(() => {
        getMidiChannels();
    }, []);

    const removeMidiChannel = async (id: string) => {
        setIdToDelete(id);
        onOpen();
    };

    const duplicateChannel = async (channel: IMidiChannels) => {
        await addMidiChannel({
            channel: Number(channel.channel),
            parameter: channel.parameter,
            port: channel.port,
            userId: "123456789",
            deviceId: channel.device.id,
        });
        getMidiChannels();
    };

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "50%"]}
            margin="auto"
        >
            <MidiChannelModal
                channelId={selectedChannel?.id || ""}
                mode={selectedChannel ? "edit" : "add"}
                defaultValues={{
                    port: selectedChannel?.port || "",
                    channel: selectedChannel?.channel.toString() || "1",
                    parameter: selectedChannel?.parameter || "",
                    deviceId: selectedChannel?.device.id || "",
                }}
                onSubmit={() => {
                    getMidiChannels();
                    onModalClose();
                }}
                isModalOpen={isModalOpen}
                onModalClose={() => {
                    onModalClose();
                    setIndexToEdit(null);
                    setSelectedChannel(null);
                }}
            />

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
                            Are you sure? You cannot undo this action
                            afterwards.
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
            <Button onClick={onModalOpen}>Add new</Button>
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
                            channels
                                .sort((a, b) => a.channel - b.channel)
                                .map((channel, index) => (
                                    <Tr key={`${channel.id}`}>
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
                                                        setIndexToEdit(index)
                                                    }
                                                    variant="unstyled"
                                                    aria-label="Delete"
                                                    icon={<MdEdit />}
                                                />
                                                <IconButton
                                                    onClick={() =>
                                                        duplicateChannel(
                                                            channel
                                                        )
                                                    }
                                                    variant="unstyled"
                                                    aria-label="Duplicate"
                                                    icon={<GrDuplicate />}
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
