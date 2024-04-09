type IAuthResquest = {
  username: string;
  password: string;
};

type IAuthResponse = {
  refresh: string;
  access: string;
};

export type { IAuthResquest, IAuthResponse };
