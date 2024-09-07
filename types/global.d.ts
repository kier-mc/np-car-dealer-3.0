/**
 * Represents a base type that ensures the presence of a key for Vue iterables.
 *
 * This type is designed to be extended with custom data types that are intended
 * to be iterated upon using Vue's v-for directive, so the node's unique identity
 * can be tracked.
 *
 * @example
 * // Defining a custom type that extends UseVueKey
 * type CustomDataType = UseVueKey & {
 *   label: string;
 * };
 *
 * @see {@link https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key}
 */
type UseVueKey = {
  _key: symbol;
};
