import gql from "./blogg.gql.ts";
import { bytesToBase64 } from "../utils";

export const fetchCmsData = async () => {
  const response = await fetch(`${import.meta.env.CMS_BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Accept-Language": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`,
    },
    body: JSON.stringify({
      query: gql,
      variables: {},
      operationName: "SchoolLibrary",
    }),
  });

  return await response.json();
};

let cachedToken = { token: "", expiresInMs: 0 };

const getAccessToken = async () => {
  if (cachedToken.token && cachedToken.expiresInMs > Date.now()) {
    return cachedToken.token;
  }

  const tokenResponse = await fetch(
    `${import.meta.env.TOKEN_BASE_URL}/connect/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${bytesToBase64(
          new TextEncoder().encode(
            `${import.meta.env.TOKEN_CLIENT_ID}:${
              import.meta.env.TOKEN_CLIENT_SECRET
            }`,
          ),
        )}`,
      },
      body: `grant_type=client_credentials&scope=${
        import.meta.env.TOKEN_SCOPE_CMS
      }`,
    },
  );

  const payload = await tokenResponse.json();

  cachedToken = {
    token: payload.access_token,
    expiresInMs: Date.now() + payload.expires_in * 1000,
  };

  return payload.access_token;
};
