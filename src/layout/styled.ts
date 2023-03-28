
import styled from "styled-components";

export const MainLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  /* padding-top: 80px; */
  display: flex;
  flex-direction: column;
  /* background-color: #DCDCDC; */

  & > .sidebar {
    overflow: hidden;
  }

  & > main {
    padding: 30px 24px;
    max-height: calc(100vh - 80px);
    flex: 1;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;

    & > .sidebar {
      width: 240px;
      transition: 0.3s width ease-in-out;
    }

    &.close {
      & > .sidebar {
        width: 0px;
      }
    }
  }
`;
export const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#6e45e2, #88d3ce);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 86px;

  & > h1 {
    font-size: 36px;
    color: white;
  }
`;
