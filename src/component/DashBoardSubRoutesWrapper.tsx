import { DashBoardWrapperProps } from "../types/type";

const DashBoardSubRoutesWrapper = ({
  header,
  subheader,
  children,
  font,
  additionalHeader,
  pFont,
}: DashBoardWrapperProps) => {
  const headerFont = font ? font : "font-inter";
  const parFont = pFont ? pFont : "";
  return (
    <div className="rounded-[6px]  px-4 py-3">
      <header className={`${headerFont} break-words`}>
        <h3 className="font-semibold text-[#343C6A] vsm:text-[1rem] text-[1.375rem] leading-[33px]">
          {header}
        </h3>
        <p
          className={`${parFont} font-normal text-[1.25rem] leading-[30.8px] text-[#2980B9]`}
        >
          {subheader}
        </p>
        {additionalHeader ? additionalHeader : null}
      </header>
      {children}
    </div>
  );
};

export default DashBoardSubRoutesWrapper;
