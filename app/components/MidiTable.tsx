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
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { midiCCs } from "../data/midi-ccs";
import { convertToMidiCCs } from "@/utils";
import { MidiDevice } from "../types";

interface Props {}

const MidiTable = ({}: Props) => {
    const [deviceNumber, setDeviceNumber] = useState<number | null>(null);
    const [midiDevices, setMidiDevices] = useState<MidiDevice[]>([]);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    useEffect(() => {
        if (midiCCs) {
            setMidiDevices(convertToMidiCCs(midiCCs));
        }
    }, [midiCCs]);

    return (
        <Flex
            direction="column"
            gap={10}
            w={["full", "90%", "70%", "50%"]}
            margin="auto"
        >
            <Select
                variant="custom"
                placeholder="Select Device"
                onChange={(e) => setDeviceNumber(Number(e.target.value))}
            >
                {midiDevices.map((device, index) => (
                    <option key={device.name} value={index}>
                        {device.name}
                    </option>
                ))}
            </Select>
            {deviceNumber !== null && (
                <Flex
                    w="full"
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-end"
                    gap={2}
                >
                    <Button
                        w="fit-content"
                        variant="unstyled"
                        onClick={() => setCollapsed((prev) => !prev)}
                    >
                        {collapsed ? "Expand" : "Collapse"} all
                    </Button>
                    <TableContainer w="full">
                        <Flex direction="column" gap={8}>
                            <Flex direction="column">
                                {midiDevices[deviceNumber].deviceParamters.map(
                                    (device) => (
                                        <Accordion
                                            key={`${device.groupName}-${device.ccs[0].parameterName}`}
                                            defaultIndex={[0]}
                                            index={collapsed ? [] : [0]}
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
                                                                        Number
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
                </Flex>
            )}
        </Flex>
    );
};

export default MidiTable;
