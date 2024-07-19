import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/CommonStyledComponent'
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import FormListRow from '../components/formListRow/FormListRow';
import { fetchForms, selectAllForms } from '../redux/slice/formsSlice';
import { useDispatch, useSelector } from 'react-redux';

const CreateButton = styled(Link)`
    position: fixed;
    z-index: 3;
    bottom: 70px;
    right: 70px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #f3e8fd;
    box-shadow: 0 5px 8px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #ebe2f3;
    }

    @media screen and (max-width: 768px) { 
      bottom: 35px;
      right: 35px;
    }
`

const FormListContainer = styled.div`
  width: 100%;
  max-width: 770px;
  height: min-content;
  padding: 20px 0;
`

const FormListPage = () => {
  const dispatch = useDispatch();
  const forms = useSelector(selectAllForms);

  useEffect(() => {
    dispatch(fetchForms());
  }, [dispatch]);

  return (
    <Container>
      <FormListContainer>
        {forms.map((form) => (
          <FormListRow key={form._id} form={form} />
        ))}
      </FormListContainer>
      <CreateButton to={`/create`}>
        <AddIcon fontSize="large" sx={{ color: "#9740e5" }} />
      </CreateButton>
    </Container>
  );
};

export default FormListPage;