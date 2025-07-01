import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("manjabgz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container">
      <div
        className="card my-5 mx-auto shadow-sm p-4"
        style={{ maxWidth: "500px" }}
      >
        <h6 className="text-center magic-line">
          <i>Let's make magic together</i>
        </h6>
        <small className="text-center mb-3 font-size-sm">
          What should we work on?
        </small>
        <div className="p-2 mx-5">
          <form
            action="https://formspree.io/f/manjabgz"
            className="fs-form"
            target="_top"
            method="POST"
          >
            <div className="fs-field">
              <label className="fs-label" for="name">
                Name
              </label>
              <input className="fs-input" id="name" name="name" />
            </div>
            <div className="fs-field">
              <label className="fs-label" for="email">
                Email
              </label>
              <input className="fs-input" id="email" name="email" required />
            </div>
            <div className="fs-field">
              <label className="fs-label" for="message">
                Message
              </label>
              <textarea
                className="fs-textarea"
                id="message"
                name="message"
                rows={6}
              ></textarea>
            </div>
            <div className="fs-button-group">
              <button className="fs-button mb-2" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
