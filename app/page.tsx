"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MidiChannels from "./components/MidiChannels";
import DeviceSelector from "./components/DeviceSelector";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchMidiChannels } from "@/bff";
import { useDeviceContext } from "@/context/DeviceContext";
import { fakeUserId } from "@/consts";

export default function Home() {
    const { updateMidiChannels } = useDeviceContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedTabIndex, setSelectedTabIndex] = useState(
        Number(searchParams.get("tabindex")) || 0
    );

    const getMidiChannels = async () => {
        const midiChannels = await fetchMidiChannels({
            userId: fakeUserId,
        });
        if (midiChannels) {
            updateMidiChannels(midiChannels);
        }
    };

    useEffect(() => {
        getMidiChannels();
    }, []);

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
                    <MidiChannels />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
