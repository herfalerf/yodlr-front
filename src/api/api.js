import axios from "axios";

const BASE_URL = "http://localhost:3001";

class YodlrApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;

    try {
      return (await axios({ url, method, data })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async signup(data) {
    let res = await this.request(`users`, data, "post");
    return res;
  }

  static async getUsersList() {
    let res = await this.request(`users`);
    return res;
  }

  static async getUser(id) {
    let res = await this.request(`users/${id}`);
    return res;
  }

  static async editUser(id, data) {
    let res = await this.request(`users/${id}`, data, "put");
    return res;
  }

  static async deleteUser(id) {
    let res = await this.request(`users/${id}`, "delete");
    return res;
  }
}

export default YodlrApi;
