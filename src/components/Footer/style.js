import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const LeftColumn = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.darkBackground};
  @media (max-width:1000px){
    background-color: ${({theme}) => theme.lightBackground};
  }
`;
export const RightColumn = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.lightBackground};
`;

export const FooterText = styled.p`
  font-family: "Poppins", sans-serif;
  position: absolute;
  font-size: 1.2em;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ac9e51;
  @media (max-width: 751px) {
    font-size: 0.9em;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 300px) {
    font-size: 0.65em;
  }
`;
