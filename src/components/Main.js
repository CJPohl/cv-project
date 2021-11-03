import React, { useState } from "react";

import Form from "./Form";
import Print from "./Print";

const Main = () => {
  const [form, updateForm] = useState({
    general: {
      fnValue: "",
      lnValue: "",
      eValue: "",
      mValue: "",
    },
    practical: {
      cValue: "",
      ptValue: "",
      mtValue: "",
      ttValue: "",
    },
    education: {
      nValue: "",
      sValue: "",
      dsValue: "",
      deValue: "",
      gValue: "",
    },
  });

  const { general, practical, education } = form;

  const handleInputChange = (e) => {
    const inputType = e.target.id;
    const { value } = e.target;
    const inputName = e.target.name;
    updateForm({
      ...form,
      [inputType]: {
        ...form[inputType],
        [inputName]: value,
      },
    });
  };

  return (
    <div className="main">
      <Form
        general={general}
        practical={practical}
        education={education}
        onInputChange={handleInputChange}
      />
      <Print general={general} practical={practical} education={education} />
    </div>
  );
};

export default Main;
