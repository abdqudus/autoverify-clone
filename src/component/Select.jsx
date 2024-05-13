const Select = ({
  text,
  options,
  style,
}) => {
  return (
    <div className="my-4">
      <p className="mt-2">{text}</p>
      <select
        className={`border ${style} h-[34px] border-[#CCCCCC] mt-2  w-full`}
      >
        {options.map((option) => (
          <option key={option} className="" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
