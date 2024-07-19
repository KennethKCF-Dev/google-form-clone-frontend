import React from "react";
import { QuestionCard, QuestionInput, QuestionLabel } from "./StyledComponent";
import { Dropdown } from "../common/CommonStyledComponent";
import { MenuItem } from "@mui/material";

const QuestionDisplayCard = ({ question, answers, onChange }) => {
  return (
    <QuestionCard>
      <QuestionLabel>{question.label}</QuestionLabel>
      {question.type === "text" ? (
        <QuestionInput
          value={answers || ""}
          placeholder={"Your Answer"}
          setValue={onChange}
        />
      ) : (
        <Dropdown
          sx={{
            minWidth: "176px",
          }}
          value={answers || ""}
          onChange={onChange}
          placeholder="Choose"
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          {question.options.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Dropdown>
      )}
    </QuestionCard>
  );
};

export default QuestionDisplayCard;
