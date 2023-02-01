import { ENVIORNMENT } from "../enums/enums";

const env = {
  SERVER_API: "https://api.github.com/",

  SERVER_API_VERSION: "",
};

if (process.env.NODE_ENV === ENVIORNMENT.DEVELOPMENT) {
  env.SERVER_API_HOST = "http://localhost:8080/api/";
  env.SERVER_API_VERSION = "v1";
}

export default env;
