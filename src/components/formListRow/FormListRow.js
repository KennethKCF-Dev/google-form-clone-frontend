import React from "react";
import ListIcon from "@mui/icons-material/List";
import { Row, SurveyButton, FormLogo, FormTitle } from "./StyledComponent";

const FormListRow = ({ form }) => {
  return (
    <Row>
      <FormLogo>
        <ListIcon sx={{ color: "white" }} />
      </FormLogo>
      <FormTitle>{form.title}</FormTitle>
      <SurveyButton to={`/form/${form._id}`}>Survey</SurveyButton>
    </Row>
  );
};

export default FormListRow;
