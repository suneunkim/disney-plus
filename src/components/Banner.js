import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import request from "../api/request";
import "./Banner.css";
import styled from "styled-components";

const MainBanner = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [movie, setMovie] = useState([]); // 메인 배너 영화 정보
  const [videoClick, setVideoClick] = useState(false);

  const fetchData = async () => {
    const response = await instance.get(request.fetchNowPlaying);

    // 메인 배너 이미지 랜덤으러 가져오기
    const mainBannerId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id;

    const { data: movieDetail } = await instance.get(`movie/${mainBannerId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };
  // 설명이 너무 길면 자르고 ... 표시
  const truncate = (str, n) => (str?.length > n ? str.substring(0, n - 1) + "..." : str);

  // Play 버튼 클릭 시 영상 재생
  if (videoClick) {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loof=1&mute=1&playlist=${movie?.videos?.results[0]?.key}`}
            width="640"
            height="360"
            allow="autoplay; fullscreen;"
          />
        </HomeContainer>
        <CloseButton
          onClick={() => {
            setVideoClick(false);
          }}
        >
          X
        </CloseButton>
      </Container>
    );
  } else {
    // 메인 배너 header의 배경 이미지로 사용
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{movie.title || movie.original_title}</h1>
          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key && (
              <button onClick={() => setVideoClick(true)} className="banner__button play">
                Play
              </button>
            )}
          </div>
          <p className="banner__description">{truncate(movie.overview, 200)}</p>
        </div>
        <div className="banner__fadeBottom" />
      </header>
    );
  }
};

export default MainBanner;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

// iframe은 다른 페이지를 불러와서 현재 페이지에 포함시키는 태그
const Iframe = styled.iframe`
  width: 100%;
  height: 85%;
  z-index: -1;
  opacity: 0.8;
  border: none;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 20%;
  right: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
`;
