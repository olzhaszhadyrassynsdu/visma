import { PropsValue, SingleValue } from "react-select";

export const isValueSingle = <Option>(
  option: PropsValue<Option>
): option is SingleValue<Option> => {
  if (Array.isArray(option)) throw Error("option must be SingleValue");
  return true;
};
