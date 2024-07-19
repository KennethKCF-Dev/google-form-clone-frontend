import styled from "styled-components";
import { EditCard } from "../common/CommonStyledComponent";
import { BaseInput } from "../common/CommonStyledComponent";

export const HeadingCard = styled(EditCard)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 25px;

  &:after {
    content: "";
    position: absolute;
    border-top: 10px solid var(--primary);
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const FormTitleInput = styled(BaseInput)`
  font-weight: 400;
  font-size: 24pt;
  line-height: 1.25;
  letter-spacing: 0;
  padding-bottom: 8px;
  min-height: 56px;
`;

export const FormDesInput = styled(BaseInput)`
  margin-top: 10px;
  font-size: 16px;
`;
