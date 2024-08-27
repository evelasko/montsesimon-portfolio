import PORTADA_QUERY from "./queries/portada";
import SOCIAL_QUERY from "./queries/social";

async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getPortadaData() {
  const response = await fetchGraphQL(PORTADA_QUERY);
  return response.data;
}

export async function getSocialData() {
  const response = await fetchGraphQL(SOCIAL_QUERY);
  return response.data?.portada;
}