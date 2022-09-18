import { Wrap, WrapItem } from '@chakra-ui/react'
import { memo, FC } from 'react'
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{base: 4, md: 10}}>
      <WrapItem>
        <UserCard
          imageUrl={'https://source.unsplash.com/random'}
          userName={'Katz0726'}
          userFullName={'Katz 0726'}
        />
      </WrapItem>
    </Wrap>
  )
});