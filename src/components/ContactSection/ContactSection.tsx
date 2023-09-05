import React, { useState } from "react";
import { useDarkMode } from "../../DarkModeContext";
import axios from "axios";

const ContactSection = () => {
  const { darkMode } = useDarkMode();

  const [fields, setFields] = useState({
    phone: "",
    name: "",
    message: "",
  });

  const [focusedFields, setFocusedFields] = useState({
    phone: false,
    name: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocusedFields((prevFocusedFields) => ({
      ...prevFocusedFields,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setFocusedFields((prevFocusedFields) => ({
      ...prevFocusedFields,
      [field]: false,
    }));
  };

  const handleInputChange = (field, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const { phone, message } = fields;

    const formattedPhone = phone.replace(/\D/g, "");

    const whatsappURL = `https://wa.me/6282125446595?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const labelStyle = (field) => ({
    backgroundColor:
      focusedFields[field] || fields[field]
        ? darkMode
          ? "rgb(31, 41, 55)"
          : "#fff"
        : "transparent",
    color: darkMode ? "rgb(234, 179, 8)" : "rgb(31, 41, 55)",
  });

  const inputStyle = {
    caretColor: "rgb(234, 179, 8)",
    color: darkMode ? "#fff" : "rgb(31, 41, 55)",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        id="Contact"
        className={`${
          darkMode ? "bg-gray-800 " : "bg-white  "
        } overflow-auto md:overflow-x-hidden`}
      >
        <div className="h-screen flex items-center  justify-center flex-col gap-8">
          <div className="border md:px-8 flex flex-col gap-8 px-4 py-8 rounded-lg">
            {["phone", "name", "message"].map((field) => (
              <div
                key={field}
                className={`form-group  ${
                  focusedFields[field] || fields[field]
                    ? "label-transformed"
                    : ""
                }`}
              >
                <label style={labelStyle(field)}>
                  {field === "phone"
                    ? "Phone"
                    : field === "name"
                    ? "Name"
                    : "Message"}
                </label>
                {field === "message" ? (
                  <textarea
                    className="form-control-textarea  hover:ring-yellow-50 hover:ring-4 hover:ring-opacity-20 focus:ring-yellow-500 focus:ring-4 focus:ring-opacity-20"
                    value={fields[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    required
                    style={inputStyle}
                    onFocus={() => handleFocus(field)}
                    onBlur={() => handleBlur(field)}
                  />
                ) : (
                  <input
                    type={field === "phone" ? "tel" : "text"}
                    className="form-control hover:ring-yellow-50 hover:ring-4 hover:ring-opacity-20 focus:ring-yellow-500 focus:ring-4 focus:ring-opacity-20"
                    value={fields[field]}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      handleInputChange(field, value);
                    }}
                    required
                    style={inputStyle}
                    onFocus={() => handleFocus(field)}
                    onBlur={() => handleBlur(field)}
                    pattern={field === "phone" ? "[0-9]*" : undefined}
                  />
                )}
              </div>
            ))}
            <div className="flex items-center justify-center">
              <div className={darkMode? 'border rounded-lg px-4 py-2 shadow-md text-yellow-500 form-control' : 'border rounded-lg px-4 py-2 shadow-md text-black form-control hover:ring-yellow-50 hover:ring-4 hover:ring-opacity-20 focus:ring-yellow-500 focus:ring-4 focus:ring-opacity-20 ' }  onClick={handleSubmit}>
                Send WhatsApp Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactSection;
