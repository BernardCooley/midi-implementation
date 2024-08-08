"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MidiChannelTable from "./components/MidiChannelTable";
import DeviceSelector from "./components/DeviceSelector";

export default function Home() {
    return (
        <Tabs isFitted variant="enclosed-colored">
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
