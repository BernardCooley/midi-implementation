"use client";

import {
    ChakraProvider,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import MidiCCTable from "./components/MidiCCTable";
import { theme } from "@/chakraTheme";
import MidiChannelTable from "./components/MidiChannelTable";

export default function Home() {
    return (
        <ChakraProvider theme={theme}>
            <Tabs isFitted variant="enclosed-colored">
                <TabList>
                    <Tab>Midi Channels</Tab>
                    <Tab>Device CCs</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <MidiChannelTable />
                    </TabPanel>
                    <TabPanel>
                        <MidiCCTable />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    );
}
