const API_URL = "https://eu-west-2.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-zbmnuij/auth/providers/local-userpass/login";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed, please check your credentials.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
