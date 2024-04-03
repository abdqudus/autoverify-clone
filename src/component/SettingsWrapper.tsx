import { ReactNode } from "react";

const SettingsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4 md:grid md:grid-cols-[250px_1fr] gap-6">
      {children}
    </div>
  );
};

export default SettingsWrapper;
