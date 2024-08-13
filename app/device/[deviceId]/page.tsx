"use client";

import MidiCCTable from "@/app/components/MidiCCTable";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const Device = () => {
    const device = usePathname();
    const deviceId = device?.split("/")[2];

    return (
        <Box pt={10}>
            {deviceId && deviceId.length && <MidiCCTable deviceId={deviceId} />}
        </Box>
    );
};

export default Device;
