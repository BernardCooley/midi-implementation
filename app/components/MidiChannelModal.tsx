import React, { useEffect, useState } from "react";
import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { TextInput } from "./TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { addMidiChannel, fetchDevices, updateDevice } from "@/bff";
import MenuSelect from "./MenuSelect";
import { MidiDeviceListItem } from "../types";

export interface FormData {
    port: string;
    channel: string;
    parameter: string;
    deviceId: string;
}

const schema: ZodType<FormData> = z.object({
    port: z.string().min(1, "Port is required"),
    channel: z.string(),
    parameter: z.string(),
    deviceId: z.string().min(1, "Device is required"),
});

interface Props {
    onSubmit: () => void;
    isModalOpen: boolean;
    onModalClose: () => void;
    defaultValues?: FormData;
    mode?: "edit" | "add";
    channelId?: string;
}

const MidiChannelModal = ({
    onSubmit,
    isModalOpen,
    onModalClose,
    defaultValues,
    mode,
    channelId,
}: Props) => {
    const [allDevices, setAllDevices] = useState<MidiDeviceListItem[]>([]);

    useEffect(() => {
        getAllDevices();
    }, []);

    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues]);

    const getAllDevices = async () => {
        const devices = await fetchDevices();
        if (devices) {
            setAllDevices(devices);
        }
    };

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            port: defaultValues?.port || "",
            channel: defaultValues?.channel || "1",
            parameter: defaultValues?.parameter || "",
            deviceId: defaultValues?.deviceId || "",
        },
    });

    const createMidiChannel = async (formData: FormData) => {
        if (mode === "add" && !channelId) {
            await addMidiChannel({
                channel: Number(formData.channel),
                parameter: formData.parameter.length
                    ? formData.parameter
                    : "Global",
                port: formData.port,
                userId: "123456789",
                deviceId: formData.deviceId,
            });
        } else if (mode === "edit" && channelId) {
            await updateDevice({
                id: channelId || "",
                data: {
                    channel: Number(formData.channel),
                    parameter: formData.parameter,
                    port: formData.port,
                    deviceId: formData.deviceId,
                },
            });
        }

        onSubmit();
        reset();
    };

    const deviceIdWatch = watch("deviceId");
    const channelWatch = watch("channel");

    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={isModalOpen}
            onClose={onModalClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Midi Channel</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form
                        onSubmit={handleSubmit(createMidiChannel)}
                        style={{ height: "100%" }}
                    >
                        <Flex direction="column" gap={6}>
                            <TextInput
                                type="text"
                                required={true}
                                title="Midi Port"
                                size="sm"
                                fieldProps={register("port")}
                                error={errors.port?.message}
                                height="40px"
                                variant="filled"
                            />
                            <MenuSelect
                                variant="outline"
                                optionsWidth="400px"
                                required={true}
                                title="Midi Channel"
                                dropDownWidth="full"
                                optionsContainerHeight="200px"
                                border="0"
                                zIndex="9999"
                                text={
                                    channelWatch.toString() || "Select Channel"
                                }
                                options={Array.from({ length: 16 }, (_, i) => ({
                                    label: (i + 1).toString(),
                                    value: (i + 1).toString(),
                                }))}
                                onOptionChange={(option) =>
                                    setValue("channel", option[0])
                                }
                                maxW="full"
                                textAlign="left"
                                isDisabled={false}
                                error={errors.channel?.message}
                            />
                            <TextInput
                                type="text"
                                title="Parameter"
                                size="sm"
                                fieldProps={register("parameter")}
                                error={errors.parameter?.message}
                                height="40px"
                                variant="filled"
                            />
                            <MenuSelect
                                optionsWidth="400px"
                                required={true}
                                title="Device"
                                dropDownWidth="full"
                                optionsContainerHeight="200px"
                                border="0"
                                zIndex="9999"
                                text={
                                    allDevices.find((device) => {
                                        return device.id === deviceIdWatch;
                                    })?.name || "Select Device"
                                }
                                options={allDevices.map((device) => ({
                                    label: device.name,
                                    value: device.id,
                                }))}
                                onOptionChange={(option) =>
                                    setValue("deviceId", option[0])
                                }
                                maxW="full"
                                textAlign="left"
                                isDisabled={false}
                                error={errors.deviceId?.message}
                            />
                        </Flex>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button
                        variant="ghost"
                        mr={3}
                        onClick={() => {
                            onModalClose();
                            reset();
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={handleSubmit(createMidiChannel)}
                        colorScheme="blue"
                    >
                        {mode === "edit" ? "Update" : "Add"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default MidiChannelModal;
