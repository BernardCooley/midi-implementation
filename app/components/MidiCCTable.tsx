"use client";

import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Icon,
    IconButton,
    Image,
    Skeleton,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { IoMdArrowDropleft } from "react-icons/io";
import { MidiDevice } from "../types";
import {
    favouriteDevice,
    fetchDevice,
    fetchFirebaseImage,
    unFavouriteDevice,
} from "@/bff";
import { useRouter, useSearchParams } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { fakeUserId } from "@/consts";

interface Props {
    deviceId: string;
}

const MidiCCTable = ({ deviceId }: Props) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [deviceLoading, setDeviceLoading] = useState(true);
    const [favouriteLoading, setFavouriteLoading] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const [device, setDevice] = useState<MidiDevice | null>(null);

    const getDevice = async (id: string) => {
        const device = await fetchDevice({ id });
        if (device) {
            const deviceImage = await fetchFirebaseImage({
                folder: "deviceImages",
                name: id,
                extension: "jpg",
                environment: process.env.NODE_ENV,
            });
            device.imageSrc = deviceImage?.url || device.imageSrc;
            setDevice(device);
            setDeviceLoading(false);
            setFavouriteLoading(false);
        }
    };

    useEffect(() => {
        if (deviceId) {
            getDevice(deviceId);
        } else {
            setDevice(null);
        }
    }, [deviceId]);

    useEffect(() => {
        if (device) {
            const isFavourite =
                device.users.filter((user) => user.id === fakeUserId).length >
                0;
            setIsFavourite(isFavourite);
        }
    }, [device]);

    const onFavouriteDevice = async () => {
        setFavouriteLoading(true);
        if (isFavourite) {
            await unFavouriteDevice({
                userId: fakeUserId,
                deviceId: deviceId,
            });
            getDevice(deviceId);
        } else {
            await favouriteDevice({
                userId: fakeUserId,
                deviceId: deviceId,
            });
            getDevice(deviceId);
        }
    };

    const FavouriteIcon = () => {
        if (favouriteLoading) {
            return (
                <Spinner
                    right={2}
                    position="relative"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="md"
                />
            );
        }
        if (isFavourite) {
            return <FaHeart />;
        } else {
            return <FaRegHeart />;
        }
    };

    return (
        <Box w="full" h="85vh" position="relative">
            {deviceLoading ? (
                <Flex
                    direction="column"
                    gap={10}
                    w={["full", "90%", "70%", "60%"]}
                    margin="auto"
                >
                    <Skeleton h="200px" w="full" />
                    <Skeleton h="100px" w="full" />
                    <Skeleton h="100px" w="full" />
                    <Skeleton h="100px" w="full" />
                </Flex>
            ) : (
                <Flex
                    direction="column"
                    gap={10}
                    w={["full", "90%", "70%", "60%"]}
                    margin="auto"
                >
                    <TableContainer w="full">
                        {device && (
                            <Flex direction="column" gap={8}>
                                <Flex alignItems="center" position="relative">
                                    <Button
                                        position="absolute"
                                        variant="unstyled"
                                        onClick={() =>
                                            router.push(
                                                `/?tabindex=${
                                                    searchParams.get("from") ===
                                                    "channel"
                                                        ? 1
                                                        : 0
                                                }`
                                            )
                                        }
                                    >
                                        <Flex alignItems="center">
                                            <Icon
                                                fontSize="4xl"
                                                as={IoMdArrowDropleft}
                                            />
                                            <Text position="relative" left={-2}>
                                                Back
                                            </Text>
                                        </Flex>
                                    </Button>
                                    <Flex
                                        alignItems="center"
                                        direction="column"
                                    >
                                        <Text fontSize="md">{device.name}</Text>
                                        <Image
                                            alt={device.name}
                                            w="50%"
                                            objectFit="contain"
                                            m="auto"
                                            src={device.imageSrc}
                                        />
                                    </Flex>
                                    <IconButton
                                        pointerEvents={
                                            favouriteLoading ? "none" : "auto"
                                        }
                                        right={0}
                                        top={0}
                                        position="absolute"
                                        fontSize="24px"
                                        onClick={onFavouriteDevice}
                                        variant="unstyled"
                                        aria-label="Search devices"
                                        icon={<FavouriteIcon />}
                                    />
                                </Flex>
                                <Flex direction="column">
                                    {device.deviceParamters.length ? (
                                        device.deviceParamters.map((device) => (
                                            <Accordion
                                                key={`${device.groupName}-${device.ccs[0].parameterName}`}
                                                defaultIndex={[0]}
                                                allowMultiple
                                            >
                                                <AccordionItem>
                                                    <AccordionButton>
                                                        <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                        >
                                                            {device.groupName}
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>

                                                    <AccordionPanel>
                                                        <Flex
                                                            alignItems="flex-start"
                                                            direction="column"
                                                        >
                                                            <Table
                                                                __css={{
                                                                    "table-layout":
                                                                        "auto",
                                                                    width: "full",
                                                                }}
                                                                variant="primary"
                                                                layout=""
                                                                size="sm"
                                                            >
                                                                <Thead>
                                                                    <Tr>
                                                                        <Th>
                                                                            CC
                                                                        </Th>
                                                                        <Th>
                                                                            Parameter
                                                                        </Th>
                                                                    </Tr>
                                                                </Thead>
                                                                <Tbody>
                                                                    {device.ccs
                                                                        .sort(
                                                                            (
                                                                                a,
                                                                                b
                                                                            ) =>
                                                                                a.number -
                                                                                b.number
                                                                        )
                                                                        .map(
                                                                            (
                                                                                cc
                                                                            ) => (
                                                                                <Tr
                                                                                    key={`${cc.parameterName}-${cc.number}`}
                                                                                >
                                                                                    <Td>
                                                                                        {
                                                                                            cc.number
                                                                                        }
                                                                                    </Td>
                                                                                    <Td>
                                                                                        {
                                                                                            cc.parameterName
                                                                                        }
                                                                                    </Td>
                                                                                </Tr>
                                                                            )
                                                                        )}
                                                                </Tbody>
                                                            </Table>
                                                        </Flex>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        ))
                                    ) : (
                                        <Text>No midi CCs on this device</Text>
                                    )}
                                </Flex>
                            </Flex>
                        )}
                    </TableContainer>
                </Flex>
            )}
        </Box>
    );
};

export default MidiCCTable;
