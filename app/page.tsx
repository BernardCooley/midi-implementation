"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import MidiTable from "./components/MidiTable";
import { theme } from "@/chakraTheme";

export default function Home() {
    return (
        <ChakraProvider theme={theme}>
            <Box p={6}>
                <MidiTable />
            </Box>
        </ChakraProvider>
    );
}
