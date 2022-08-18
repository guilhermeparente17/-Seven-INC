import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #063970;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 3px 10px black;

  @media screen and (max-width: 975px){
    margin-bottom: 20px;
  }
`;

export const HeaderLogo = styled.h2`
  margin-left: 20px;
  color: #fff;
`;