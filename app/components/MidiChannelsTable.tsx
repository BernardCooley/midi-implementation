import React from "react";
import {
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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

interface Props {
    midiChannels: IMidiChannel[];
    onEdit: (id: string) => void;
    onDuplicate: (channel: IMidiChannel) => void;
    onDelete: (id: string) => void;
}

const MidiChannelsTable = ({
    midiChannels,
    onEdit,
    onDuplicate,
    onDelete,
}: Props) => {
    return (
        <TableContainer w="full">
            <Table variant="primary" size="sm">
                <Thead>
                    <Tr>
                        <Th>Port</Th>
                        <Th>Ch</Th>
                        <Th>Device</Th>
                        <Th>Param</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {midiChannels
                        .sort((a, b) => a.channel - b.channel)
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
            </Table>
        </TableContainer>
    );
};

export default MidiChannelsTable;
