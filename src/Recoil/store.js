import { atom } from "recoil";

export const navVisible = atom({
  key: "navVisible",
  default: true,
});

export const formState = atom({
  key: "formState",
  default: 1,
});

export const userDetails = atom({
  key: "userDetails",
  default: {},
});
