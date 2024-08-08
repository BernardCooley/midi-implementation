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
import { Device } from "@prisma/client";
import { addMidiChannel, fetchDevices } from "@/bff";
import MenuSelect from "./MenuSelect";

export interface FormData {
    port: string;
    channel: number | string;
    parameter: string;
    deviceId: string;
}

const schema: ZodType<FormData> = z.object({
    port: z.string().min(1, "Port is required"),
    channel: z
        .string()
        .min(1, "Channel is required")
        .transform((val) => {
            const parsed = parseInt(val, 10);
            if (isNaN(parsed)) {
                throw new Error("Channel must be a number");
            }
            return parsed;
        }),
    parameter: z.string().min(1, "Parameter is required"),
    deviceId: z.string().min(1, "Device is required"),
});

interface Props {
    onSubmit: () => void;
    isModalOpen: boolean;
    onModalClose: () => void;
}

const MidiChannelModal = ({ onSubmit, isModalOpen, onModalClose }: Props) => {
    const [allDevices, setAllDevices] = useState<Device[]>([]);

    useEffect(() => {
        getAllDevices();
    }, []);

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
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            port: "",
            channel: 1,
            parameter: "",
            deviceId: "",
        },
    });

    const createMidiChannel = async (formData: FormData) => {
        await addMidiChannel({
            channel: Number(formData.channel),
            parameter: formData.parameter,
            port: formData.port,
            userId: "rsthsrtjryjrsyjyr",
            deviceId: formData.deviceId,
        });

        onSubmit();
    };

    const deviceIdWatch = watch("deviceId");

    return (
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
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
                            <TextInput
                                type="number"
                                required={true}
                                title="Midi Channel"
                                size="sm"
                                fieldProps={register("channel")}
                                error={errors.channel?.message}
                                height="40px"
                                variant="filled"
                            />
                            <TextInput
                                type="text"
                                required={true}
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
                            />
                        </Flex>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onModalClose}>
                        Close
                    </Button>
                    <Button
                        onClick={handleSubmit(createMidiChannel)}
                        variant="ghost"
                    >
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default MidiChannelModal;
