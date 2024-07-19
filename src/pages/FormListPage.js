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

const NoFormsNoticeContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
  height: 128px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const NoFormsNoticeTitle = styled.div`
  color: #222;
  font-size: 18px;
  margin-bottom: 10px;
  white-space: nowrap;
`

const NoFormsNoticeContent = styled.div`
  color: rgb(95, 99, 104);
  font-size: 16px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
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

        {forms.length === 0 && (
          <NoFormsNoticeContainer>
            <NoFormsNoticeTitle>
              No forms yet
            </NoFormsNoticeTitle>
            <NoFormsNoticeContent>
              Click "Add New Form" button to get started
            </NoFormsNoticeContent>
          </NoFormsNoticeContainer>
        )}
      </FormListContainer>
      <CreateButton title='Add New Form' to={`/create`}>
        <AddIcon fontSize="large" sx={{ color: "#9740e5" }} />
      </CreateButton>
    </Container>
  );
};

export default FormListPage;