import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const perPage = 15;

export default async function getPictures(name, page) {
  axios.defaults.baseURL = "https://pixabay.com/api/";
  const KEY = "45109614-503c0802e6fcda244df0afcb5";

  try {
    if (name.includes(" ")) {
      name.replace(/\s+/g, "+");
    }
 
    const response = await axios.get("", {
      params: {
        key: KEY,
        q: name,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
      }
    });

    return response;
  } catch {
    iziToast.error({
      title: "Error",
      message: "Try again later!",
    });
  }
}
