const Input = ({ id }: { id: string }) => {
  return (
    <input
      type="text"
      id={id}
      className="h-[34px] w-full  rounded-[4px] border border-[#CCCCCC] px-4"
    />
  );
};

export default Input;
