import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import MainBanner from "./components/Banner";
import Category from "./components/Category";
import Row from "./components/Row";
import request from "./api/request";

function App() {
  return (
    <Container className="App">
      <Nav />
      <MainBanner />
      <Category />
      <Row title="최근 인기있는 작품들" id="now" fetchUrl={request.fetchTrending} />
      <Row title="평점이 좋은 작품들" id="now" fetchUrl={request.fetchTopRated} />
      <Row title="로맨스가 필요해" id="now" fetchUrl={request.fetchRomanceMovies} />
      <Row title="코미디를 찾으신다면" id="now" fetchUrl={request.fetchComedyMoives} />
      <Row title="오늘 밤은 호러무비로" id="now" fetchUrl={request.fetchHorrorMovies} />
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px); // 화면의 최소 높이를 250px 설정
  overflow-x: hidden;
  display: block;
  top: 82px;
  padding: 0 calc(3.5vw + 5px); // 패딩은 뷰포트 너비에 따라 변하지만 최소 5px 고정

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px; // 모든 방향에 대해 위치를 0px로 설정
    opacity: 1;
    z-index: -1;
  }
`;
