

export type QueryState<T> = {
  loading: boolean;
  error: Error | null;
  data: T;
};