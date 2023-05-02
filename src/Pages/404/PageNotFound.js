import React from "react";

const PageNotFound = () => {
  const urls = [
    "https://media.tenor.com/jiXga9K9xbMAAAAC/nikal-laude-nikal-lavde.gif",
    "https://media.tenor.com/sWEY8anP4dwAAAAC/chala-ja-chala-ja-b-sd-k.gif",
    "https://media.tenor.com/WqfUsqUQWRsAAAAC/chala-ja.gif",
  ];
  return (
    <>
      <div
        style={{
          background: "#050216",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",

          width: "100%",
        }}
      >
        <img
          src={urls[Math.floor(Math.random() * urls.length)]}
          alt="404"
          style={{
            objectFit: "contain",
            height: "70%",
            width: "50%",
          }}
        />
        <div
          style={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            Oops <br />
            Page Not Found <br /> 404
          </h1>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
