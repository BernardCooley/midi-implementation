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
import { fetchDevice } from "@/bff";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    deviceId: string | null;
}

const MidiCCTable = ({ deviceId }: Props) => {
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();
    const [device, setDevice] = useState<MidiDevice | null>(null);

    const getDevice = async (id: string) => {
        const device = await fetchDevice({ id });
        setDevice(device);
    };

    useEffect(() => {
        if (deviceId) {
            getDevice(deviceId);
        } else {
            setDevice(null);
        }
        setLoading(false);
    }, [deviceId]);

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
                                <Flex alignItems="center">
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
                                                                variant="primary"
                                                                layout=""
                                                                size="sm"
                                                            >
                                                                <Thead>
                                                                    <Tr>
                                                                        <Th>
                                                                            Parameter
                                                                        </Th>
                                                                        <Th>
                                                                            CC
                                                                            Number
                                                                        </Th>
                                                                    </Tr>
                                                                </Thead>
                                                                <Tbody>
                                                                    {device.ccs.map(
                                                                        (
                                                                            cc
                                                                        ) => (
                                                                            <Tr
                                                                                key={`${cc.parameterName}-${cc.number}`}
                                                                            >
                                                                                <Td>
                                                                                    {
                                                                                        cc.parameterName
                                                                                    }
                                                                                </Td>
                                                                                <Td>
                                                                                    {
                                                                                        cc.number
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
