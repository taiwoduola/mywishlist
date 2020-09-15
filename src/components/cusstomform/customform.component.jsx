import React from "react";

import "./customform.styles.scss";

const CustomForm = ({ handleChange, label, signInInput, ...otherProps }) => (
  <div className="custom-form">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} ${
          signInInput ? "signin-input" : ""
        }form-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default CustomForm;
