import styled from "styled-components";

// oluşan card.js in tüm componentleri

export const Container = styled.div`
  height: 300px;
  width: 709px;
  margin: 20px 0 0 -150px;
`;
export const CardItem = styled.div`
  max-height: 250px;
  width: 709px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
`;
export const Wrapper = styled.div`
  height: 80px;
  width: 709px;
  :hover {
    cursor: pointer;
    background: #c4c4c4;
    border-radius: 3%;
  }
`;
export const Top = styled.div`
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;
export const Bottom = styled.div`
  align-items: center;
  padding: 0px 30px;
  height: 26px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #686868;
`;
export const Line = styled.div`
  width: 644px;
  height: 0px;
  border: 1px solid #585858;
  transform: matrix(1, 0, 0, 1, 0, 0);
  margin: auto;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;
export const Input = styled.input`
  height: 46px;
  width: 644px;
  border-radius: 8px;
  font-size: 22px;
  :hover {
    background: rgba(100, 100, 100, 0.08);
  }
`;
export const Button = styled.button`
  height: 46px;
  width: 138px;
  border-radius: 8px;
  background: #204080;
  color: white;
  margin-left: 10px;
  font-size: 18px;
  :hover {
    background: #4f75c2;
  }
`;

export const NumberResult = styled.div`
  margin: "5px 0 10px 40px";
  padding-left: 20px;
  

`;

export const ShowMore = styled.div`
  position: absolute;
  width: 79px;
  height: 17px;
  left: 526px;
  top: 662px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
`;
