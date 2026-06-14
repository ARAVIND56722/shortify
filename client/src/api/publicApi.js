import api from "./axios";

export const getPublicStats =
  async (shortCode) => {
    const response =
      await api.get(
        `/public/stats/${shortCode}`
      );

    return response.data;
  };