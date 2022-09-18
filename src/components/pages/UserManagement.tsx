
/* eslint-disable react-hooks/exhaustive-deps */

import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { memo, FC, useEffect, useCallback } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUsers } from '../../hooks/useSelectUser';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser} = useSelectUsers();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen})
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map(user => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl={'https://source.unsplash.com/random'}
                userName={user.username}
                userFullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
});