import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MidiDeviceListItem } from "../types";

interface Props {
    device: MidiDeviceListItem;
    onClick: () => void;
}

const DeviceItem = ({ device, onClick }: Props) => {
    return (
        <Flex
            h="full"
            direction="column"
            alignItems="center"
            rounded={6}
            _hover={{
                outline: "1px solid gray",
                cursor: "pointer",
                scale: 1.5,
                shadow: "xl",
            }}
        >
            <Text fontWeight={800} fontSize={["xs", "xs", "sm", "md"]}>
                {device.manufacturer.name}
            </Text>
            <Text fontSize={["xs", "sm", "md", "lg"]}>{device.name}</Text>
            <Button
                h="full"
                onClick={onClick}
                w="full"
                variant="unstyled"
                p={1}
            >
                <Box width="auto" aspectRatio="3/2">
                    <Image
                        alt={device.name}
                        src={device.imageSrc || "deviceImages/default.jpg"}
                    />
                </Box>
            </Button>
        </Flex>
    );
};

export default DeviceItem;
