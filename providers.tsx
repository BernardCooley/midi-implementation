"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakraTheme";
import { DeviceContextProvider } from "./context/DeviceContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <DeviceContextProvider>{children}</DeviceContextProvider>
            </ChakraProvider>
        </CacheProvider>
    );
}
