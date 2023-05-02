import React from "react";

const ImageWrapper = (props) => {
  return (
    <>
      <div
        style={{
          padding: "5rem 0rem",
        }}
      >
        <img
          src={props.Image}
          alt="back"
          style={{
            width: "100%",
            maxWidth: "900px",

            objectFit: "contain",
          }}
        />
      </div>
    </>
  );
};

export default ImageWrapper;
