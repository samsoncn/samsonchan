import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  // background: #087cc4;
  // background: linear-gradient(
  //     108deg,
  //     rgba(1, 147,86, 1) 0%,
  //     rgba(10, 201, 122, 1) 100%
  // );
  // background: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  // background: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
  background: linear-gradient(128deg, #36669d 0%, #e2d9d0 74%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 90%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 26px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  // background: #021f31;
  background: #054d7a;
  max-width: 560px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    /* margin-top: 30px; */
    padding: 32px 32px;
    max-width: 360px;
    height: 640px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #fff;
`;

export const FormEmailInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormTextarea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 7px;
  border: none;
  border-radius: 4px;
`;

export const Message = styled.div`
  height: 25px;
  font-size: 14px;
  color: #fff;
`;

export const FormButton = styled.button`
  background: #032e49;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #076cab;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
