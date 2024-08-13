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
import { favouriteDevice, fetchDevice, unFavouriteDevice } from "@/bff";
import { useRouter, useSearchParams } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface Props {
    deviceId: string;
}

const MidiCCTable = ({ deviceId }: Props) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();
    const [device, setDevice] = useState<MidiDevice | null>(null);

    const getDevice = async (id: string) => {
        const device = await fetchDevice({ id });
        setDevice(device);
        setLoading(false);
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
                device.users.filter((user) => user.id === "123456789").length >
                0;
            setIsFavourite(isFavourite);
        }
    }, [device]);

    const onFavouriteDevice = async () => {
        if (isFavourite) {
            await unFavouriteDevice({
                userId: "123456789",
                deviceId: deviceId,
            });
            getDevice(deviceId);
        } else {
            await favouriteDevice({
                userId: "123456789",
                deviceId: deviceId,
            });
            getDevice(deviceId);
        }
    };

    return (
        <Box w="full" h="85vh" position="relative">
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
                                            src={`../${device.imageSrc}`}
                                        />
                                    </Flex>
                                    <IconButton
                                        right={0}
                                        position="absolute"
                                        fontSize="24px"
                                        onClick={onFavouriteDevice}
                                        variant="unstyled"
                                        aria-label="Search devices"
                                        icon={
                                            isFavourite ? (
                                                <FaHeart />
                                            ) : (
                                                <FaRegHeart />
                                            )
                                        }
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
