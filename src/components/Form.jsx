import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_43ystp8",
        "template_omaix24",
        form.current,
        "DFZDebc2sDCi_yZM8"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="font-mono m-2">
      {isSubmitted ? (
        <p className="text-green-500">
          Thank you for your submission! Your message was successfully sent.
        </p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-3 m-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
                for="grid-password">
                Your Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="user_name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
                for="grid-password">
                E-mail
              </label>
              <input
                required
                placeholder="eg: example@gmail.com"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
                for="grid-password">
                Message
              </label>
              <textarea
                required
                name="message"
                placeholder="Your Message"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3 py-3 text-right md:text-left">
              <input
                value="Send"
                type="submit"
                className="shadow bg-primary dark:btn-info focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 dark:hover:bg-opacity-90"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
