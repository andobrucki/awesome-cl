import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.scss";

const VARIANTS = {
  CONTACT: "contact",
  APPOINTMENT: "appointment",
  FEEDBACK: "feedback",
  INQUIRY: "inquiry",
  NEWSLETTER: "newsletter",
};

// Options for multi-select fields
const INTEREST_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "DevOps",
  "UI/UX Design",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Cloud Computing",
];

// Input field component
const InputField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  customStyles = {},
}) => (
  <label className={styles.label} style={customStyles.label}>
    {label}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={styles.inputField}
      style={customStyles}
    />
  </label>
);

// Text area field component
const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  customStyles = {},
}) => (
  <label className={styles.label} style={customStyles.label}>
    {label}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={styles.inputField}
      style={customStyles.textArea || customStyles.inputField}
    ></textarea>
  </label>
);

// Multi-select dropdown field component
const MultipleSelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  customStyles = {},
}) => (
  <label className={styles.label} style={customStyles.label}>
    {label}
    <select
      name={name}
      multiple
      value={value}
      onChange={onChange}
      required={required}
      className={styles.multipleSelectField}
      style={customStyles.inputField}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

// Date picker field component
const DatePickerField = ({ label, selected, onChange, customStyles }) => (
  <div className={styles.datePickerContainer} style={customStyles}>
    <label className={styles.label}>{label}</label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className={styles.datePicker}
      style={customStyles}
    />
  </div>
);

// Main Form Component
const Form = ({
  variant = VARIANTS.CONTACT,
  onSubmit,
  customStyles = {},
  successMessage = "Thank you! Your form has been submitted.",
  additionalFields = [],
}) => {
  const [formData, setFormData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => {
    setSubmitted(false); // Reset the submitted state when opening the form
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setSubmitted(false);
  };

  const handleChange = (event) => {
    const { name, value, type, selectedOptions } = event.target;
    const updatedValue =
      type === "select-multiple" && selectedOptions
        ? Array.from(selectedOptions, (option) => option.value)
        : value;

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (onSubmit) onSubmit(formData); // Trigger the onSubmit callback with form data
    setFormData({});
  };

  const renderVariantFields = () => {
    const renderAdditionalFields = () => {
      return additionalFields?.map((field) => {
        if (field.type === "textarea") {
          return (
            <TextAreaField
              key={field.name}
              label={field.label}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={field.onChange || handleChange}
              placeholder={field.placeholder}
              required={field.required || false}
              customStyles={field.customStyles || customStyles.inputField}
            />
          );
        } else if (field.type === "select") {
          return (
            <MultipleSelectField
              key={field.name}
              label={field.label}
              name={field.name}
              value={formData[field.name] || []}
              onChange={field.onChange || handleChange}
              options={field.options || []}
              required={field.required || false}
              customStyles={field.customStyles || customStyles.inputField}
            />
          );
        } else if (field.type === "date") {
          return (
            <DatePickerField
              key={field.name}
              label={field.label}
              selected={formData[field.name]}
              onChange={(date) =>
                field.onChange
                  ? field.onChange(date)
                  : handleDateChange(field.name, date)
              }
              customStyles={field.customStyles || customStyles.datePicker}
            />
          );
        } else {
          return (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={field.onChange || handleChange}
              type={field.type || "text"}
              required={field.required || false}
              customStyles={field.customStyles || customStyles.inputField}
            />
          );
        }
      });
    };

    switch (variant) {
      case VARIANTS.CONTACT:
        return (
          <>
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              type="tel"
              required
              customStyles={customStyles.inputField}
            />
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject || ""}
              onChange={handleChange}
              required
              customStyles={customStyles.inputField}
            />
            <InputField
              label="Organization / Company"
              name="organization"
              value={formData.organization || ""}
              onChange={handleChange}
              customStyles={customStyles.inputField}
            />
            <TextAreaField
              label="Message"
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              placeholder="Enter your message here"
              required
              customStyles={customStyles.inputField}
            />
            {renderAdditionalFields()}
          </>
        );
      case VARIANTS.APPOINTMENT:
        return (
          <>
            <InputField
              label="Your Name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
              customStyles={customStyles.inputField}
            />
            <DatePickerField
              label="Appointment Date and Time"
              selected={formData.appointmentDate}
              onChange={(date) => handleDateChange("appointmentDate", date)}
              customStyles={customStyles.datePicker}
            />
            {renderAdditionalFields()}
          </>
        );
      case VARIANTS.FEEDBACK:
        return (
          <>
            <TextAreaField
              label="Your Feedback"
              name="feedback"
              value={formData.feedback || ""}
              onChange={handleChange}
              placeholder="Share your feedback"
              required
              customStyles={customStyles.textArea}
            />
            {renderAdditionalFields()}
          </>
        );
      case VARIANTS.INQUIRY:
        return (
          <>
            <TextAreaField
              label="Your Inquiry"
              name="inquiry"
              value={formData.inquiry || ""}
              onChange={handleChange}
              placeholder="What would you like to inquire about?"
              required
              customStyles={customStyles.textArea}
            />
            {renderAdditionalFields()}
          </>
        );
      case VARIANTS.NEWSLETTER:
        return (
          <>
            <p className={styles.helperText}>
              Select the topics you're interested in to customize your
              newsletter content.
            </p>
            <MultipleSelectField
              label="Topics of Interest"
              name="interests"
              value={formData.interests || []}
              onChange={handleChange}
              options={INTEREST_OPTIONS}
              required
              customStyles={customStyles.select}
            />
            {renderAdditionalFields()}
          </>
        );
      default:
        return renderAdditionalFields();
    }
  };

  return (
    <>
      <button
        className={styles.openButton}
        onClick={handleOpen}
        style={customStyles.openButton}
      >
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </button>
      {isVisible && (
        <div
          className={styles.formBackdrop}
          onClick={handleClose}
          style={customStyles.formBackdrop}
        >
          <div
            className={`${styles.formContainer} ${styles[`${variant}Form`]}`}
            onClick={(e) => e.stopPropagation()}
            style={{ ...customStyles.formContainer }}
          >
            <button
              className={styles.closeButton}
              onClick={handleClose}
              style={customStyles.closeButton}
            >
              &times;
            </button>
            <h1
              className={styles.submitHeader}
              style={customStyles.submitHeader}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Form
            </h1>
            {submitted ? (
              <p
                aria-live="polite"
                className={styles.successMessage}
                style={customStyles.successMessage}
              >
                {successMessage}
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                style={{ ...customStyles.form }}
              >
                <div className={styles.inputRow}>
                  <InputField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    required
                    customStyles={customStyles.inputField}
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    required
                    customStyles={customStyles.inputField}
                  />
                </div>
                <div className={styles.inputRow}>
                  <InputField
                    label="Email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    type="email"
                    required
                    customStyles={customStyles.inputField}
                  />
                </div>
                {renderVariantFields()}
                <button
                  type="submit"
                  className={styles.submitButton}
                  style={{ ...customStyles.submitButton }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
