import type { Metadata, QueryParams, Vehicle } from "~~/types/api";

export default async function () {
  const query = useState<QueryParams>("query-params");
  const data = useState<Vehicle[]>("api-data", () => []);
  const meta = useState<Metadata | null>("api-meta", () => null);

  const { data: response, status } = await useLazyFetch("/api/vehicles", { query });

  watch(response, (response) => {
    if (response) {
      data.value = response.data;
      meta.value = response.meta;
    }
  }, { immediate: true });

  return { data, meta, status };
};
