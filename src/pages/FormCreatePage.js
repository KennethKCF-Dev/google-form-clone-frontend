import React, { useEffect, useRef } from 'react';
import { Container, FloatingMenu } from '../components/common/CommonStyledComponent';
import FormHeadingCard from '../components/formHeadingCard/FormHeadingCard';
import FormQuestionCard from '../components/formQuestionCard/FormQuestionCard';
import { MenuButton, BreakLine } from '../components/common/CommonStyledComponent';
import { useNavigate } from 'react-router-dom';
import { 
  createForm, 
  addNewForm,
  updateFormField, 
  addQuestion, 
  updateQuestion, 
  removeQuestion,
  addOption,
  updateOption,
  removeOption,
  selectCurrentForm,
  copyQuestion
} from '../redux/slice/formsSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const FormCreatePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentForm = useSelector(selectCurrentForm);
  
    useEffect(() => {
      dispatch(addNewForm());
    }, [dispatch]);
  
    const onCreateForm = (e) => {
      e.preventDefault();
      dispatch(createForm(currentForm))
        .unwrap()
        .then(() => navigate('/'))
        .catch((error) => console.error('Failed to create the form: ', error));
    };
  
    const onChangeFormField = (field) => (e) => {
      dispatch(updateFormField({ field, value: e.target.value }));
    };
  
    const onAddQuestion = () => {
      dispatch(addQuestion());
    };

    const onUpdateQuestion = (index, field) => (e) => {
      dispatch(updateQuestion({ index, field, value: e.target.value }));
    };
  
    const onRemoveQuestion = (index) => () => {
      dispatch(removeQuestion(index));
    };
  
    const onAddOption = (questionIndex) => () => {
      dispatch(addOption({ questionIndex, option: '' }));
    };
  
    const onUpdateOption = (questionIndex, optionIndex) => (e) => {
      dispatch(updateOption({ questionIndex, optionIndex, value: e.target.value }));
    };
  
    const onRemoveOption = (questionIndex, optionIndex) => () => {
      dispatch(removeOption({ questionIndex, optionIndex }));
    };

    const onCopyQuestion = (questionIndex) => () => {
      dispatch(copyQuestion(questionIndex));
    };

    return (
      <>
        <Container>
          <FloatingMenu>
            <MenuButton title="Add New Question" onClick={onAddQuestion}><AddCircleOutlineIcon/></MenuButton>
            <BreakLine/>
            <MenuButton title="Save Form" onClick={onCreateForm}><SaveOutlinedIcon/></MenuButton>
          </FloatingMenu>
          <FormHeadingCard
            formTitle={currentForm.title}
            setFormTitle={onChangeFormField('title')}
            description={currentForm.description}
            setDescription={onChangeFormField('description')}
          />
          {currentForm.questions.map((question, index) => (
            <FormQuestionCard
              key={index}
              question={question}
              index={index}
              updateQuestion={onUpdateQuestion}
              deleteQuestion={onRemoveQuestion}
              addOption={onAddOption}
              deleteOption={onRemoveOption}
              updateOption={onUpdateOption}
              copyQuestion={onCopyQuestion}
            />
          ))}
        </Container>
      </>
    );
  };
  
  export default FormCreatePage;