import { Accordion, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { getUserDevices, searchDevices } from "@/bff";
import { MidiDeviceListItem } from "../types";
import { fakeUserId } from "@/consts";
import DeviceListAccordionItem from "./DeviceListAccordionItem";
// import { addDevice } from "@/bff";
// import { midiDevices } from "../data/midi-ccs-all";

export interface FormData {
    searchTerm: string;
}

const schema: ZodType<FormData> = z.object({
    searchTerm: z.string(),
});

const DeviceSelector = () => {
    const [loading, setLoading] = useState(true);
    const [userDevices, setUserDevices] = useState<MidiDeviceListItem[]>([]);
    const [allDevices, setAllDevices] = useState<MidiDeviceListItem[]>([]);

    useEffect(() => {
        onGetUserDevices();
        if (allDevices) {
            setLoading(false);
        }
    }, []);

    const {
        register,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            searchTerm: "",
        },
    });

    const watchSearch = watch("searchTerm");

    const getAllDevices = async () => {
        setLoading(true);
        try {
            const devices = await searchDevices({ searchTerm: "" });
            if (devices) {
                setAllDevices(devices);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (watchSearch === "") {
            getAllDevices();
            reset({ searchTerm: "" });
        }
    }, [watchSearch]);

    const onGetUserDevices = async () => {
        setLoading(true);
        try {
            const devices = await getUserDevices({
                userId: fakeUserId,
            });
            if (devices) {
                setUserDevices(devices);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onSearchDevices = async (searchTerm: FormData["searchTerm"]) => {
        setLoading(true);
        try {
            const devices = await searchDevices({ searchTerm });
            if (devices) {
                setAllDevices(devices);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Flex w="full" h="85vh" position="relative">
            <Flex
                justifyContent="flex-start"
                direction="column"
                alignItems="center"
                gap={2}
                w={["full", "full", "70%"]}
                m="auto"
                h="full"
            >
                <Accordion w="full" defaultIndex={[0]} allowMultiple>
                    <DeviceListAccordionItem
                        loading={userDevices.length < 1}
                        title="Your Devices"
                        devices={userDevices}
                    />
                    <DeviceListAccordionItem
                        loading={allDevices.length < 1 || loading}
                        title="All Devices"
                        devices={allDevices}
                        searchOptions={{
                            register: register("searchTerm"),
                            onSearchInputChange: (e) =>
                                setValue("searchTerm", e.target.value),
                            fieldError: errors.searchTerm?.message || "",
                            currentValue: watchSearch,
                            onSearch: onSearchDevices,
                            onClear: () => setValue("searchTerm", ""),
                        }}
                    />
                </Accordion>
            </Flex>
        </Flex>
    );
};

export default DeviceSelector;
