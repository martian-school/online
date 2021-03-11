import {Box, Flex} from '@chakra-ui/react'
import type {ReactElement} from "react";

type TAppBaseProps = {
    children: ReactElement
}

export const AppBaseTemplate = ({children}: TAppBaseProps): ReactElement =>
    (
        <>
            <Flex direction="column" h="100%">
                <Box h="50px">Header</Box>
                <Flex h="100%">
                    <Box w="250px">Sidebar</Box>
                    <Flex mx="2" justify="center" h="100%">
                        <Flex direction="column" maxW="968px" w="100%">
                            <Box flex="1">{children}</Box>
                            <Box h="50px">Footer</Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );