
const CodebaseWrapper = ({ children }) => {
  return (
    <div className={`md:grid md:grid-cols-[1fr_250px] gap-6 overflow-hidden`}>
      {children}
    </div>
  );
};

export default CodebaseWrapper;
