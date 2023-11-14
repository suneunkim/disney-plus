import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
        <video autoPlay loop muted>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay loop muted>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay loop muted>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="pixar" />
        <video autoPlay loop muted>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="pixar" />
        <video autoPlay loop muted>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px; // 상단 30px, 하단 26px
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Wrap = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  // 그림자와 보더로 입체감 있어 보임
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; // cubic-bezier: 애니메이션 속도 조절

  @media (max-width: 768px) {
    padding-top: 36%;
    margin-left: 10%;
    margin-right: 10%;
  }

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover; // 이미지 비율 유지
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1; // 이미지가 비디오 위에 있도록 설정

    @media (max-width: 768px) {
      object-fit: contain;
    }
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px --10px;
    transform: scale(1.1);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

/*
width와 height를 안쓰고 padding-top으로 높이를 가진다?
Wrap 요소의 높이를 가로로 56% 만큼의 여백으로 채우도록 지정
 일반적으로 비디오나 이미지를 감싸는 부모 컨테이너에 사용되는 기술 중 하나, 부모 요소의 폭에 상대적으로 측정된다.
*/
