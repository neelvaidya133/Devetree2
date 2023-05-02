import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { formState, userDetails } from "../../Recoil/store";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const [step, setStep] = useRecoilState(formState);
  const [userInfo, setUserInfo] = useRecoilState(userDetails);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setStep(step + 1);
    console.log(data);
  };
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <input
            type="text"
            placeholder="Enter your firstname"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
              onChange: handleChange,
              value: userInfo.firstName,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p>This field is required</p>
          )}
          <input
            type="text"
            placeholder="Enter your lastname"
            {...register("lastName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
              onChange: handleChange,
            })}
          />
          {errors?.lastName?.type === "required" && (
            <p>This field is required</p>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              onChange: handleChange,
            })}
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
          {errors?.email?.type === "pattern" && <p>Enter a valid email</p>}

          <input
            maxLength={10}
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNumber", {
              required: true,
              maxLength: 10,
              pattern: /^[0-9]+$/i,
              onChange: handleChange,
            })}
          />
          {errors?.phoneNumber?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.phoneNumber?.type === "pattern" && (
            <p>Enter a valid phone number</p>
          )}
          <select
            {...register("gender", { required: true, onChange: handleChange })}
          >
            <option disabled selected value="">
              -- select gender --
            </option>
            <option value="male"> Male</option>
            <option value="female"> Female</option>
          </select>
          {errors?.gender?.type === "required" && <p>This field is required</p>}
        </Wrapper>
        <Button>
          <button
            disabled={step === 2}
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

export default UserDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  select {
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }
  option {
    background: #050216;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
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
    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
