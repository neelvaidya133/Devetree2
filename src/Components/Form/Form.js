import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { formState } from "../../Recoil/store";
import JobDetails from "./JobDetails";
import UserDetails from "./UserDetails";
import Newjob from "./Newjob";

const Form = () => {
  const [step, setStep] = useRecoilState(formState);
  // const [userDetails, setUserDetails] = useState({});
  // const [jobDetails, setJobDetails] = useState({});
  const FormDisplay = () => {
    switch (step) {
      case 1:
        return (
          <h3
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Start my application
          </h3>
        );
      case 2:
        return <UserDetails />;
      case 3:
        return <JobDetails />;
      case 4:
        return <Newjob />;
      case 5:
        return <h3>Thank you for applying</h3>;
      default:
    }
  };

  return (
    <>
      <Container>
        <FormDisplay />
      </Container>
    </>
  );
};

export default Form;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    background: #fff;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;

    :hover {
      text-decoration: underline;
    }
  }
`;
