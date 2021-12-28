import React from 'react'
import { SecProgramFieldBox } from "..";


const SecProgramLogoField = ({ k, v, variant }) => (
  <SecProgramFieldBox name={k} variant={variant}>
    <span>
      <img src={v} width="60px" height="60px" alt="" />
    </span>
  </SecProgramFieldBox>
);

export default SecProgramLogoField;
