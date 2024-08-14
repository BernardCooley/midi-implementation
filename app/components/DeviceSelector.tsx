import { Flex, IconButton, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDeviceContext } from "@/context/DeviceContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { getUserDevices, searchDevices } from "@/bff";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { MidiDeviceListItem } from "../types";
import { fakeUserId } from "@/consts";
import DeviceListAccordion from "./DeviceListAccordion";
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
    const { updateDeviceSearchTerm, deviceSearchTerm } = useDeviceContext();

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
            searchTerm: deviceSearchTerm || "",
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
            updateDeviceSearchTerm("");
        }
    };

    const SearchBarIcons = () => {
        if (watchSearch) {
            return (
                <Flex pr={watchSearch !== deviceSearchTerm ? 8 : 0}>
                    {watchSearch !== deviceSearchTerm && (
                        <IconButton
                            onClick={() => onSearchDevices(watchSearch)}
                            variant="unstyled"
                            aria-label="Search devices"
                            icon={<FaSearch />}
                        />
                    )}
                    <IconButton
                        fontSize="24px"
                        onClick={() => setValue("searchTerm", "")}
                        variant="unstyled"
                        aria-label="Search devices"
                        icon={<MdOutlineClose />}
                    />
                </Flex>
            );
        }
    };

    return (
        <Flex w="full" h="85vh" position="relative">
            {loading ? (
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                    position="absolute"
                    top="50%"
                    left="48%"
                />
            ) : (
                <Flex
                    justifyContent="flex-start"
                    direction="column"
                    alignItems="center"
                    gap={2}
                    w={["full", "full", "70%"]}
                    m="auto"
                    h="full"
                >
                    <DeviceListAccordion
                        title="Your Devices"
                        devices={userDevices}
                    />
                    <DeviceListAccordion
                        title="All Devices"
                        register={register("searchTerm")}
                        onSearchInputChange={(e) =>
                            setValue("searchTerm", e.target.value)
                        }
                        fieldError={errors.searchTerm?.message}
                        searchBarIcons={<SearchBarIcons />}
                        devices={allDevices}
                    />
                </Flex>
            )}
        </Flex>
    );
};

export default DeviceSelector;
