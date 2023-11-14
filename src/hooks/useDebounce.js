import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  // 입력값이 변경될 때 타이머 설정
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // cleanup 함수로 타이머 해제, 메모리 누수 방지.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  // delay 경과 후 타이머 끝나면 리턴
  return debounceValue;
};

export default useDebounce;
