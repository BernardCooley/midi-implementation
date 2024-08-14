"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Spinner,
    useDisclosure,
} from "@chakra-ui/react";
import { addMidiChannel, deleteMidiChannel, updateMidiChannel } from "@/bff";
import { IMidiChannel } from "../types";
import MidiChannelModal, { FormData } from "./MidiChannelModal";
import { useDeviceContext } from "@/context/DeviceContext";
import DeleteDialog from "./DeleteDialog";
import MidiChannelsTable from "./MidiChannelsTable";
import { fakeUserId } from "@/consts";

interface Props {}

const MidiChannels = ({}: Props) => {
    const [loading, setLoading] = useState(true);
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
    const [idToEdit, setIdToEdit] = useState<string | null>(null);
    const [selectedChannel, setSelectedChannel] = useState<IMidiChannel | null>(
        null
    );

    useEffect(() => {
        if (midiChannels) {
            setLoading(false);
        }
    }, [midiChannels]);

    useEffect(() => {
        if (idToEdit !== null && midiChannels) {
            setSelectedChannel(
                midiChannels.find((channel) => channel.id === idToEdit) || null
            );
        } else {
            setSelectedChannel(null);
        }
    }, [idToEdit]);

    useEffect(() => {
        if (selectedChannel) {
            onModalOpen();
        }
    }, [selectedChannel]);

    const handleDuplicateChannel = async (channel: IMidiChannel) => {
        setLoading(true);
        const channels = await addMidiChannel({
            channel: Number(channel.channel),
            parameter: channel.parameter,
            port: channel.port,
            userId: fakeUserId,
            deviceId: channel.device.id,
        });
        if (channels) {
            addChannel(channel);
        }
        setLoading(false);
    };

    const handleEditMidiChannel = async (
        channelId: string,
        formData: FormData
    ) => {
        setLoading(true);
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
        setSelectedChannel(null);
        setIdToEdit(null);
        setLoading(false);
    };

    const handleAddMidiChannel = async (formData: FormData) => {
        setLoading(true);
        const channel = await addMidiChannel({
            channel: Number(formData.channel),
            parameter: formData.parameter.length
                ? formData.parameter
                : "Global",
            port: formData.port,
            userId: fakeUserId,
            deviceId: formData.deviceId,
        });
        if (channel) {
            addChannel(channel);
        }
        setSelectedChannel(null);
        setIdToEdit(null);
        setLoading(false);
    };

    const handleDeleteMidiChannel = async (id: string) => {
        setLoading(true);
        const channel = await deleteMidiChannel({
            id,
        });
        if (channel) {
            deleteChannel(id || "");
        }
        setIdToDelete(null);
        onClose();
        setLoading(false);
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
                    setIdToEdit(null);
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
            {loading && (
                <Center>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                        position="absolute"
                        top="40%"
                    />
                </Center>
            )}
            <Box
                w="full"
                opacity={loading ? 0.4 : 1}
                pointerEvents={loading ? "none" : "auto"}
            >
                <MidiChannelsTable
                    midiChannels={midiChannels}
                    onEdit={setIdToEdit}
                    onDuplicate={handleDuplicateChannel}
                    onDelete={(id) => {
                        setIdToDelete(id);
                        onOpen();
                    }}
                />
            </Box>
            <Button
                isDisabled={loading}
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

export default MidiChannels;
