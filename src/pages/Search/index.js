import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../api/axios";
import styled, { keyframes } from "styled-components";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]); // 검색 결과 저장할 배열

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery(); // 인스턴스 만들고 get 으로 query= 뒤에 값 가져오기
  const searchTerm = query.get("q"); // 검색한 값 가져오기
  const debounceSearchTerm = useDebounce(searchTerm, 500); // 디바운스 적용
  const navigate = useNavigate(); // 검색한 영화 상세 페이지로 이동

  useEffect(() => {
    if (debounceSearchTerm) {
      fetchSearchMovie();
    }
  }, [debounceSearchTerm]);

  const fetchSearchMovie = async () => {
    try {
      const response = await instance.get(
        `search/multi?query=${debounceSearchTerm}&include_adult=false&language=ko&page=1`
      );
      setSearchResult(response.data.results);
      console.log(response);
    } catch (error) {
      console.log("fetchSearchMovie", error);
    }
  };

  return (
    <div>
      {searchResult.length > 0 ? (
        <SearchResult>
          {searchResult.map((movie) => (
            <div onClick={() => navigate(`/${movie.id}`)} key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.name} />
              <h3>{movie.title ? movie.title : movie.name}</h3>
            </div>
          ))}
        </SearchResult>
      ) : (
        <NoResult>
          <span>🤔</span>검색 결과가 없습니다.
        </NoResult>
      )}
    </div>
  );
};

export default Search;

// 상위 스코프에 이미 선언된 함수를 쓸 때는 매개변수로 전달하지 말고 그냥 쓰자.
// 매개변수로 받아서 쓰는 경우는 전달을 제대로 하는지 확인하자.

const SearchResult = styled.div`
  width: 100%;
  text-align: center;
  background-color: rgba(1, 1, 1, 0.2);
  padding: 5rem 0;
  div {
    flex: 1 1 auto;
    display: inline-block;
    padding: 0 1rem 4rem;
  }
  img {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NoResult = styled.div`
  display: flex;

  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
  span {
    font-size: 60px;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// 개선 할 점
// 검색어 입력 시 api 호출이 너무 빈번하다. 디바운스 적용 필요
// key up 이벤트 처리를 지연 시키는 방법으로 디바운스를 사용한다.
