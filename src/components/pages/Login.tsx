import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { memo, FC, useState, ChangeEvent } from 'react'
import { app_name } from '../../App';
import { PrimaryButtton } from '../atoms/button/PrimaryButtton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId);

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
          <Input
            value={userId}
            onChange={onChangeUserId}
            placeholder="ユーザID"
          />
          <PrimaryButtton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButtton>
        </Stack>
      </Box>
    </Flex>
  )
});