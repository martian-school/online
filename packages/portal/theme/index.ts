import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                height: "100%",
                background: "gray.600"
            },
            "#__next": {
                height: "100%"
            }

        },
    },
})