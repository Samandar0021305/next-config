import Axiox from "axios";
import { product } from "./baseUrl";
export const getProduct = async (params) => {
  try {
    const { data } = await Axiox({
      url: product,
      params: params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
