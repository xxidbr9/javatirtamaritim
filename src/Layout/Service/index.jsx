import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ImageBanner from "../../assets/images/international_trade.jpg";

const Hero = () => (
  <section className="mobile:h-80">
    <div className="pt-24 bg-black opacity-60 mobile:h-80 w-full absolute z-20"></div>
    <div
      className="pt-24 bg-no-repeat bg-cover h-80 absolute w-full z-10"
      style={{ backgroundImage: `url('${ImageBanner}')` }}
    ></div>
    <div className="mobile:pt-12 tablet:pt-24 w-full absolute z-30">
      <div className="tablet:container tablet:px-8 mobile:px-4 desktop:px-0 m-auto z-50">
        <div className="w-full mt-20">
          <h1 className="mobile:text-4xl tablet:text-6xl text-white font-bold">
            Our Services
          </h1>
        </div>
      </div>
    </div>
  </section>
);


const ItemService = ({
  children,
  Component,
  header,
}) => {
  return (
    <div
      className={`py-8 tablet:px-8 rounded-lg tablet:shadow-lg`}
    >
      {!!header && (
        <div className="tablet:h-20">
          <h1 className="text-lg mt-4 font-medium text-gray-800">{header}</h1>
        </div>
      )}
      <p className="text-sm mt-2 text-gray-500">{children}</p>
    </div>
  );
};

const dataService = [
  {
    header: "FREIGHT FORWARDING",
    text: "Logistics delivery services for exort and import businesses from one destination to another throught sea transportation modes"
  },

  {
    header: "SHIP / EQUIPMET CHARTERING",
    text: "Rental service for modes of sea transportation and heavy equipment needs, such as ships and heavy equipment"
  },

  {
    header: "BUNKERING SERVICES",
    text: "Services for providing fuel oil sucs as MGO MFO and MDo, libricants and fresh water"
  },

  {
    header: "MACHINERIES AND ELECTRICAL SERVICES",
    text: "Maintenace, repair and replacement services for equipment on ships"
  },

  {
    header: "SHIP REPAIRS and MANAGEMENT",
    text: "Repair services to ship structures and carry out managerial improvements"
  },

  {
    header: "DOCKING MANAGEMENT",
    text: "Management services before to after ship repair carried out at shipyard"
  },

  {
    header: "SHIP MAINTENANCE",
    text: "Maintenance and repair services for structural and port supporting equipment"
  },

  {
    header: "NON DESTRUCTIVE TESTING (NDT) SERVICE",
    text: "Testting services or inspection of critical areas sucs as welding and base metal to detect crack or deflacts in the objects being tested without demaging the objects"
  },

  {
    header: "MARINE, PATROLEUM AND CARGO SERVEYOR, CONSULTANT",
    text: "Service for survey and inspection activities for shipping and cargo safety along with consulting services in the maritime sector"
  },

  {
    header: "UNDERWATER INSPECTION IN LIEU OF DRY DOCKING (UWILD) SURVEY",
    text: "Services for inspecting activities of the outside of the ship below the waterline carried out when the ship remains above sea level with certain technological methods"
  },

  {
    header: "UNDERWATER SURVEY AND HULL CLEANSING",
    text: "Hull inspection and cleaning services such as sticking coral without going through the dry dock process"
  },

  {
    header: "TANK CLEANING",
    text: "Services for cleaning activities for the remnants of cargo or dirt attached to the ship's tank becouse unclear water tanks act as breading ground for bacteria and making your water tank's environment susceptible to being contaminated"
  }
];

const HomeService = () => {

  return (
    <section className="tablet:px-8 mobile:px-4 desktop:px-0 py-8">
      <div className="tablet:grid-rows-3 tablet:gap-8 tablet:container bottom-0 mx-auto relative bg-white z-40 h-auto grid mobile:grid-cols-1 laptop:grid-cols-4  laptop:grid-flow-col w-full">
        {dataService.map((item, index) => (
          <ItemService
            header={item.header}
            key={index}
          >
            {item.text}
          </ItemService>
        ))}
      </div>
    </section>
  );
};

const ServiceLayout = () => {
  return (
    <>
      <Navbar active="/service" />
      <Hero />
      <HomeService />
      {/* <div>ok</div> */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  )
}

export default ServiceLayout
