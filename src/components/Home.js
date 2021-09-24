import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const Home = () => {
  return <HomeDiv>Welcome</HomeDiv>;
};

export default Home;
