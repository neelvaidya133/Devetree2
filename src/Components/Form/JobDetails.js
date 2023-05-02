import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { formState, userDetails } from "../../Recoil/store";
import { useForm } from "react-hook-form";

const JobDetails = () => {
  const [step, setStep] = useRecoilState(formState);
  const [userInfo, setUserInfo] = useRecoilState(userDetails);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  };
  const onSubmit = (data) => {
    setStep(step + 1);
    console.log("data", userInfo);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <input
            type="text"
            placeholder="Work experince"
            {...register("workExperince", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.workExperince?.type === "required" && (
            <p>This field is required</p>
          )}
          <input
            type="text"
            placeholder="What technology and Languages known?"
            {...register("technology", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.technology?.type === "required" && (
            <p>This field is required</p>
          )}

          <input
            type="text"
            placeholder="Previous job location"
            {...register("previousJobLocation", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.previousJobLocation?.type === "required" && (
            <p>This field is required</p>
          )}
          <input
            type="text"
            placeholder="Previous job title"
            {...register("previousJobTitle", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.previousJobTitle?.type === "required" && (
            <p>This field is required</p>
          )}
          <input
            type="text"
            placeholder="Previous job description"
            {...register("previousJobDescription", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.previousJobDescription?.type === "required" && (
            <p>This field is required</p>
          )}
          <input
            type="text"
            placeholder="Previous job reason for leaving"
            {...register("previousJobReasonForLeaving", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.previousJobReasonForLeaving?.type === "required" && (
            <p>This field is required</p>
          )}
        </Wrapper>
        <Button>
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
          <button onClick={handleSubmit(onSubmit)}>Next</button>
        </Button>
      </Container>
    </>
  );
};

export default JobDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  input {
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }
  p {
    color: red;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    margin-top: 1rem;
  }
`;
