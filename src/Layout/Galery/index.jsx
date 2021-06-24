import React, { useCallback, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
            Our Galery
          </h1>
        </div>
      </div>
    </div>
  </section>
);

const ZoomImage = ({ imgSrc, ...props }) => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} overlayBgColorEnd={"rgba(0,0,0,.7)"}>
      <img
        className={`p-1 ${isZoomed ? "" : "rounded-2xl"}`}
        src={imgSrc}
        alt="img galery"
        style={{ width: "100%", display: "block" }} />
    </ControlledZoom>
  )
}

const GaleryLayout = ({ imageData, ...props }) => {


  return (
    <React.Fragment>
      <Navbar active="/galery" />
      <Hero />
      <section className="tablet:px-8 mobile:px-4 desktop:px-0 py-8">
        <div className="tablet:container mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 320: 2, 768: 3, 1024: 5, 1440: 7 }}
          >
            <Masonry g>
              {imageData.map(({ node }, i) => (
                <ZoomImage
                  key={i}
                  imgSrc={require("../../assets/images/" + node.name + "." + node.extension).default}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default GaleryLayout
