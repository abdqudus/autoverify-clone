import { useTranslation } from "react-i18next";

const Table = ({
  header,
  body,
  headerStyle = "bg-black text-white h-[50px]",
  parentStyle = "bg-[#F4F4F480] border border-[#DDDDDD]",
}) => {
  const { t } = useTranslation()
  return (
    <div
      className={`max-w-full  ${parentStyle}   overflow-x-scroll md:overflow-hidden mt-3`}
    >
      <table className="min-w-[550px] w-full">
        <thead
          className={`  ${headerStyle} font-open-sans px-2 font-semibold text-[.75rem] `}
        >
          <tr className="">
            {header.map((h) => (
              <th
                key={h.text}
                className={`border-r text-left px-2 md:border-r-0  border-white ${h.size}`}
              >
                {t(h.text)}
              </th>
            ))}
          </tr>
        </thead>
        {body}
      </table>
    </div>
  );
};

export default Table;
