import React from "react";
import Icons from "../Icons/Icons";

function Radio({ value, label, onChange, name, checked }) {
  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <Icons
        name={checked ? "radio-chosen" : "radio-not-chosen"}
      />
      <input
        style={{ display: "none" }}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span style={{display:'inline-block', marginLeft:'13px', fontSize:'24px'}}>{label}</span>
    </label>
  );
}

export default Radio;
