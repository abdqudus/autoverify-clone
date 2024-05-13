
const Checkbox = ({ id, text, divStyle = "" }) => {
  return (
    <div
      className={`relative ${divStyle} text-[#333333] font-open-sans text-[.75rem] leading-[22.4px] flex gap-2 items-center`}
    >
      <input type="checkbox" name="" id={id} />
      <label htmlFor={id} className="flex items-center gap-3">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
