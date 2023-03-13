import React from "react";
import ContactInfo from "../components/ContactInfo";
import Form from "../components/Form";
import Map from "../components/Map";

const Contact = () => {
  return (
    <>
      <div
        className="lg:flex flex-col lg:px-52 py-20 bg-gray-400 dark:bg-gray-500 overflow-x-hidden"
        id="Contact">
        <h1 className="text-center text-3xl font-bold text-primary mb-16 dark:text-info">
          Get In Touch With Us
        </h1>
        <div className="lg:flex flex-row justify-evenly">
          <ContactInfo />
          <Form />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
