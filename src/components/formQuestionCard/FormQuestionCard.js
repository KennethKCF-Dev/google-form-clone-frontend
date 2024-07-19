import React from 'react';
import { FormQuesInput, QuestionAddOption, QuestionAnswerContainer, QuestionCard, QuestionCardFooter, QuestionCopyButton, QuestionOption, QuestionOptionDelButton, QuestionOptionInput, QuestionOptionLabel, QuestionRemoveButton, QuestionTextAnswer } from './StyledComponent';
import { Box, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Dropdown } from '../common/CommonStyledComponent';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const FormQuestionCard = ({ question, index, updateQuestion, deleteQuestion, copyQuestion, addOption, deleteOption, updateOption }) => {
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
        renderValue={(value) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              {value === 'text' ? <NotesOutlinedIcon /> : <ArrowDropDownCircleOutlinedIcon />}
            </ListItemIcon>
            <ListItemText>
              {value === 'text' ? "Text" : "Dropdown"}
            </ListItemText>
          </Box>
        )}
      >
        <MenuItem value='text'>
          <ListItemIcon>
            <NotesOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Text
          </ListItemText>
        </MenuItem>
        <MenuItem value='dropdown'>
          <ListItemIcon>
            <ArrowDropDownCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Dropdown
          </ListItemText>
        </MenuItem>
      </Dropdown>
      <QuestionAnswerContainer>
        {question.type === 'text' ? (
          <QuestionTextAnswer>
            Text Answer
          </QuestionTextAnswer>
        ) : (
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
        <QuestionCopyButton title='Copy Question' onClick={copyQuestion(index)}>
          <ContentCopyIcon />
        </QuestionCopyButton>
        <QuestionRemoveButton title='Delete Question' onClick={deleteQuestion(index)}>
          <DeleteForeverOutlinedIcon  />
        </QuestionRemoveButton>
      </QuestionCardFooter>
    </QuestionCard>
  );
};

export default FormQuestionCard;