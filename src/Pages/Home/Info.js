import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/marker.svg";

function Info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        img={phone}
      />
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={location}
      />
    </div>
  );
}

export default Info;
