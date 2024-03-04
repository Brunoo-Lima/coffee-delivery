import { ElementType, InputHTMLAttributes, forwardRef } from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ElementType;
  text: string;
  isSelected: boolean;
};

//todo: Modificar componente

const Radio = ({ icon: Icon, text, isSelected }: RadioProps) => {
  return (
    <li className="bg-base_button w-44 h-[51px] rounded-md group flex items-center justify-center gap-2">
      <input
        type="radio"
        checked={isSelected}
        className="hidden peer"
        required
      />

      <Icon size={16} />
      <p className="font-roboto text-xs font-normal uppercase text-base_text group-hover:text-base_subtitle">
        {text}
      </p>
    </li>
  );
};

export default Radio;
