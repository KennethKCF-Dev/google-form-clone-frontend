import styled from 'styled-components';
import { Card } from '../common/CommonStyledComponent';

export const HeadingCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 25px;
  width: 100%;
  max-width: 640px;;

  &:after {
    content: '';
    position: absolute;
    border-top: 10px solid var(--primary);
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const FormTitle = styled.span`
    font-size: 24pt;
    letter-spacing: 0;
    color: rgb(32, 33, 36);
    line-height: 135%;
    max-width: 100%;
    min-width: 0;
    font-weight: 400;
    white-space: pre-wrap;
`

export const FormDescription = styled.span`
    font-size: 11pt;
    line-height: 15pt;
    font-weight: 400;
    letter-spacing: 0;
    color: rgb(32, 33, 36);
    margin-top: 12px;
    white-space: pre-wrap;
`