"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MidiChannels from "./components/MidiChannels";
import DeviceSelector from "./components/DeviceSelector";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchDevices, fetchMidiChannels } from "@/bff";
import { useDeviceContext } from "@/context/DeviceContext";

export default function Home() {
    const { updateDeviceList, updateMidiChannels } = useDeviceContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedTabIndex, setSelectedTabIndex] = useState(
        Number(searchParams.get("tabindex")) || 0
    );

    const getAllDevices = async () => {
        const devices = await fetchDevices();
        if (devices) {
            updateDeviceList(devices);
        }
    };

    const getMidiChannels = async () => {
        const midiChannels = await fetchMidiChannels({
            userId: "123456789",
        });
        if (midiChannels) {
            updateMidiChannels(midiChannels);
        }
    };

    useEffect(() => {
        getAllDevices();
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
