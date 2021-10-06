import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const Input = styled.input`
  position: absolute;
  width: 509px;
  height: 46px;
  left: 221px;
  top: 35px;
  :hover {
    background: rgba(100, 100, 100, 0.08);
  }

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const Button = styled.button`
  position: absolute;
  width: 138px;
  height: 46px;
  left: 754px;
  top: 34px;
  border-radius: 8px;

  background: #204080;
  color: white;
  :hover {
    background: #4f75c2;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 149px;
  height: 63px;
  left: 37px;
  top: 27px;
`;
