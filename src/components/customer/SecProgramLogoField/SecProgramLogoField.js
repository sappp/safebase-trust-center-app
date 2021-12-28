import React from 'react'
import { SecProgramFieldBox } from "..";


const SecProgramLogoField = ({ k, v, showName, variant }) => (
  <SecProgramFieldBox name={k} showName={showName} variant={variant}>
    <span>
      <img src={v} width="60px" height="60px" alt="" />
    </span>
  </SecProgramFieldBox>
);

export default SecProgramLogoField;
