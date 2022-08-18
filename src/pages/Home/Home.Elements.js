import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 30px;

  @media screen and (max-width: 500px){
    margin: 50px 15px 0px 15px;
  }
`;

export const HomeTitle = styled.h1`
  margin-bottom: 20px;
  color: #063970;

  @media screen and (max-width: 500px){
    font-size: 22px;
    text-align: center;
  }
`;