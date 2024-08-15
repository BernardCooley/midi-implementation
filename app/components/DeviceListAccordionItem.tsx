import React, { useRef } from "react";
import {
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
    Skeleton,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MidiDeviceListItem } from "../types";
import DeviceSearchBar, { DeviceSearchBarProps } from "./DeviceSearchBar";
import { useResizeObserver } from "usehooks-ts";

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
    const ref = useRef<HTMLDivElement>(null);
    const { width = 0 } = useResizeObserver({
        ref,
        box: "border-box",
    });
    const router = useRouter();

    return (
        <AccordionItem ref={ref}>
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
                                                fontWeight={800}
                                                fontSize={[
                                                    "xs",
                                                    "xs",
                                                    "sm",
                                                    "md",
                                                ]}
                                            >
                                                {device.manufacturer.name}
                                            </Text>
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
                                                    src={
                                                        device.imageSrc ||
                                                        "deviceImages/default.jpg"
                                                    }
                                                />
                                            </Button>
                                        </Flex>
                                    </GridItem>
                                ))}
                        </Grid>
                    ) : (
                        <Stack>
                            <Grid
                                templateColumns={[
                                    "repeat(2, 1fr)",
                                    "repeat(3, 1fr)",
                                ]}
                                gap={[4, 6, 8]}
                            >
                                <Skeleton
                                    aspectRatio="3/2"
                                    w="auto"
                                    rounded="5%"
                                />
                                <Skeleton
                                    aspectRatio="3/2"
                                    w="auto"
                                    rounded="5%"
                                />
                                <Skeleton
                                    aspectRatio="3/2"
                                    w="auto"
                                    rounded="5%"
                                />
                                <Skeleton
                                    aspectRatio="3/2"
                                    w="auto"
                                    rounded="5%"
                                />
                                {width > 432 && (
                                    <>
                                        <Skeleton
                                            aspectRatio="3/2"
                                            w="auto"
                                            rounded="5%"
                                        />
                                        <Skeleton
                                            aspectRatio="3/2"
                                            w="auto"
                                            rounded="5%"
                                        />
                                    </>
                                )}
                            </Grid>
                        </Stack>
                    )}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default DeviceListAccordionItem;
