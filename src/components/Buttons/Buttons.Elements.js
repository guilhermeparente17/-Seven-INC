import styled from 'styled-components';
import { Box  } from "@mui/material";

export const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #063970;
  border: 2px solid #000;
  box-shadow: 24;
  margin-top: -250px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
`;