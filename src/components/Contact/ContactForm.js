import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  //return
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input
                {...register("name", {
                  required: true,
                  minLength: 3,
                  className: "is-invalid",
                })}
                type="text"
                name="name"
                id="contact-name"
                placeholder="Your name"
                className="form-control ph_color"
              />

              {/* name field validation */}
              {errors.name && errors.name.type === "required" && (
                <p
                  className="text-danger font-italic"
                  style={{
                    fontSize: "13px",
                    paddingTop: "5px",
                  }}
                >
                  Name is Required
                </p>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="md-form mb-0">
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{1,}$/,
                })}
                type="text"
                name="email"
                id="contact-email"
                placeholder="Your email"
                className="form-control ph_color"
              />

              {/* email field validation */}
              {errors.email && errors.email.type === "required" && (
                <p
                  className="text-danger font-italic"
                  style={{
                    fontSize: "13px",
                    paddingTop: "5px",
                  }}
                >
                  Email Required
                </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p
                  className="text-danger font-italic"
                  style={{
                    fontSize: "13px",
                    paddingTop: "5px",
                  }}
                >
                  Invalid Email Adress
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <input
                type="text"
                id="contact-Subject"
                className="form-control ph_color"
                placeholder="Subject"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="md-form">
              <textarea
                {...register("your_message", {
                  required: true,
                  minLength: 30,
                  maxLength: 100,
                  className: "is-invalid",
                })}
                name="your_message"
                id="contact-message"
                className="form-control md-textarea ph_color"
                rows="3"
                placeholder="Your message"
              />
              {errors.your_message &&
                errors.your_message.type === "required" && (
                  <p className="text-danger font-italic">Message is Required</p>
                )}
              {errors.your_message &&
                errors.your_message.type === "minLength" && (
                  <p className="text-danger font-italic">Atleast 30 words</p>
                )}
              {errors.your_message &&
                errors.your_message.type === "maxLength" && (
                  <p className="text-danger font-italic">
                    No more than 100 words
                  </p>
                )}
            </div>
          </div>
        </div>
        <div className="text-center text-md-left">
          <button
            type="submit"
            whileHover="hover"
            className="btn btn-primary btn-md btn-rounded"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
