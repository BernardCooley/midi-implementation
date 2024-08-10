"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { addMidiChannel, deleteMidiChannel, updateMidiChannel } from "@/bff";
import { IMidiChannel } from "../types";
import MidiChannelModal, { FormData } from "./MidiChannelModal";
import { useDeviceContext } from "@/context/DeviceContext";
import DeleteDialog from "./DeleteDialog";
import MidiChannelsTable from "./MidiChannelsTable";

interface Props {}

const MidiChannels = ({}: Props) => {
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
        setSelectedChannel(null);
        setIdToEdit(null);
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
        setSelectedChannel(null);
        setIdToEdit(null);
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
            <MidiChannelsTable
                midiChannels={midiChannels}
                onEdit={setIdToEdit}
                onDuplicate={handleDuplicateChannel}
                onDelete={(id) => {
                    setIdToDelete(id);
                    onOpen();
                }}
            />
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

export default MidiChannels;