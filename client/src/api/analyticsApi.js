import api from "./axios";

export const getAnalytics = async (
  id
) => {
  const token =
    localStorage.getItem("token");

  const response =
    await api.get(
      `/analytics/${id}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

export const getTrends =
  async (id) => {
    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        `/analytics/trends/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };