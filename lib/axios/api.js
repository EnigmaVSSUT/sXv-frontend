import axios from "axios";

const API = axios.create({
  baseURL: "https://sxv-backend.onrender.com/",
  headers: {
    "ngrok-skip-browser-warning": "any",
  },
});

API.interceptors.request.use((config) => {
  config.headers["Authorisation"] = localStorage.getItem("token");

  return config;
});

const api = {
  events: {
    getAll: () => API.get("api/events/getEvents"),
    getById: (id) => API.get(`api/events/getEventById/${id}`),
    getAllParticipation: () =>
      API.get("api/events/getParticipations", {
        headers: {
          Authorisation: localStorage.getItem("token"),
        },
      }),
    participate: (data) => API.put("api/events/participate", data),
  },
  users: {
    getUser: () => API.get("api/users/getUser"),
  },
};

export default api;
