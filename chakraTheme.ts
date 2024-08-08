import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: "Roboto, Arial, Helvetica, sans-serif",
        body: "Roboto, Arial, Helvetica, sans-serif",
    },
    colors: {
        brand: {
            primary: "#11999e",
            backgroundPrimary: "#293533",
            backgroundTertiaryOpaque: "rgba(86, 108, 104, 0.46)",
            error: "#ff0000",
        },
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
        Input: {
            variants: {
                primary: {
                    field: {
                        height: "70px",
                        border: "1px solid",
                        borderColor: "brand.backgroundPrimary",
                        shadow: "md",
                        backgroundColor: "brand.backgroundTertiaryOpaque",
                        color: "white",
                        _focus: {
                            shadow: "xl",
                            borderColor: "brand.primary",
                        },
                        _invalid: {
                            borderColor: "brand.error",
                        },
                    },
                },
            },
        },
    },
});
