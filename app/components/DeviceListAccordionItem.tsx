import React from "react";
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem,
    Image,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MidiDeviceListItem } from "../types";
import DeviceSearchBar, { DeviceSearchBarProps } from "./DeviceSearchBar";

interface Props {
    title: string;
    devices: MidiDeviceListItem[];
    searchOptions?: DeviceSearchBarProps;
    loading?: boolean;
}

const DeviceListAccordionItem = ({
    title,
    devices,
    searchOptions,
    loading,
}: Props) => {
    const router = useRouter();

    return (
        <AccordionItem>
            <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                    {title}
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>
                {searchOptions ? <DeviceSearchBar {...searchOptions} /> : null}
                <Box minH="100px" position="relative">
                    {devices.length && !loading ? (
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
                    ) : (
                        <Center>
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                                position="absolute"
                                top="30%"
                            />
                        </Center>
                    )}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default DeviceListAccordionItem;
