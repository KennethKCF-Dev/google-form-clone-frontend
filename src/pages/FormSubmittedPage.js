import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
    fetchFormByID,
    selectCurrentForm,
} from '../redux/slice/formsSlice';
import { HeadingCard, FormTitle, FormDescription } from '../components/headingDisplayCard/StyledComponent'
import { Container } from '../components/common/CommonStyledComponent';
import styled from 'styled-components';

const OtherResponseButton = styled(Link)`
    margin-top: 25px;
    font: 400 14px / 20px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    background-color: #fff;
`

const FormSubmittedPage = () => {
    const dispatch = useDispatch();
    const { formId } = useParams();
    const currentForm = useSelector(selectCurrentForm);

    useEffect(() => {
        dispatch(fetchFormByID(formId));
    }, [dispatch, formId]);

    return (
        <Container>
            <HeadingCard>
                <FormTitle>{currentForm.title}</FormTitle>
                <FormDescription>We have received your form reply.</FormDescription>
                <OtherResponseButton to={`/form/${formId}`}>Submit another response</OtherResponseButton>
            </HeadingCard>
        </Container>
    )
}

export default FormSubmittedPage