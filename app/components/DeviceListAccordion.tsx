import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Image,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MidiDeviceListItem } from "../types";
import { TextInput } from "./TextInput";

interface Props {
    title: string;
    devices: MidiDeviceListItem[];
    register?: DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    onSearchInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldError?: string;
    searchBarIcons?: React.JSX.Element | undefined;
}

const DeviceListAccordion = ({
    title,
    devices,
    register,
    onSearchInputChange,
    fieldError,
    searchBarIcons,
}: Props) => {
    const router = useRouter();

    return (
        <Accordion w="full" defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    {register ? (
                        <TextInput
                            placeholder="Search for devices"
                            type="text"
                            size="sm"
                            fieldProps={register}
                            onChange={onSearchInputChange}
                            error={fieldError}
                            height="40px"
                            variant="filled"
                            rightIcon={searchBarIcons}
                        />
                    ) : null}
                    {devices.length ? (
                        <Grid
                            templateColumns={[
                                "repeat(2, 1fr)",
                                "repeat(3, 1fr)",
                            ]}
                            gap={[4, 6, 8]}
                        >
                            {devices
                                .filter(
                                    (device) =>
                                        device._count.deviceParamters > 0
                                )
                                .map((device) => (
                                    <GridItem w="100%" key={device.name}>
                                        <Flex
                                            direction="column"
                                            alignItems="center"
                                        >
                                            <Text
                                                fontSize={[
                                                    "xs",
                                                    "sm",
                                                    "md",
                                                    "lg",
                                                ]}
                                            >
                                                {device.name}
                                            </Text>
                                            <Button
                                                h="full"
                                                onClick={() =>
                                                    router.push(
                                                        `/device/${device.id}`
                                                    )
                                                }
                                                w="full"
                                                variant="unstyled"
                                                p={1}
                                                _hover={{
                                                    outline: "1px solid gray",
                                                    cursor: "pointer",
                                                    scale: 1.5,
                                                    shadow: "xl",
                                                }}
                                            >
                                                <Image
                                                    alt={device.name}
                                                    src={device.imageSrc}
                                                />
                                            </Button>
                                        </Flex>
                                    </GridItem>
                                ))}
                        </Grid>
                    ) : null}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default DeviceListAccordion;
