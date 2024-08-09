import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchDevices } from "@/bff";
import { MidiDeviceListItem } from "../types";
import { useRouter } from "next/navigation";

const DeviceSelector = () => {
    const router = useRouter();
    const [allDevices, setAllDevices] = useState<MidiDeviceListItem[]>([]);

    const getAllDevices = async () => {
        const devices = await fetchDevices();
        if (devices) {
            setAllDevices(devices);
        }
    };

    useEffect(() => {
        getAllDevices();
    }, []);

    return (
        <Flex
            direction="column"
            alignItems="center"
            gap={2}
            w={["full", "full", "70%"]}
            m="auto"
        >
            <Text fontSize={["md", "lg", "xl", "2xl"]}>Choose a device</Text>
            <Grid
                templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
                gap={[4, 6, 8]}
            >
                {allDevices
                    .filter((device) => device._count.deviceParamters > 0)
                    .map((device) => (
                        <GridItem w="100%" key={device.name}>
                            <Flex direction="column" alignItems="center">
                                <Text fontSize={["xs", "sm", "md", "lg"]}>
                                    {device.name}
                                </Text>
                                <Button
                                    h="full"
                                    onClick={() =>
                                        router.push(`/device/${device.id}`)
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
        </Flex>
    );
};

export default DeviceSelector;
