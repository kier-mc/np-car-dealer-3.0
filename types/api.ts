/**
 * The complete dataset returned from calling the Nexus Point API endpoint.
 */
export interface ApiResponse {
  /**
   * An array containing individual vehicle data.
   * See {@link Vehicle}.
   */
  data: Vehicle[];
  /**
   * An object containing response metadata.
   * See {@link Metadata}.
   */
  meta: Metadata;
};

/**
 * Media URL data, contained within the {@link Vehicle} data.
 * Truncated to contain only values that are required for the technical challenge.
 */
export interface MediaUrlData {
  /**
   * A thumbnail image (generally 320x213px) of the vehicle.
   */
  thumb: string;
};

/**
 * Metadata associated with the API response.
 */
export interface Metadata {
  /**
   * The total number of individual vehicles (new, used and on offer).
   */
  all_total: number;
  /**
   * The current page of results being returned.
   * @default 1
   */
  current_page: number;
  /**
   * The calculated last page of results returned from the API.
   * Derived from the ceiling value of the total vehicle count divided by the per_page value.
   */
  last_page: number;
  /**
   * The number of results that are currently marked as being on offer.
   * N.B. this is currently hard-coded in the API response to return 0.
   */
  offer_vehicles: number;
  /**
   * The total number of results to display per page.
   * @default 11
   */
  per_page: number;
  /**
   * The total number of results, after any query param filters have been applied.
   */
  total: number;
  /**
   * The total number of results with an advert_classification of "New".
   */
  total_new_vehicles: number;
  /**
   * The total number of results with an advert_classification of "Used".
   */
  total_used_vehicles: number;
};

export type AdvertClassification = "All" | "New" | "Used";

/**
 * Valid query parameters currently supported by the API endpoint.
 * Outlined in the technical challenge readme.
 */
export interface QueryParams {
  /**
   * The category of advert classification to return.
   * @default "All"
   */
  advert_classification: AdvertClassification;
  /**
   * The page of results to return.
   * @default 1
   */
  page: number;
  /**
   * The results per page to return.
   * @default 11
   */
  results_per_page: number;
};

/**
 * Individual vehicle data returned from the API endpoint.
 * Truncated to contain only values that are required for the technical challenge.
 */
export interface Vehicle {
  /**
   * The vehicle's representative condition i.e. used/new.
   */
  advert_classification: string;
  /**
   * The vehicle's body configuration e.g. hatchback, coupe, saloon etc.
   */
  body_type: string;
  /**
   * The vehicle's trim/line/specification.
   */
  derivative: string;
  /**
   * The vehicle's fuel type i.e. petrol/diesel.
   */
  fuel_type: string;
  /**
   * The vehicle's full title.
   */
  name: string;
  /**
   * The vehicle's manufacturer.
   */
  make: string;
  /**
   * An array of media URLs associated with the vehicle.
   */
  media_urls: MediaUrlData[];
  /**
   * The vehicle's model designation.
   */
  model: string;
  /**
   * The type of finance offered for the vehicle.
   * Associated with the monthly_payment field.
   */
  monthly_finance_type: string;
  /**
   * The vehicle's monthly payment price, if financed.
   * Associated with the monthly_finance_type field.
   */
  monthly_payment: string;
  /**
   * The vehicle's odometer reading.
   */
  odometer_value: number;
  /**
   * The vehicle's combined year of manufacture and registration age identifier code.
   */
  plate: string;
  /**
   * The vehicle's total price.
   */
  price: string;
  /**
   * The vehicle's transmission type i.e. manual/auto.
   */
  transmission: string;
  /**
   * The vehicle's unique ID within the API response.
   */
  vehicle_id: number;
  /**
   * The year the vehicle was manufactured.
   */
  year: string;
};
