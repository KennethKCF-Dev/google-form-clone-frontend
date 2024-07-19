import React from "react";
import { HeadingCard, FormTitle, FormDescription } from "./StyledComponent";

const HeadingDisplayCard = ({ title, description }) => {
  return (
    <HeadingCard>
      <FormTitle>{title}</FormTitle>
      <FormDescription>{description}</FormDescription>
    </HeadingCard>
  );
};

export default HeadingDisplayCard;
