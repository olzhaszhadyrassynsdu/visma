import { useId, forwardRef } from "react";
import Select, {
  Props as SelectProps,
  GroupBase,
  SelectInstance,
  DropdownIndicatorProps,
  components,
} from "react-select";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCaretDown);

const DropDownIcon = () => {
  return <FontAwesomeIcon icon={faCaretDown} style={{ color: "#3D348B" }} />;
};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

type Option = {
  value: number | string;
  label: string;
};

type FormSelectProps = SelectProps<Option> & {
  title: string;
};

type SelectRef = SelectInstance<Option, boolean, GroupBase<Option>>;

export const FormSelect = forwardRef<SelectRef, FormSelectProps>(
  ({ title, ...select }, ref) => {
    const id = useId();

    return (
      <div className="ml-8 my-4 w-[400px]">
        <label htmlFor={id} className="font-bold">
          {title}
        </label>
        <Select
          id={id}
          ref={ref}
          {...select}
          className="mt-4"
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
          placeholder=""
        />
      </div>
    );
  }
);
