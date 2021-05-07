import axios from "axios";
import { REQUEST_TIME_OUT, BASE_URL } from "../utils/constants";

const router = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIME_OUT,
});

export default router;
