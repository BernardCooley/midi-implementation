import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Icon,
    Image,
    Spinner,
    Text,
} from "@chakra-ui/react";
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
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Flex
            aria-selected={isSelected}
            shadow="md"
            h="full"
            direction="column"
            alignItems="center"
            rounded={6}
            position="relative"
            borderWidth={1}
            borderStyle="solid"
            borderColor={isSelected ? "gray.800" : "gray.200"}
            _hover={{
                cursor: "pointer",
                shadow: "xl",
                transition: "all 0.1s",
            }}
        >
            {isSelected && (
                <Box h="full" w="full" position="absolute" zIndex={200}>
                    <Center h="full">
                        <Spinner />
                    </Center>
                </Box>
            )}
            <Flex
                opacity={isSelected ? 0.4 : 1}
                pointerEvents={isSelected ? "none" : "auto"}
                onClick={() => {
                    onClick();
                    setIsSelected(true);
                }}
                direction="column"
                gap={0}
                alignItems="center"
            >
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
                opacity={isSelected ? 0.4 : 1}
                pointerEvents={isSelected ? "none" : "auto"}
                h="full"
                onClick={() => {
                    onClick();
                    setIsSelected(true);
                }}
                w="full"
                variant="unstyled"
                p={1}
            >
                <Box width="auto" aspectRatio="3/2" position="relative">
                    <Image
                        alt={device.name}
                        src={device.imageSrc || "deviceImages/default.jpg"}
                    />
                </Box>
                {displayHeart && (
                    <Icon
                        shadow="md"
                        color="gray.700"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.300"
                        p={1 / 2}
                        rounded="full"
                        position="absolute"
                        display="flex"
                        justifyContent="center"
                        h={["22px", "24px", "28px"]}
                        w={["22px", "24px", "28px"]}
                        right={1}
                        bottom={2}
                        fontSize={["16px", "18px", "22px"]}
                        aria-label="Search devices"
                        as={
                            device.UserDevice?.find(
                                (device) => device.userId === userId
                            )
                                ? FaHeart
                                : FaRegHeart
                        }
                    />
                )}
            </Button>
        </Flex>
    );
};

export default DeviceItem;
