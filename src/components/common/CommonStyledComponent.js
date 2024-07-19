import styled from "styled-components";
import AutosizeTextarea from './AutosizeTextarea';
import { styled as muiStyled } from '@mui/material/styles';
import { Select } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 0px 5%;
  }
`;

export const Card = styled.div`
  position: relative;
  height: min-content;
  border-radius: 10px;
  border: 1px solid lightgray;
  width: 100%;
  max-width: 770px;
  margin: 6px 0;
  overflow: hidden;
  background-color: white;
`;

export const EditCard = styled(Card)`
  &:hover,
  &:focus-within {
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.3);
  }

  &:hover::before,
  &:focus-within::before {
    content: '';
    position: absolute;
    border-left: 6px solid var(--focus);
    height: 100%;
    top: 0;
    left: 0;
  }
`

export const BaseInput = styled(AutosizeTextarea)`
  overflow: hidden;
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  color: black;
  transition: border-color 0.5s ease;
  resize: none;
  white-space: pre-wrap;

  &:focus {
    border: none;
    border-bottom: 2px solid var(--primary);
    outline: none;
  }
`;

export const RoundButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloatingButton = styled(RoundButton)`
  position: fixed;
  z-index: 3;
  right: 70px;
  width: 50px;
  height: 50px;
  background-color: #f3e8fd;
  box-shadow: 0 5px 8px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ebe2f3;
  }
`;

export const Dropdown = muiStyled(Select)(({ theme }) => ({
  height: '49px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[400],
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[400],
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[400],
    borderWidth: 1,
  },
  minWidth: "200px"
}));

export const FloatingMenu = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 40%;
  right: 62px;
  width: 48px;
  height: min-content;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
  transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
  background-color: #fff;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) { 
    flex-direction: row;
        bottom: 20px;
        left: 38%;
        width: min-content;
        height: 48px;
    }
`

export const MenuButton = styled(RoundButton)`
    margin: 6px 2px;
    color: #5f6368;
    fill: #5f6368;
    transition: ease .3s;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 36px;
    outline: none;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 36px;

    &:hover {
      background-color: var(--button-gray);
    }

    @media screen and (max-width: 768px) { 
      margin: 2px 6px;
    }
`;

export const RecButton = styled.button`
    background-color: var(--primary);
    transition: ease .2s .1s;
    border: 0;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .25px;
    line-height: 36px;
    text-decoration: none;
    text-transform: none;
    min-width: auto;
    outline: none;
    overflow: hidden;
    text-align: center;
    padding: 0 24px;

    &:hover{
        background-color: #9740e590;
    }
`

export const BreakLine = styled.div`
  width: 60%;
  height: 0;
  border: 0.5px solid var(--button-gray);

  @media screen and (max-width: 768px) { 
    width: 0;
    height: 60%;
  }
`