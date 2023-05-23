import React from "react";
import { ServiceIcon } from "../components/ServiceIcon";
import {
  IServicesContents,
  psikoThrepahyDescription,
  servicesContents,
} from "../contents/ServicesContents";
import { ServiceCard } from "../components/ServiceCard";
import { useRouter } from "next/navigation";

interface IServicesProps {}

const Services: React.FC<IServicesProps> = () => {
  const navigate = useRouter();

  return (
    <div className="services-container">
      <br></br>
      <div className="psikoterapi-container">
        <h1 className="psikoterapi-title">Psikoterapi Nedir ?</h1>
        <p className="psikoterapi-description">{psikoThrepahyDescription}</p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h1 className="psikoterapi-title">Hizmetlerimiz</h1>
      </div>
      <div className="service-cards">
        {servicesContents.map((content: IServicesContents) => {
          return (
            <ServiceCard
              key={content.id}
              title={content.title}
              imgUrl={content.imgUrl}
              description={content.description}
              onClick={() => {
                navigate.push(content.imgUrl);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
