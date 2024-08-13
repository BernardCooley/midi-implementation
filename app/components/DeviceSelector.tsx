import {
    Button,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Image,
    Spinner,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDeviceContext } from "@/context/DeviceContext";
import { TextInput } from "./TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { searchDevices } from "@/bff";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
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
    const router = useRouter();
    const {
        deviceList,
        updateDeviceList,
        updateDeviceSearchTerm,
        deviceSearchTerm,
    } = useDeviceContext();

    useEffect(() => {
        if (deviceList) {
            setLoading(false);
        }
    });

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

    useEffect(() => {
        if (watchSearch === "") {
            onSearchDevices(watchSearch);
            reset({ searchTerm: "" });
        }
    }, [watchSearch]);

    const onSearchDevices = async (searchTerm: FormData["searchTerm"]) => {
        setLoading(true);
        try {
            const devices = await searchDevices({ searchTerm });
            if (devices) {
                updateDeviceList(devices);
                updateDeviceSearchTerm(searchTerm);
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
                    <TextInput
                        placeholder="Search for devices"
                        type="text"
                        size="sm"
                        fieldProps={register("searchTerm")}
                        onChange={(e) => setValue("searchTerm", e.target.value)}
                        error={errors.searchTerm?.message}
                        height="40px"
                        variant="filled"
                        rightIcon={<SearchBarIcons />}
                    />
                    {/* <Button onClick={async () => addDevice(midiDevices)}>
            Seed database
        </Button> */}
                    {deviceList.length ? (
                        <Grid
                            templateColumns={[
                                "repeat(2, 1fr)",
                                "repeat(3, 1fr)",
                            ]}
                            gap={[4, 6, 8]}
                        >
                            {deviceList
                                .filter(
                                    (device) =>
                                        device._count.deviceParamters > 0
                                )
                                .map((device) => (
                                    <GridItem w="100%" key={device.name}>
                                        <Flex
                                            direction="column"
                                            alignItems="center"
                                        >
                                            <Text
                                                fontSize={[
                                                    "xs",
                                                    "sm",
                                                    "md",
                                                    "lg",
                                                ]}
                                            >
                                                {device.name}
                                            </Text>
                                            <Button
                                                h="full"
                                                onClick={() =>
                                                    router.push(
                                                        `/device/${device.id}`
                                                    )
                                                }
                                                w="full"
                                                variant="unstyled"
                                                p={1}
                                                _hover={{
                                                    outline: "1px solid gray",
                                                    cursor: "pointer",
                                                    scale: 1.5,
                                                    shadow: "xl",
                                                }}
                                            >
                                                <Image
                                                    alt={device.name}
                                                    src={device.imageSrc}
                                                />
                                            </Button>
                                        </Flex>
                                    </GridItem>
                                ))}
                        </Grid>
                    ) : (
                        <Text w="full" textAlign="center">
                            No Devices Found
                        </Text>
                    )}
                </Flex>
            )}
        </Flex>
    );
};

export default DeviceSelector;
