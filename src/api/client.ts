import axios from "axios";
import { clientStorage } from "constant/clientStorage";

/**
 * Sử dụng setoken nếu cần thiết
 * @param token
 */
export const setToken = async (token = "") => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = async () => {
  axios.defaults.headers.common["Authorization"] = "";
};

const requestAbordCode = "ECONNABORTED";

axios.defaults.baseURL = process.env.REACT_APP_API_GATEWAY;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 360000;

const RequestClient = class {
  constructor() {
    let accees_token = clientStorage.get("sp");
    if (accees_token) {
      this.init(accees_token);
    } else {
      this.init("");
    }
  }

  async init(access_token: string) {
    axios.defaults.headers.common["Authorization"] = access_token;
  }
  async headers(params: any) {
    let keys = Object.keys(params);

    keys.forEach((key) => {
      axios.defaults.headers.common[key] = params[key];
    });
  }
  async get(endpoint: string, params = {}) {
    try {
      const response = await axios.get(endpoint, params);

      return response;
    } catch (error) {
      console.log(error)
      this.handleError(error);
    }
  }

  async post(endpoint: string, body: {}, params = {}) {
    try {
      const response = await axios.post(endpoint, body, params);

      return response;
    } catch (error) {
      console.log(error)
      this.handleError(error);
    }
  }

  async put(endpoint: string, body: {}, params = {}) {
    try {
      const response = await axios.put(endpoint, body, params);
      return response;
    } catch (error) {
      console.log(error)
      this.handleError(error);
    }
  }

  async delete(endpoint: string) {
    try {
      const response = await axios.delete(endpoint);
      return response;
    } catch (error) {
      console.log(error)
      this.handleError(error);
    }
  }
  async upload(endpoint: string, file: any) {
    try {
      var formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }
  handleError(error: any) {
    if (error.response && error.response.status === 401) {
      // xử lý logout đoạn này
    }
    if (
      error.code === requestAbordCode ||
      ("response" in error && error.response === undefined)
    ) {
      // delay(1000);
      error.recall = true;
    }
    throw error;
  }
};

const client = new RequestClient();

export { client };

