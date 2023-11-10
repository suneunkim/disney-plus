import React, { useCallback, useEffect, useState } from "react";
import instance from "../api/axios";
import request from "../api/request";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]); // 20개의 영화가 담긴다.

  const fetchMovieData = useCallback(async () => {
    const response = await instance.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;

/*
여러개 fetch시 에러가 발생. 뭐가 잘못된건가 찾아보니 1개가 주소가 잘못됨. 
404에러는 해당 리소스를 찾을 수 없다는 의미이니 바로 주소를 확인할 것.
axios로 error handling을 하는 코드를 추가해보자.

useCallback?
useCallback은 React에서 함수를 메모이제이션하고, 해당 함수의 의존성이 변경될 때만 새로운 함수를 생성합니다. 이것은 주로 불필요한 함수 재생성을 방지하고 성능을 최적화하기 위해 사용

여러 컴포넌트 간에 함수를 전달하고 있고 이 함수가 특정 프롭스에 의존한다면, useCallback을 사용하는 것이 의미가 있다.
Row 컴포넌트를 다른 컴포넌트로 추출 or fetchUrl이 부모 컴포넌트에서 변경될 때만 함수가 다시 생성되기를 원한다면 useCallback 사용이 나을 수 있음.
*/
