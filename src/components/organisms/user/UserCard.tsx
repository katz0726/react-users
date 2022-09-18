import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react'

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  userFullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, userFullName, onClick } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={ imageUrl }
          alt="プロフィールアイコン"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{ userName }</Text>
        <Text fontSize="sm" color="gray">{ userFullName }</Text>
      </Stack>
    </Box>
  );
});