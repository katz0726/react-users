/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザを特定し、 モーダルを表示するカスタムフック
export const useSelectUsers = () => {
  const [selectedUser, setSeletedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    
    const targetUser = users.find((user) => user.id === id);

    setSeletedUser(targetUser!);

    onOpen();
  }, []);


  return { onSelectUser, selectedUser };
};