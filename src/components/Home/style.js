import styled from "styled-components";
import bg from "../../assets/programming.jpg";

export const HomeComponent = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.85;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(238, 238, 238);
  font-size: 35px;
`;

export const Text = styled.div`
  position: relative;
  color: rgb(238, 238, 238);
  font-size: 70px;
`;
