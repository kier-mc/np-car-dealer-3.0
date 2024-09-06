import type { Vehicle } from "~~/types/api";

type ValidFilter = "price_lowest" | "price_highest";

interface VehicleFilters {
  filters: {
    [key in ValidFilter]: (a: Vehicle, b: Vehicle) => number;
  };
};

export default function () {
  const uiData = [
    {
      label: "Lowest price",
      value: "price_lowest",
    },
    {
      label: "Highest price",
      value: "price_highest",
    },
  ] as const;

  const activeFilter = useState<ValidFilter>("feed-active-filter", () => uiData[0].value);
  const data = useState<Vehicle[]>("api-data");

  const filters: VehicleFilters["filters"] = {
    price_lowest: (a, b) => Number.parseInt(a.price) > Number.parseInt(b.price) ? 1 : -1,
    price_highest: (a, b) => Number.parseInt(a.price) < Number.parseInt(b.price) ? 1 : -1,
  } as const;

  const results = computed(() => {
    return data.value.toSorted(filters[activeFilter.value]);
  });

  return { activeFilter, filters, results, uiData };
};
