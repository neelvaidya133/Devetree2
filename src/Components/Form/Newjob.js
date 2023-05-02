import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { formState, userDetails } from "../../Recoil/store";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

import db from "../../Firebase/config";
const Newjob = () => {
  const [step, setStep] = useRecoilState(formState);
  const [userInfo, setUserInfo] = useRecoilState(userDetails);
  const [file, setFile] = React.useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const storage = getStorage();

  const resumes = ref(storage, `/files/${file.name}`);

  const onSubmit = (data) => {
    setStep(step + 1);
    console.log("datdsdsdsdsda", userInfo);
    const docRef = addDoc(collection(db, "jobApplicants"), {
      userInfo,
    });
    uploadBytesResumable(resumes, file).then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
    });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <select
            name="job"
            id="job"
            {...register("job", {
              required: true,
              onChange: handleChange,
            })}
          >
            <option value="">--Select Post -- </option>
            <option value="job1">Web developer</option>
            <option value="job2">App Developer</option>
            <option value="job3">Graphics Designer</option>
            <option value="job4">Digital Marketing</option>
          </select>
          {errors?.job?.type === "required" && <p>This field is required</p>}
          <input
            type="text"
            placeholder="Expected Salary"
            {...register("salary", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.salary?.type === "required" && <p>This field is required</p>}
          <input
            type="text"
            placeholder="Expected Joining Date"
            {...register("joiningDate", {
              required: true,
              onChange: handleChange,
            })}
          />
          {errors?.joiningDate?.type === "required" && (
            <p>This field is required</p>
          )}
          <label>Upload Resume</label>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </Wrapper>
        <Button>
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
          <button onClick={handleSubmit(onSubmit)}>Submit</button>
        </Button>
      </Container>
    </>
  );
};

export default Newjob;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  input,
  label {
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
  }
`;
