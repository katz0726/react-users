import { useCallback, useState } from "react"
import axios from "axios";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [ loading, setLoading ] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({ title: "ログインしました", status: "success"});
          navigate("/home");
        } else {
          alert('ユーザが見つかりません');
          showMessage({ title: "ユーザが見つかりません", status: "error"});
        }
      })
      .catch((e) => {
        showMessage({ title: "ログインできません", status: "error"});
      })
      .finally(() => setLoading(false));
  }, [navigate, showMessage]);

  return { login, loading };
}
