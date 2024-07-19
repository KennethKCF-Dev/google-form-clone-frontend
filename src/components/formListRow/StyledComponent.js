import styled from "styled-components";
import { Link } from "react-router-dom";

export const SurveyButton = styled(Link)`
  width: min-content;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: black;
  padding: 12px 16px;
  border-radius: 50px;
  background-color: #f3e8fd;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 50px;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  margin: 10px 0;

  &:hover {
    background-color: #f3e8fd;
  }

  &:hover ${SurveyButton} {
    color: black;
    background-color: white;
  }

  &:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid gray;
    width: 100%;
    bottom: -6px;
  }

  &:last-child::after {
    border-bottom: none;
  }
`;

export const FormLogo = styled.div`
  width: 40px;
  height: 30px;
  background-color: #9740e5;
  border-radius: 5px;
  margin: 5px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0px 20px;
`;
