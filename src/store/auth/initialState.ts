import { IAuthProps } from "./interfaces";

export const authInitialState: IAuthProps = {
  username: "",
  fullName: "",
  userLife: 0,
  user: {
    refresh: "",
    access: "",
  },
};
