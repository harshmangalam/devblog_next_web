import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'

function PostHeader() {
    return (
        <Box>
            <HStack justifyContent="space-between">
                <Heading size="md">
                    Posts
                </Heading>
            </HStack>
        </Box>
    )
}

export default PostHeader
