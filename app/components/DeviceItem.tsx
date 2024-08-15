import React from "react";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { MidiDeviceListItem } from "../types";
import { FaHeart } from "react-icons/fa";

interface Props {
    device: MidiDeviceListItem;
    onClick: () => void;
    displayHeart?: boolean;
    userId: string;
}

const DeviceItem = ({
    device,
    onClick,
    displayHeart = false,
    userId,
}: Props) => {
    return (
        <Flex
            h="full"
            direction="column"
            alignItems="center"
            rounded={6}
            _hover={{
                outline: "1px solid",
                outlineColor: "gray.200",
                cursor: "pointer",
                transform: "scale(1.05)",
                shadow: "xl",
                transition: "all 0.1s",
            }}
            position="relative"
        >
            {displayHeart &&
                device.UserDevice?.find(
                    (device) => device.userId === userId
                ) && (
                    <Icon
                        opacity={0.8}
                        right={1}
                        top={1}
                        position="absolute"
                        fontSize="16px"
                        as={FaHeart}
                    />
                )}
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
