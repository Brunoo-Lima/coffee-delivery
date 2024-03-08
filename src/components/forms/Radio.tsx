import { ElementType, InputHTMLAttributes, forwardRef } from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ElementType;
  text: string;
  id: string;
  value: string;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ icon: Icon, text, id, value, ...rest }, ref) => {
    return (
      <li className="bg-base_button w-44 h-[51px] rounded-md group flex items-center justify-center gap-2 group hover:bg-base_hover">
        <input
          type="radio"
          className="hidden peer"
          value={value}
          id={id}
          {...rest}
          ref={ref}
          required
        />
        <label
          htmlFor={id}
          className="flex items-center justify-center gap-2 w-44 h-[51px] text-base_text border border-base_button rounded-md cursor-pointer peer-checked:border-purple group-hover:bg-base_hover transition duration-300"
        >
          <Icon size={16} />
          <p className="font-roboto text-xs font-normal uppercase text-base_text group-hover:text-base_subtitle">
            {text}
          </p>
        </label>
      </li>
    );
  }
);

export default Radio;
