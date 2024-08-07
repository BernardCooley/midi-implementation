import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { midiDevices } from "../data/midi-ccs";

interface Props {
    onSelect: (index: number) => void;
}

const DeviceSelector = ({ onSelect }: Props) => {
    return (
        <Flex direction="column" alignItems="center" gap={2}>
            <Text fontSize="xl">Choose a device</Text>
            <Grid
                templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
                gap={8}
            >
                {midiDevices
                    .filter((dev) => dev.deviceParamters.length > 0)
                    .map((device, index) => (
                        <GridItem w="100%" key={device.name}>
                            <Flex direction="column" alignItems="center">
                                <Text>{device.name}</Text>
                                <Button
                                    h="full"
                                    onClick={() => onSelect(index)}
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
                                    <Image src={device.imageSrc} />
                                </Button>
                            </Flex>
                        </GridItem>
                    ))}
            </Grid>
        </Flex>
    );
};

export default DeviceSelector;
