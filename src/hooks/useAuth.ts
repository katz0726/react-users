import { useCallback, useState } from "react"
import axios from "axios";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          // 仮にid：10のユーザを管理者とする
          const isAdmin = res.data.id === 10 ? true : false;

          // ユーザ情報をContextに保持
          setLoginUser({ ...res.data, isAdmin });

          showMessage({ title: "ログインしました", status: "success"});
          navigate("/home");
        } else {
          showMessage({ title: "ユーザが見つかりません", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
        setLoading(false);
      });
  }, [setLoginUser, navigate, showMessage, setLoading]);

  return { login, loading };
}
