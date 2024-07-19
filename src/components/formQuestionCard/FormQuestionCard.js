import React from 'react';
import { FormQuesInput, QuestionAddOption, QuestionAnswerContainer, QuestionCard, QuestionCardFooter, QuestionOption, QuestionOptionDelButton, QuestionOptionInput, QuestionOptionLabel, QuestionRemoveButton, QuestionTextAnswer } from './StyledComponent';
import { MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Dropdown } from '../common/CommonStyledComponent';

const FormQuestionCard = ({ question, index, updateQuestion, deleteQuestion, addOption, deleteOption, updateOption}) => {
  return (
    <QuestionCard>
      <FormQuesInput
        placeholder="Question"
        value={question.label}
        setValue={updateQuestion(index, 'label')}
      />
      <Dropdown
        fullWidth
        value={question.type}
        onChange={updateQuestion(index, 'type')}
      >
        <MenuItem value='text'>text</MenuItem>
        <MenuItem value='dropdown'>drop</MenuItem>
      </Dropdown>
      <QuestionAnswerContainer>
        {question.type === 'text'?  (
          <QuestionTextAnswer>
            Text Answer
          </QuestionTextAnswer>
        ): (
          <>
            {question.options.map((option, optionIndex) => (
              <QuestionOption key={optionIndex}>
                <QuestionOptionLabel>{optionIndex + 1}.</QuestionOptionLabel>
                <QuestionOptionInput type='text' placeholder={`Option ${optionIndex + 1}`} value={option} onChange={updateOption(index, optionIndex)} />
                <QuestionOptionDelButton onClick={deleteOption(index, optionIndex)}>
                  <CloseIcon />
                </QuestionOptionDelButton>
              </QuestionOption>
            ))}
            <QuestionOption key={'add'} onClick={addOption(index)}>
              <QuestionOptionLabel>{question?.options.length + 1}.</QuestionOptionLabel>
              <QuestionAddOption>
                Add New Option
              </QuestionAddOption>
            </QuestionOption>
          </>
        )}
      </QuestionAnswerContainer>
      <QuestionCardFooter>
        <QuestionRemoveButton>
          <DeleteForeverOutlinedIcon onClick={deleteQuestion(index)} />
        </QuestionRemoveButton>
      </QuestionCardFooter>
    </QuestionCard>
  );
};

export default FormQuestionCard;