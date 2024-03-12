import api from "../axios/api";

const isParticipated = async (eventId) => {
  try {
    const allParticipationResponse = await api.events.getAllParticipation();
    const allParticipation = await allParticipationResponse.data.events.events;

    const isParticipated = allParticipation.some((p) => p._id === eventId);
    return isParticipated;
  } catch (err) {
    return false;
  }
};

export default isParticipated;
