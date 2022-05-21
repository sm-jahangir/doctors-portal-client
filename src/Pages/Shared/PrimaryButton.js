import React from "react";

const PrimaryButton = ({ children, appointmentlink }) => {
  return (
    <a
      href={appointmentlink}
      className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
