export const findLabel = (
  selectedValue: string,
  list: { value: string; label: string }[]
) => {
  const findList = list.find(({ value }) => value === selectedValue);
  return findList?.label || "";
};

export const filterLabel = (
  selectedValue: string[],
  list: { value: string; label: string }[]
) => {
  const findList = list.filter(({ value }) => selectedValue.includes(value));
  return findList.map(({ label }) => label).join(", ");
};

export const filterOption = (
  selectedValue: string[],
  list: { value: string; label: string }[]
) => {
  return list.filter(({ value }) => selectedValue.includes(value));
};
