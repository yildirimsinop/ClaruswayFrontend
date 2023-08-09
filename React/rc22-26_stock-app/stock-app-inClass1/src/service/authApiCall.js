import axios from "axios";

export const login = async (userData) => {
  const BASE_URL = "https://14104.fullstack.clarusway.com/";

  try {
    const { data } = await axios.post(
      `${BASE_URL}/account/auth/login/`,
      userData
    );

    toastSuccessNotify("login islemi basarili");
  } catch (error) {
    console.log(error);
  }
};
