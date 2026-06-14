import api from "./axios";

export const createUrl = async (data) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/urls",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getUserUrls = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get(
    "/urls",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateUrl = async (
  id,
  data
) => {
  const token =
    localStorage.getItem("token");

  const response =
    await api.put(
      `/urls/${id}`,
      data,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

export const deleteUrl = async (id) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(
    `/urls/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};