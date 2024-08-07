import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: "Roboto, Arial, Helvetica, sans-serif",
        body: "Roboto, Arial, Helvetica, sans-serif",
    },
    components: {
        Select: {
            variants: {
                custom: {
                    field: {
                        textAlign: "center",
                        fontSize: "x-large",
                        _focus: {
                            borderColor: "brand.primary",
                            boxShadow: "none",
                        },
                    },
                },
            },
        },
    },
    colors: {
        brand: {},
    },
});
