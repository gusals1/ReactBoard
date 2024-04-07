import styled from "@emotion/styled";

export const NavWrapper = styled.nav`
  width: 100%;
  background: #35c5f0;
`;
export const Navigation = styled.ul`
  width: 50%;
  height: 64px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const NavMenu = styled.li`
  text-align: center;
  flex: 1 1 auto;
  line-height: 64px;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
  }
  :hover {
    line-height: 60px;
    ::after {
      content: "";
      position: absolute;
      top: 2px;
      width: 100%;
      height: 2px;
      background: #fff;
      transition: width 0.2s ease-in-out;
    }
  }
`;
export const NavDivide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 33%;
    right: 0;
    width: 2px;
    height: 20px;
    background: #fff;
  }
`;
