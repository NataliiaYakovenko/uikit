import React from "react";
import Icons from "../Icons/Icons";

function Checkbox({ value, label, name, checked, onChange }) {
  return (
    <label style={{ display: "flex", alignItems: "center" }}>
      <Icons name={checked ? "checkbox-chosen" : "checkbox-not-chosen"} />
      <input
        style={{ display: "none" }}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
       <span style={{display:'inline-block', marginLeft:'13px', fontSize:'24px'}}>{label}</span>
    </label>
  );
}

export default Checkbox;
