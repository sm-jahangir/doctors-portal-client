import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="text-center py-10"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <h3 className="text-primary">Contact Us</h3>
      <h1 className="text-2xl text-white">Stay connected with us</h1>
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <input type="text" placeholder="Email Address" className="w-96 input" />
        <input type="text" placeholder="Subject Here" className="w-96 input" />
        <textarea
          className="w-96 textarea textarea-bordered"
          placeholder="Bio"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
