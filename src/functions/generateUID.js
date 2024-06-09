import { uid } from "uid/single";

export const generateUID = () => {
  const id = uid(7);
  return id;
};
