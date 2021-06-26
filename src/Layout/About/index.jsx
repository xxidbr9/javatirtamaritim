import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ImageBanner from "../../assets/images/international_trade.jpg";


// const AccentSmall = (props) => {
//   return (
//     <span {...props} className="text-red-500 font-medium">
//       {props.children}
//     </span>
//   );
// };

const Title = (props) => {
  return (
    <h4 {...props} className="mt-1 text-3xl font-semibold">
      {props.children}
    </h4>
  );
};

const Paragraph = (props) => {
  return (
    <p {...props} className="text-gray-500 mt-12">
      {props.children}
    </p>
  );
};

const AboutLayout = () => {
  return (
    <React.Fragment>
      <Navbar active="/about" />
      <Hero title={"About Us"} ImageBanner={ImageBanner} />
      <section className="tablet:px-8 mobile:px-4 desktop:px-0">

        <div className="tablet:container mx-auto bg-white relative my-20 grid mobile:grid-cols-1 laptop:grid-cols-2 gap-12">
          <div class="py-16 laptop:pl-6 tablet:col-span-2 tablet:text-center">
            <Title>
              Motto
            </Title>
            <div>
              <Paragraph>
                The purpose of the historical establishment of the company/organization is aimed at the needs of marine transportation modes in Indonesia which are increasingly popular with the increasing need for services in the industrial or mining sector in Indonesia..
              </Paragraph>
            </div>
          </div>
          <div class="py-16">
            <Title>
              Vision
            </Title>
            <div>
              <Paragraph>
                The purpose of the historical establishment of the company/organization is aimed at the needs of marine transportation modes in Indonesia which are increasingly popular with the increasing need for services in the industrial or mining sector in Indonesia..
              </Paragraph>
            </div>
          </div>
          <div class="py-16 laptop:pl-6">
            <Title>
              Motto
            </Title>
            <div>
              <Paragraph>
                The purpose of the historical establishment of the company/organization is aimed at the needs of marine transportation modes in Indonesia which are increasingly popular with the increasing need for services in the industrial or mining sector in Indonesia..
              </Paragraph>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </React.Fragment>
  )
}

export default AboutLayout
