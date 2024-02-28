import { ElementType } from 'react';

type RadioProps = {
  icon: ElementType;
  text: string;
  methodsPayments: string;
};

const Radio = ({ icon: Icon, text, methodsPayments }: RadioProps) => {
  return (
    <li className="bg-base_button w-44 h-[51px] rounded-md group">
      <input
        type="radio"
        id={methodsPayments}
        name="hosting"
        value={methodsPayments}
        className="hidden peer"
        required
      />
      <label
        htmlFor={methodsPayments}
        className="flex items-center justify-center gap-2 w-44 h-[51px] text-base_text border border-base_button rounded-md cursor-pointer peer-checked:border-purple group-hover:bg-base_hover transition duration-300"
      >
        <Icon size={16} />
        <p className="font-roboto text-xs font-normal uppercase text-base_text group-hover:text-base_subtitle">
          {text}
        </p>
      </label>
    </li>
  );
};

export default Radio;
