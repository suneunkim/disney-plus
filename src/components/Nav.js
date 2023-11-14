import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  // 스크롤이 내려가면 헤더가 검정색으로
  const [show, setShow] = useState(false);
  const { pathname } = useLocation(); // Nav 에서 보여줄 컴포넌트 결정
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) setShow(true);
    else setShow(false);
  };

  // 검색창에 입력하면 search 페이지로 이동
  const handlerChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavWrapper show={show}>
      <Logo>
        <img onClick={() => (window.location.href = "/")} alt="Disney Plus Logo" src="/images/logo.svg" />
      </Logo>

      {pathname === "/" ? (
        <Login>login</Login>
      ) : (
        <Input value={searchValue} onChange={handlerChange} type="text" placeholder="찾고 싶은게 있다면?" />
      )}
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  transition: all 800ms;
`;

const Logo = styled.a`
  cursor: pointer;
  padding: 0px;
  width: 80px;

  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;
  border: 1px solid #f9f9f9;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;
