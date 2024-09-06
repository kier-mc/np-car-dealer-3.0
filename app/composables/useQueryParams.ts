import type { AdvertClassification } from "~~/types/api";
import { QUERY_PARAMS } from "~~/utils/api";

export default function () {
  const query = useState("query-params", () => QUERY_PARAMS);

  function getAdvertClassification() {
    return query.value.advert_classification;
  }

  function setAdvertClassification(value: AdvertClassification) {
    query.value.advert_classification = value;
    query.value.page = 1;
  };

  function getPage() {
    return query.value.page;
  }

  function setPage(value: number) {
    query.value.page = value;
  };

  function getResultsPerPage() {
    return query.value.page;
  }

  function setResultsPerPage(value: number) {
    query.value.results_per_page = value;
  };

  return {
    getAdvertClassification,
    setAdvertClassification,
    getPage,
    setPage,
    getResultsPerPage,
    setResultsPerPage,
  };
};
