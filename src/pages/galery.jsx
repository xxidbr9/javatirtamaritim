import React from "react";
import GaleryLayout from "../Layout/Galery";
import { useStaticQuery, graphql } from 'gatsby'



const GaleryPage = () => {
  const { allFile: { edges } } = useStaticQuery(graphql`
  query allImage{
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          extension
        }
      }
    }
  }`)


  return (
    <GaleryLayout imageData={edges} />
  );
};

export default GaleryPage;
