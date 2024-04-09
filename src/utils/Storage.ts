import { IAuthResponse } from "../interfaces";

class StorageUtils {
  static setDataJwtToken(data: IAuthResponse) {
    localStorage.setItem("jwt", JSON.stringify(data));
  }

  static getDataJwtToken() {
    const valueJwtToken = localStorage.getItem("jwt");
    return valueJwtToken ? JSON.parse(valueJwtToken) : false;
  }

  static deleteDataJwtToken() {
    localStorage.removeItem("jwt");
  }
}

export default StorageUtils;
