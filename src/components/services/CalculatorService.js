import client from "./HttpService";
import { BASE_URL_API } from "../utils/constants";

const APP_PRODUCT = "/products";
const APP_LOCATION = "/locations";
const APP_CARD = "/cart";

export function getProduct() {
  return client.get(BASE_URL_API + APP_PRODUCT);
}

export function getLocation() {
  return client.get(BASE_URL_API + APP_LOCATION);
}

export function addToCard(request) {
  return client.post(BASE_URL_API + APP_CARD, request);
}
