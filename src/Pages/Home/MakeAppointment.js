import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center lg:px-28 ml-10 p-10 lg:pb-0"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="Doctors" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an appointment Today</h2>
        <p className="text-white my-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>

        <PrimaryButton appointmentlink="https://www.figma.com/">
          Get Starts
        </PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
