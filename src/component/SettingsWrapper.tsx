import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  style?: string;
};
const SettingsWrapper = ({ children }: Props) => {
  return (
    <div className={`md:grid md:grid-cols-[250px_1fr] gap-6 overflow-hidden`}>
      {children}
    </div>
  );
};

export default SettingsWrapper;
