import React from 'react'
import {
  SecProgramBooleanField,
  SecProgramLogoField,
  SecProgramApiField,
} from "../../customer";

const SecuirtyProgramView = ({ name, type, fields }) => {
  const displayFlexDirection = type !== "LOGO" ? "p-flex-column" : "p-flex-row";
  return (
    <div
      style={{ backgroundColor: "white" }}
      className={`p-p-3 p-m-2 p-shadow-1 p-d-flex p-flex-column`}
    >
      <div className="p-pb-2 p-text-bold">
        <span>{name}</span>
      </div>
      <div className={`p-d-flex ${displayFlexDirection}`}>
        {type === "BOOLEAN" &&
          fields.map((field) => (
            <SecProgramBooleanField key={field.k} {...field} />
          ))}
        {type === "API" &&
          fields.map((field) => (
            <SecProgramApiField key={field.k} {...field} />
          ))}
        {type === "LOGO" &&
          fields.map((field, index) => (
            <SecProgramLogoField
              key={`certlogoview-${index}`}
              variant={"slim"}
              {...field}
            />
          ))}
      </div>
    </div>
  );
};

export default SecuirtyProgramView;
