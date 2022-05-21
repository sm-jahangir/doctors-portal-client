import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h4 className="text-primary text-xl font-bold uppercase">
          OUR SERVICES
        </h4>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-12 px-3">
        {services.map((service) => (
          <Service
            key={service._id}
            serviceTitle={service.name}
            servicebody={service.description}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
