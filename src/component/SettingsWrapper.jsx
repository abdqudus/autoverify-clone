
const SettingsWrapper = ({ children }) => {
  return (
    <div className={`md:grid md:grid-cols-[250px_1fr] gap-6 overflow-hidden`}>
      {children}
    </div>
  );
};

export default SettingsWrapper;
