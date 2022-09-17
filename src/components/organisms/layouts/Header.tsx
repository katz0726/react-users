import { memo, FC } from 'react';
import {
  Flex,
  Heading,
  Box,
  Link,
  useDisclosure
} from '@chakra-ui/react';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { useNavigate } from 'react-router-dom';


export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = navigate("/home");
  const onClickUserManagement = navigate("/home/user_management");
  const onClickSettings = navigate("/home/setting");

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={ { base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={ () => onClickHome }
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザ管理アプリ</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={ () => onClickUserManagement }>ユーザ一覧</Link>
          </Box>
          <Link onClick={ () => onClickSettings }>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={() => onClickHome}
        onClickSetting={() => onClickSettings}
        onClickUserManagement={() => onClickUserManagement}
      />
    </>
  )
});