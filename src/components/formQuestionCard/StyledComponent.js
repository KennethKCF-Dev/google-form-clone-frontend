import styled from 'styled-components';
import { EditCard } from '../common/CommonStyledComponent';

import { BaseInput } from '../common/CommonStyledComponent';
import { RoundButton } from '../common/CommonStyledComponent';

export const QuestionCard = styled(EditCard)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-template-areas:
    "input input typeSelector"
    "answer answer answer"
    "footer footer footer";
  padding: 25px;

  &:last-child {
    margin-bottom: 100px;
  }
`;

export const QuestionCardFooter = styled.div`
  grid-area: footer;
  width: 100%;
  border-top: 1px solid rgb(218, 220, 224);
  height: 64px;
  display: flex;
  flex: auto;
  justify-content: end;
  align-items: center;
`;

export const FormQuesInput = styled(BaseInput)`
  padding: 15px;
  font-size: 18px;
  grid-area: input;

  &:focus {
    background-color: #f3f3f3;
  }
`;

export const QuestionOptionInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 16px;
  color: black;
  transition: border-color 0.5s ease;

  &:focus {
    border: none;
    border-bottom: 2px solid var(--primary);
    outline: none;
  }
`;

export const QuestionTextAnswer = styled.div`
  width: max(30%, 150px);
  height: 30px;
  padding: 5px 0px;
  border: none;
  border-bottom: 1px dotted lightgray;
  font-size: 14px;
  color: gray;
`;

export const QuestionAnswerContainer = styled.div`
  width: 100%;
  grid-area: answer;
`;

export const QuestionOption = styled.div`
  height: 49px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
`;

export const QuestionOptionLabel = styled.div`
  margin-right: 10px;
  font-size: 16px;
  color: black;
`;

export const QuestionAddOption = styled.div`
  width: 200px;
  border: none;
  font-size: 16px;
  color: gray;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid lightgray;
  }
`;

export const QuestionOptionDelButton = styled(RoundButton)`
  margin-left: 20px;
  padding: 0;
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;

  &:hover {
    background-color: #ededed;
  }
`;

export const QuestionRemoveButton = styled(RoundButton)`
  color: gray;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #ededed;
  }
`;

export const QuestionCopyButton = styled(RoundButton)`
  color: gray;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #ededed;
  }
`;
