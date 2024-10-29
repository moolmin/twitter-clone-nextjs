"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    // 윈도우가 존재할때는 클라이언트 환경(=브라우저) 라는것임
    // 브라우저에서만 동작하는 것을 보장
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};