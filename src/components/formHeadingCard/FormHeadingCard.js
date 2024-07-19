import React from 'react';
import { FormDesInput, FormTitleInput, HeadingCard } from './StyledComponent';

const FormHeadingCard = ({ formTitle, setFormTitle, description, setDescription }) => {
    return (
      <HeadingCard>
        <FormTitleInput
          value={formTitle}
          setValue={setFormTitle}
          placeholder='Untitled Form' />
        <FormDesInput
          value={description}
          setValue={setDescription}
          placeholder='Form Description' />
      </HeadingCard>
    );
  };
  
  export default FormHeadingCard;