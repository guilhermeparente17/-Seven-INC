import styled from 'styled-components';

export const EmployeeShowTitle = styled.h1`
  margin: 30px 0px 40px 50px;
  text-transform: uppercase;
  font-weight: 700;
  color: #063970;
  font-size: 30px;

  @media screen and (max-width: 450px){
    font-size: 20px;
    text-align: center;
    margin: 30px 0px 40px 0px;
    text-align: center;
  }
`

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 975px){
    height: 100%;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 550px;
  background-color: #fff;
  margin: 0px 60px;
  
  border-radius: 20px;
  margin-top: -200px;
  padding-right: 20px;

  @media screen and (max-width: 975px){
    height: 100%;
    margin-top: 0px;
    margin: 0px 15px;
  }
`;

export const FormControl = styled.div`
  margin-left: 50px; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  

  @media screen and (max-width: 975px){
    margin-right: 20px;
    margin-left: 20px; 
    margin-bottom: ${({marginB}) => marginB};
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  margin-top: ${({marginT}) => `${marginT}px`};

  @media screen and (max-width: 975px){
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

export const Buttons = styled.div`
  margin-left: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 220px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 975px){
    margin-left: 20px;
  }
`;