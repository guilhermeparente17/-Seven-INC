import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #063970;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InputFormat = styled.input`
  width: ${({wid}) => wid};
  height: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  line-height: 10px;
  color: #063970;

  @media screen and (max-width: 975px){
    width: 100%;
  }
`;