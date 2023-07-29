import useSWR from "swr";

export function SwrPage() {
  const { data = "", mutate } = useSWR("SwrPage");

  return {
    swrPageValue: data,
    setSwrPageValue: mutate,
  };
}
