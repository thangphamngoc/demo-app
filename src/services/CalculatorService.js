import router from "./HttpService";
import {URL_CARD , URL_LOCATION, URL_PRODUCT } from "../utils/constants";

export function getDataProduct() {
  return router.get(URL_PRODUCT);
}
export function getLocation() {
  return router.get(URL_LOCATION);
}
export function addCard(request) {
  return router.post(URL_CARD, request);
}
