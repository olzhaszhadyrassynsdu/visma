import { useId, forwardRef } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { title: string };

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ title, ...props }, ref) => {
    const id = useId();
    return (
      <div className="ml-8 my-4">
        <label htmlFor={id} className="block mb-4 font-bold">
          {title}
        </label>
        <input
          id={id}
          {...props}
          ref={ref}
          className="w-[400px] h-9 p-2 border-2 border-[#eaeaea]"
        />
      </div>
    );
  }
);
