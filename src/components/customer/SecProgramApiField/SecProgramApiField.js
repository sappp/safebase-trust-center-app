import React from 'react'
import { useFetch } from "../../../hooks";
import { SecProgramFieldBox } from "..";


const SecProgramApiField = ({ k, v }) => {
  const { data, isLoading, error } = useFetch(v);

  //other options need to be handled here...
  const valueColor = {
    "A+": "green",
  };
  // getting the inner value from the res property,
  // with more options other than "rate" need to be handled
  // better
  const value = data && data[0] ? data[0]["rate"] : "N/A";
  return (
    <SecProgramFieldBox name={k}>
      {!isLoading && data && (
        <span
          style={valueColor[value] ? { color: valueColor[value] } : {}}
          className={`${valueColor[value]} p-text-bold`}
        >
          {value}
        </span>
      )}
      {!isLoading && error && <span className="p-text-bold">N/A</span>}
      {isLoading && <span>Loading...</span>}
    </SecProgramFieldBox>
  );
};

export default SecProgramApiField;
