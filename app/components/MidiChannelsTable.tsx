import React from "react";
import {
    Center,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
import { IMidiChannel } from "../types";
import { SlOptions } from "react-icons/sl";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrDuplicate } from "react-icons/gr";
import SkeletonTableBody from "./SkeletonTableBody";

interface Props {
    midiChannels: IMidiChannel[];
    onEdit: (id: string) => void;
    onDuplicate: (channel: IMidiChannel) => void;
    onDelete: (id: string) => void;
    loading?: boolean;
    editingChannels?: boolean;
}

const MidiChannelsTable = ({
    midiChannels,
    onEdit,
    onDuplicate,
    onDelete,
    loading,
    editingChannels,
}: Props) => {
    const skeletonOptions = {
        rows: [1, 2, 3],
        columns: [1, 2, 3, 4, 5],
        height: "25px",
    };

    return (
        <TableContainer w="full">
            {editingChannels && (
                <Center>
                    <Spinner
                        position="absolute"
                        top="10%"
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                </Center>
            )}
            <Table variant="midiChannel" size="sm" position="relative">
                <Thead>
                    <Tr>
                        <Th>Port</Th>
                        <Th>Ch</Th>
                        <Th>Device</Th>
                        <Th>Param</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                {loading ? (
                    <SkeletonTableBody skeletonOptions={skeletonOptions} />
                ) : (
                    <Tbody>
                        {midiChannels
                            .sort((a, b) => {
                                if (a.port === b.port) {
                                    if (a.channel === b.channel) {
                                        return a.device.name.localeCompare(
                                            b.device.name
                                        );
                                    }
                                    return a.channel - b.channel;
                                }
                                return a.port.localeCompare(b.port);
                            })
                            .map((channel) => {
                                return (
                                    <Tr key={`${channel.id}`}>
                                        <Td>
                                            <Text>{channel.port}</Text>
                                        </Td>
                                        <Td>{channel.channel}</Td>
                                        <Td>
                                            <Link
                                                href={`/device/${channel.device.id}?from=channel`}
                                            >
                                                {channel.device.name}
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Text>{channel.parameter}</Text>
                                        </Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton
                                                    height="24px"
                                                    as={IconButton}
                                                    aria-label="Options"
                                                    icon={<SlOptions />}
                                                    variant="unstyled"
                                                />
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={() =>
                                                            onEdit(channel.id)
                                                        }
                                                        icon={<MdEdit />}
                                                    >
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() =>
                                                            onDuplicate(channel)
                                                        }
                                                        icon={<GrDuplicate />}
                                                    >
                                                        Duplicate
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() =>
                                                            onDelete(channel.id)
                                                        }
                                                        icon={<MdDelete />}
                                                    >
                                                        Delete
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                );
                            })}
                    </Tbody>
                )}
            </Table>
        </TableContainer>
    );
};

export default MidiChannelsTable;
