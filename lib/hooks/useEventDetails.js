import { useEffect, useState } from "react";
import api from "../axios/api";

const useEventDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    api.events
      .getById(id)
      .then((res) => res.data)
      .then((event) => {
        console.log(event);
      })
      .catch((err) => {
        setError((v) => err);
      })
      .finally(() => {
        setLoading((v) => false);
      });
  }, []);

  return {
    loading,
    event,
    error,
  };
};

export default useEventDetails;
