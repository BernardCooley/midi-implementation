import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { midiDevices } from "../data/midi-ccs";

interface Props {
    onSelect: (index: number) => void;
}

const DeviceSelector = ({ onSelect }: Props) => {
    return (
        <Grid
            templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
            ]}
            gap={8}
        >
            {midiDevices.map((device, index) => (
                <GridItem
                    w="100%"
                    key={device.name}
                    shadow="md"
                    rounded={8}
                    _hover={{
                        outline: "1px solid gray",
                        cursor: "pointer",
                        scale: 1.5,
                        shadow: "2xl",
                    }}
                >
                    <Flex direction="column" alignItems="center">
                        <Text>{device.name}</Text>
                        <Button
                            h="full"
                            onClick={() => onSelect(index)}
                            w="full"
                            variant="unstyled"
                        >
                            <Image rounded={8} src={device.imageSrc} />
                        </Button>
                    </Flex>
                </GridItem>
            ))}
        </Grid>
    );
};

export default DeviceSelector;
