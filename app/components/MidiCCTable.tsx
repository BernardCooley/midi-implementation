"use client";

import React, { useState } from "react";
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
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { midiDevices } from "../data/midi-ccs";
import DeviceSelector from "./DeviceSelector";
import { IoMdArrowDropleft } from "react-icons/io";

interface Props {}

const MidiCCTable = ({}: Props) => {
    const [deviceNumber, setDeviceNumber] = useState<number | null>(null);

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "60%"]}
            margin="auto"
        >
            {deviceNumber === null ? (
                <DeviceSelector onSelect={(index) => setDeviceNumber(index)} />
            ) : (
                <TableContainer w="full">
                    <Flex direction="column" gap={8}>
                        <Flex alignItems="center">
                            <Button
                                variant="unstyled"
                                onClick={() => setDeviceNumber(null)}
                            >
                                <Flex alignItems="center">
                                    <Icon
                                        fontSize="3xl"
                                        as={IoMdArrowDropleft}
                                    />
                                    <Text>Back</Text>
                                </Flex>
                            </Button>
                            <Flex alignItems="center" direction="column">
                                <Text fontSize="22px">
                                    {midiDevices[deviceNumber].name}
                                </Text>
                                <Image
                                    rounded={8}
                                    shadow="md"
                                    w="50%"
                                    objectFit="contain"
                                    m="auto"
                                    src={midiDevices[deviceNumber].imageSrc}
                                />
                            </Flex>
                        </Flex>
                        <Flex direction="column">
                            {midiDevices[deviceNumber].deviceParamters.map(
                                (device) => (
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
                                                        variant="simple"
                                                        layout=""
                                                        size="sm"
                                                    >
                                                        <Thead>
                                                            <Tr>
                                                                <Th>
                                                                    Parameter
                                                                </Th>
                                                                <Th>
                                                                    CC Number
                                                                </Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            {device.ccs.map(
                                                                (cc) => (
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
                                )
                            )}
                        </Flex>
                    </Flex>
                </TableContainer>
            )}
        </Flex>
    );
};

export default MidiCCTable;
