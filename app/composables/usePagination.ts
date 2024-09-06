import type { Metadata, QueryParams } from "~~/types/api";

export default function () {
  const meta = useState<Metadata>("api-meta");
  const query = useState<QueryParams>("query-params");

  const currentPage = computed(() => {
    return meta.value.current_page;
  });

  const lastPage = computed(() => {
    return meta.value.last_page;
  });

  const nextPage = computed(() => {
    return currentPage.value + 1 <= lastPage.value
      ? currentPage.value + 1
      : null;
  });

  const previousPage = computed(() => {
    return currentPage.value - 1 >= 1
      ? currentPage.value - 1
      : null;
  });

  const subsequentPage = computed(() => {
    return currentPage.value + 2 <= lastPage.value
      ? currentPage.value + 2
      : null;
  });

  function setPage(page: number | null) {
    if (page === null) return;
    query.value.page = page;
  };

  return {
    currentPage,
    lastPage,
    nextPage,
    previousPage,
    subsequentPage,
    setPage,
  };
}
