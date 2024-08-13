import {
    Button,
    Flex,
    Grid,
    GridItem,
    Image,
    Spinner,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDeviceContext } from "@/context/DeviceContext";
// import { addDevice } from "@/bff";
// import { midiDevices } from "../data/midi-ccs-all";

const DeviceSelector = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { deviceList } = useDeviceContext();

    useEffect(() => {
        if (deviceList) {
            setLoading(false);
        }
    });

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
                    direction="column"
                    alignItems="center"
                    gap={2}
                    w={["full", "full", "70%"]}
                    m="auto"
                >
                    {/* <Button onClick={async () => addDevice(midiDevices)}>
            Seed database
        </Button> */}
                    <Text fontSize={["md", "lg", "xl", "2xl"]}>
                        Choose a device
                    </Text>
                    <Grid
                        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
                        gap={[4, 6, 8]}
                    >
                        {deviceList
                            .filter(
                                (device) => device._count.deviceParamters > 0
                            )
                            .map((device) => (
                                <GridItem w="100%" key={device.name}>
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Text
                                            fontSize={["xs", "sm", "md", "lg"]}
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
                </Flex>
            )}
        </Flex>
    );
};

export default DeviceSelector;
