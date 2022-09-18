import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { memo, FC } from 'react'
import { app_name } from '../../App';
import { PrimaryButtton } from '../atoms/button/PrimaryButtton';

export const Login: FC = memo(() => {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
    >
      <Box
        bg="white"
        w="sm"
        p={4}
        borderRadius="md"
        shadow="md"
      >
        <Heading as="h1" size="lg" textAlign="center">{app_name}</Heading>
        <Divider my={4} />

        <Stack spacing={6} py={4} px={10}>
        <Input placeholder="ユーザID" />
        <PrimaryButtton>ログイン</PrimaryButtton>
        </Stack>
      </Box>
    </Flex>
  )
});