import type { H3Event } from "h3";
import type { ApiResponse } from "~~/types/api";

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event);

  const data = await $fetch<ApiResponse>("https://m6zhmj6dggvrmepfanilteq4q40rlalu.lambda-url.eu-west-1.on.aws/vehicles", { query });

  if (data) {
    return data;
  };

  throw createError({
    statusCode: 500,
    statusMessage: "An error occurred whilst retreiving vehicle data from the remote server.",
  });
});
