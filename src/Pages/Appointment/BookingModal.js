import { format } from "date-fns";
import React, { useState } from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const fullname = event.target.fullName.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;

    console.log(name, slot, fullname, phone, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking htmlFor : {name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Date"
              className="input input-bordered w-full my-2"
              value={format(date, "PP")}
              readOnly
            />
            <select name="slot" className="select select-bordered w-full my-2">
              {slots?.map((slot, key) => (
                <option key={key} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="input input-bordered w-full my-2"
            />
            <input
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full my-2"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full my-2"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full my-2 btn btn-secondary text-uppercase text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
