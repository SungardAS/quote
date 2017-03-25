import React from "react";
import { render } from "react-dom";
import Form from "react-semantic-form";

// Define your form attributes
const attributes = [
  {
    type: "Text",
    name: "authorFirstName",
    required: true,
    label: "Author First Name"
  },
  {
    type: "Text",
    name: "authorLastName",
    required: true,
    label: "Author Last Name:"
  },
  { type: "TextArea", name: "quote", label: "Quote" }
];

// Render the form
class QuoteForm extends React.Component {
  render() {
    return (
      <Form action="/" method="GET" className="form" attributes={attributes} />
    );
  }
}

export default QuoteForm;
