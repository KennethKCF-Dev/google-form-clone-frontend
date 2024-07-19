import styled from "styled-components";
import { BaseInput, Card } from "../common/CommonStyledComponent";

export const QuestionCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 25px;
  width: 100%;
  max-width: 640px;
`;

export const QuestionLabel = styled.span`
  font-size: 12pt;
  letter-spacing: 0;
  line-height: 24px;
  color: rgb(32, 33, 36);
  font-weight: 400;
  word-break: break-word;
  margin-bottom: 22px;
`;

export const QuestionInput = styled(BaseInput)`
  min-height: 24px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  color: rgb(32, 33, 36);
`;
