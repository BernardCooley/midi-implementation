"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Button,
    Flex,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
import { addMidiChannel, deleteMidiChannel, updateMidiChannel } from "@/bff";
import { IMidiChannel } from "../types";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrDuplicate } from "react-icons/gr";
import MidiChannelModal, { FormData } from "./MidiChannelModal";
import { SlOptions } from "react-icons/sl";
import { useDeviceContext } from "@/context/DeviceContext";
import DeleteDialog from "./DeleteDialog";

interface Props {}

const MidiChannelTable = ({}: Props) => {
    const { midiChannels, deleteChannel, addChannel, updateChannel } =
        useDeviceContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose,
    } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);
    const [idToTelete, setIdToDelete] = useState<string | null>(null);
    const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
    const [selectedChannel, setSelectedChannel] = useState<IMidiChannel | null>(
        null
    );

    useEffect(() => {
        if (indexToEdit !== null && midiChannels) {
            setSelectedChannel(midiChannels[indexToEdit]);
        } else {
            setSelectedChannel(null);
        }
    }, [indexToEdit]);

    useEffect(() => {
        if (selectedChannel) {
            onModalOpen();
        }
    }, [selectedChannel]);

    const handleDuplicateChannel = async (channel: IMidiChannel) => {
        const channels = await addMidiChannel({
            channel: Number(channel.channel),
            parameter: channel.parameter,
            port: channel.port,
            userId: "123456789",
            deviceId: channel.device.id,
        });
        if (channels) {
            addChannel(channel);
        }
    };

    const handleEditMidiChannel = async (
        channelId: string,
        formData: FormData
    ) => {
        const channel = await updateMidiChannel({
            id: channelId,
            data: {
                channel: Number(formData.channel),
                parameter: formData.parameter,
                port: formData.port,
                deviceId: formData.deviceId,
            },
        });
        if (channel) {
            updateChannel(channel);
        }
    };

    const handleAddMidiChannel = async (formData: FormData) => {
        const channel = await addMidiChannel({
            channel: Number(formData.channel),
            parameter: formData.parameter.length
                ? formData.parameter
                : "Global",
            port: formData.port,
            userId: "123456789",
            deviceId: formData.deviceId,
        });
        if (channel) {
            addChannel(channel);
        }
    };

    const handleDeleteMidiChannel = async (id: string) => {
        const channel = await deleteMidiChannel({
            id,
        });
        if (channel) {
            deleteChannel(id || "");
        }
        setIdToDelete(null);
        onClose();
    };

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "50%"]}
            margin="auto"
            position="relative"
            h="85vh"
            alignItems="center"
        >
            <MidiChannelModal
                mode={selectedChannel ? "edit" : "add"}
                defaultValues={{
                    port: selectedChannel?.port || "",
                    channel: selectedChannel?.channel.toString() || "1",
                    parameter: selectedChannel?.parameter || "",
                    deviceId: selectedChannel?.device.id || "",
                }}
                onSubmit={(formData) => {
                    if (selectedChannel) {
                        handleEditMidiChannel(selectedChannel.id, formData);
                    } else {
                        handleAddMidiChannel(formData);
                    }
                    onModalClose();
                }}
                isModalOpen={isModalOpen}
                onModalClose={() => {
                    onModalClose();
                    setIndexToEdit(null);
                    setSelectedChannel(null);
                }}
            />
            <DeleteDialog
                ref={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
                onDelete={async () => {
                    handleDeleteMidiChannel(idToTelete || "");
                }}
            />
            <TableContainer w="full">
                <Table variant="primary" size="sm">
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
                        {midiChannels
                            .sort((a, b) => a.channel - b.channel)
                            .map((channel, index) => {
                                return (
                                    <>
                                        {channel?.device?.id && (
                                            <Tr key={`${channel.id}`}>
                                                <Td>
                                                    <Text>{channel.port}</Text>
                                                </Td>
                                                <Td>{channel.channel}</Td>
                                                <Td>
                                                    <Link
                                                        href={`/device/${channel.device.id}?from=channel`}
                                                    >
                                                        {channel.device.name}
                                                    </Link>
                                                </Td>
                                                <Td>
                                                    <Text>
                                                        {channel.parameter}
                                                    </Text>
                                                </Td>
                                                <Td>
                                                    <Menu>
                                                        <MenuButton
                                                            height="24px"
                                                            as={IconButton}
                                                            aria-label="Options"
                                                            icon={<SlOptions />}
                                                            variant="unstyled"
                                                        />
                                                        <MenuList>
                                                            <MenuItem
                                                                onClick={() =>
                                                                    setIndexToEdit(
                                                                        index
                                                                    )
                                                                }
                                                                icon={
                                                                    <MdEdit />
                                                                }
                                                            >
                                                                Edit
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={() =>
                                                                    handleDuplicateChannel(
                                                                        channel
                                                                    )
                                                                }
                                                                icon={
                                                                    <GrDuplicate />
                                                                }
                                                            >
                                                                Duplicate
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={() => {
                                                                    setIdToDelete(
                                                                        channel.id
                                                                    );
                                                                    onOpen();
                                                                }}
                                                                icon={
                                                                    <MdDelete />
                                                                }
                                                            >
                                                                Delete
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </Td>
                                            </Tr>
                                        )}
                                    </>
                                );
                            })}
                    </Tbody>
                </Table>
            </TableContainer>
            <Button
                variant="outline"
                colorScheme="blue"
                w={["full", "50%"]}
                onClick={onModalOpen}
            >
                Add new Midi Channel
            </Button>
        </Flex>
    );
};

export default MidiChannelTable;