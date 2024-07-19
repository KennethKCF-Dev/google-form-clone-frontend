// FormFiller.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchFormByID,
  submitFormResponse,
  selectCurrentForm,
} from "../redux/slice/formsSlice";
import HeadingDisplayCard from "../components/headingDisplayCard/HeadingDisplayCard";
import {
  Container,
  RecButton,
} from "../components/common/CommonStyledComponent";
import QuestionDisplayCard from "../components/questionDisplayCard/QuestionDisplayCard";
import styled from "styled-components";
import { toast } from "react-toastify";

const Footer = styled.div`
  width: 100%;
  max-width: 640px;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ResetButton = styled(RecButton)`
  background-color: transparent;
  padding: 0 12px;
  color: rgb(103, 58, 183);

  &:hover {
    background-color: #4285f410;
  }
`;

const FormFiller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formId } = useParams();
  const currentForm = useSelector(selectCurrentForm);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    dispatch(fetchFormByID(formId));
  }, [dispatch, formId]);

  useEffect(() => {
    // Reset answers when a new form is loaded
    setAnswers({});
  }, [currentForm]);

  const handleInputChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const onResetForm = () => {
    setAnswers({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormResponse({ formId: formId, responseData: { answers } }))
      .then(() => {
        navigate(`/submitted/${formId}`);
      })
      .catch((error) => {
        toast.error("Failed to submit the form.");
        console.error("Failed to submit the form: ", error);
      });
  };

  return (
    <Container>
      <HeadingDisplayCard
        title={currentForm.title}
        description={currentForm.description}
      />
      {currentForm.questions.map((question, index) => (
        <QuestionDisplayCard
          key={index}
          question={question}
          answers={answers[question._id]}
          onChange={(e) => handleInputChange(question._id, e.target.value)}
        />
      ))}
      <Footer>
        <RecButton onClick={handleSubmit}>Submit</RecButton>
        <ResetButton onClick={onResetForm}>Clear Form</ResetButton>
      </Footer>
    </Container>
  );
};

export default FormFiller;
