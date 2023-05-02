import React from "react";
import { Contain, Journey, Line } from "./HomeStyle";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Contain>
        <h1>DEVETREE</h1>

        <p>The team of creative and passionate designers and developers</p>
        <Journey>
          <h3>Let's start the journey</h3>
        </Journey>

        {/* <div>
          <Line></Line>
        </div> */}
      </Contain>
      <div
        style={{
          padding: "0 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Line
            style={{
              height: "200px",
              width: "5px",
              background: "linear-gradient(180deg, #2E2AA5 0%, #2400FF 100%)",
            }}
          ></Line>
        </div>
      </div>
    </>
  );
};

export default Home;
