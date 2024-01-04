import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      email: "",
      country: "",
      number: "",
    }
  );

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.email && formState.country && formState.number) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  console.log(formState.country);

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} value={formState.email} placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select name="country" onChange={handleChange} value={formState.country}>
              <option>--select--</option>
              <option value="india">INDIA</option>
              <option value="canada">CANADA</option>
              <option value="germany">GERMANY</option>
              <option value="germany">USA</option>
            </select>
          </div>
          
      
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input name="number" onChange={handleChange} value={formState.number} placeholder="Enter your number"/>
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}

          <button  type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

