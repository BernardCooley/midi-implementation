import React, { useRef } from "react";
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MidiDeviceListItem } from "../types";
import DeviceSearchBar, { DeviceSearchBarProps } from "./DeviceSearchBar";
import { useResizeObserver } from "usehooks-ts";
import DeviceItem from "./DeviceItem";
import SkeletonDeviceList from "./SkeletonDeviceList";

interface Props {
    title: string;
    devices: MidiDeviceListItem[];
    searchOptions?: DeviceSearchBarProps;
    loading?: boolean;
    displayHeart?: boolean;
    userId: string;
}

const DeviceListAccordionItem = ({
    title,
    devices,
    searchOptions,
    loading,
    displayHeart,
    userId,
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
                    {!loading ? (
                        <>
                            {devices.length === 0 ? (
                                <Box textAlign="center" mt={4}>
                                    No devices found
                                </Box>
                            ) : (
                                <Grid
                                    templateColumns={[
                                        "repeat(2, 1fr)",
                                        "repeat(3, 1fr)",
                                    ]}
                                    gap={[2, 4, 6]}
                                >
                                    {devices
                                        .filter(
                                            (device) =>
                                                device._count.deviceParamters >
                                                0
                                        )
                                        .map((device) => (
                                            <GridItem
                                                w="100%"
                                                key={device.name}
                                            >
                                                <DeviceItem
                                                    userId={userId}
                                                    displayHeart={displayHeart}
                                                    device={device}
                                                    onClick={() =>
                                                        router.push(
                                                            `/device/${device.id}`
                                                        )
                                                    }
                                                />
                                            </GridItem>
                                        ))}
                                </Grid>
                            )}
                        </>
                    ) : (
                        <SkeletonDeviceList width={width} />
                    )}
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default DeviceListAccordionItem;
