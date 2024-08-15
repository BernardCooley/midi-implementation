import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { TextInput } from "./TextInput";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export interface DeviceSearchBarProps {
    register: DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldError: string;
    currentValue: string;
    onSearch: (searchTerm: string) => void;
    onClear: () => void;
}

const DeviceSearchBar = ({
    register,
    onSearchInputChange,
    fieldError,
    currentValue,
    onSearch,
    onClear,
}: DeviceSearchBarProps) => {
    const SearchBarIcons = () => {
        if (currentValue) {
            return (
                <Flex pr={currentValue.length > 0 ? 8 : 0}>
                    {currentValue.length > 0 && (
                        <IconButton
                            onClick={() => onSearch(currentValue)}
                            variant="unstyled"
                            aria-label="Search devices"
                            icon={<FaSearch />}
                        />
                    )}
                    <IconButton
                        fontSize="24px"
                        onClick={onClear}
                        variant="unstyled"
                        aria-label="Search devices"
                        icon={<MdOutlineClose />}
                    />
                </Flex>
            );
        }
    };

    return (
        <TextInput
            onEnter={() => onSearch(currentValue)}
            placeholder="Search for devices"
            type="text"
            size="sm"
            fieldProps={register}
            onChange={onSearchInputChange}
            error={fieldError}
            height="40px"
            variant="filled"
            rightIcon={<SearchBarIcons />}
        />
    );
};

export default DeviceSearchBar;
