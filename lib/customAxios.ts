import axios from "axios";
import http from "http";
import https from "https";

const axiosInstance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

export default axiosInstance;