/* eslint-disable @typescript-eslint/no-explicit-any */

function extractData(fetchResponse: any): any {
  return fetchResponse?.data;
}
export async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    "https://cdn.builder.io/api/v1/graphql/247e5c3fd4554936b8485af476a4515a",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
}
export async function fetchPageData_GQ() {
  const content = await fetchGraphQL(
    `query {
        page(target: { urlPath: "/" }) {
        name
        }
    }`
  );

  return extractData(content);
}
