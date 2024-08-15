import React from "react";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { MidiDeviceListItem } from "../types";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

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
            position="relative"
        >
            <Flex w="full" direction="column" alignItems="flex-end">
                {displayHeart && (
                    <IconButton
                        display="flex"
                        justifyContent="center"
                        h="22px"
                        w="22px"
                        right={1}
                        top={1}
                        position="relative"
                        fontSize={["16px", "18px", "22px"]}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log("clicked");
                        }}
                        variant="unstyled"
                        aria-label="Search devices"
                        icon={
                            device.UserDevice?.find(
                                (device) => device.userId === userId
                            ) ? (
                                <FaHeart />
                            ) : (
                                <FaRegHeart />
                            )
                        }
                        _hover={{
                            transform: "scale(1.05)",
                            outline: "1px solid",
                            outlineColor: "gray.200",
                        }}
                    />
                )}
            </Flex>

            <Flex direction="column" gap={0} alignItems="center">
                <Text
                    textAlign="center"
                    noOfLines={1}
                    fontWeight={800}
                    fontSize={["xs", "xs", "sm", "md"]}
                >
                    {device.manufacturer.name}
                </Text>
                <Text
                    textAlign="center"
                    noOfLines={1}
                    fontSize={["sm", "sm", "md", "lg"]}
                >
                    {device.name}
                </Text>
            </Flex>
            <Button
                _hover={{
                    cursor: "pointer",
                    shadow: "xl",
                    transition: "all 0.1s",
                    outline: "1px solid",
                    outlineColor: "gray.200",
                }}
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
