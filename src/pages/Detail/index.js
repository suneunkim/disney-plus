import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../api/axios";
import styled from "styled-components";

const Detail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(`/movie/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    console.log(movie);
  }, [movieId]);

  if (!movie) return null;
  if (error) return <Error>요청하신 페이지를 찾을 수 없습니다.</Error>;

  return (
    <>
      <Section>
        <h1>
          {movie.title ? movie.title : movie.name}
          <span> {movie.release_date}</span>
        </h1>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
        <div>{movie.genres && movie.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}</div>
      </Section>
      <MovieInfo>
        <h2>
          <h4>{movie.tagline}</h4>
          <p>{movie.overview}</p>
        </h2>
      </MovieInfo>
    </>
  );
};
const Section = styled.section`
  width: 100%;
  margin-top: 100px;
  h1 {
    padding: 0 30px;
    span {
      font-size: 1.2rem;
      color: #fff;
    }
  }
  img {
    width: 100%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 30px;
    p {
      padding: 10px;
      border: 1px solid #fff;
      border-radius: 20px;
    }
  }
`;

const MovieInfo = styled.div`
  padding: 0 30px;

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Error = styled.div`
  margin-top: 40%;
  text-align: center;
`;
export default Detail;

// 검색 시에서는 이미지가 보였지만 movieId를 받아서 상세 페이지를 위한 api 호출이 에러가 있는 경우도 있음.

// fetchData 내에서 try catch 사용하고 에러 컴포넌트 보여주기
