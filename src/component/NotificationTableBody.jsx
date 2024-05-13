const NotificationTableBody = ({
  body,
}) => {
  return (
    <tbody className="overflow-hidden">
      {body.map((b, i) => (
        <tr
          key={b.text}
          className={`h-[31.5px] text-[#333333] font-open-sans text-sm sm:text-[.75rem] lg:text-sm leading-5 border-t  border-[#DDDDDD] text-center `}
        >
          <td className="px-2  text-left ">{i + 1}</td>
          <td className="px-2  text-left  ">{b.text}</td>
          <td className="px-2  text-left ">
            <button
              className={`${b.isEmailEnabled
                  ? "w-[54.75px]  bg-[#5CB85C] "
                  : "bg-[#E74C3C] w-[56.7px]"
                } text-white rounded-[2.63px] h-[19.23px] font-open-sans font-bold text-[.65625rem]`}
            >
              {b.isEmailEnabled ? "enabled" : "disabled"}
            </button>
          </td>
          <td className="px-2 sm:px-0 text-left ">
            <button
              className={`${b.isSMSEnabled
                  ? "w-[54.75px]  bg-[#5CB85C] "
                  : "bg-[#E74C3C] w-[56.7px]"
                } text-white rounded-[2.63px] h-[19.23px] font-open-sans font-bold text-[.65625rem]`}
            >
              {b.isSMSEnabled ? "enabled" : "disabled"}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default NotificationTableBody;
