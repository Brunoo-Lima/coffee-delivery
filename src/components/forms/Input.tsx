type InputProps = {
  placeholder: string;
  type: string;
};

const Input = ({ placeholder, type, ...rest }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...rest}
      className="text-base_text bg-base_input p-3 rounded-[4px] outline-yellow_dark m-2 text-sm font-normal font-second placeholder:text-base_label border-base_button w-full"
    />
  );
};

export default Input;
