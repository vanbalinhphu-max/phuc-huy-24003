"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLoginAction = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); //xoá lỗi cũ trước khi thử login mới

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(
          data.message ||
            "Username hoặc password không đúng. Vui lòng thử lại.",
        );
        console.error('aaaa')
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Đã có lỗi xảy ra khi login. Vui lòng thử lại.");
              console.error('aaaa')

    }
  };

  return {
    userName,
    password,
    setUserName,
    setPassword,
    handleLogin,
    error,
  };
};
