"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MidiChannelTable from "./components/MidiChannelTable";
import DeviceSelector from "./components/DeviceSelector";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedTabIndex, setSelectedTabIndex] = useState(
        Number(searchParams.get("tabindex")) || 0
    );

    return (
        <Tabs
            index={selectedTabIndex}
            onChange={(index) => {
                setSelectedTabIndex(index);
                router.push(`/?tabindex=${index}`);
            }}
            isFitted
            variant="enclosed-colored"
        >
            <TabList>
                <Tab>Devices</Tab>
                <Tab>Midi Channels</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <DeviceSelector />
                </TabPanel>
                <TabPanel>
                    <MidiChannelTable />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
