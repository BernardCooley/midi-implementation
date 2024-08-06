"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import MidiCCTable from "./components/MidiCCTable";
import { theme } from "@/chakraTheme";
import MidiChannelTable from "./components/MidiChannelTable";

export default function Home() {
    return (
        <ChakraProvider theme={theme}>
            <Box p={6}>
                <MidiChannelTable />
                <MidiCCTable />
            </Box>
        </ChakraProvider>
    );
}
