import React from 'react'
import { SecProgramFieldBox } from "../../customer";

const SecProgramBooleanField = ({ k, v }) => (
  <SecProgramFieldBox name={k}>
    <span>
      {v ? (
        <i
          className="pi pi-check-circle p-text-bold"
          style={{ color: "green" }}
        ></i>
      ) : (
        <i className="pi pi-circle p-text-bold" style={{ color: "red" }}></i>
      )}
    </span>
  </SecProgramFieldBox>
);

export default SecProgramBooleanField;
