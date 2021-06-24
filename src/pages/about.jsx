import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const AboutPage = () => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 320: 2, 768: 3, 1024: 5, 1440: 7 }}
    >
      <Masonry g>
        {Array.from({ length: 20 }).map((_, i) => (<img ky={i} className="p-1 rounded-2xl" src={`https://source.unsplash.com/random/${i}`} style={{ width: "100%", display: "block" }} />))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default AboutPage;
