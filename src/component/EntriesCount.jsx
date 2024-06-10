import React, { useEffect, useState } from 'react';
import { getLimit, setLimit } from '../utils/pagination';
import { useQuery } from '@tanstack/react-query';

const EntriesCount = () => {
    const [count, setCount] = useState(5);

    const prefillCount = () => {
        return getLimit(5);
    };

    const { data } = useQuery({
        queryKey: ["entries-count"],
        queryFn: () => prefillCount(),
    });

    useEffect(() => {
        if (data) {
            setCount(data);
        }
    }, [data]);

    const handleCount = (event) => {
        const selectedCount = Number(event.target.value);
        setCount(selectedCount);
        setLimit(selectedCount);
        location.reload();
    };

    return (
        <div className="flex items-center gap-2 flex-wrap mt-4">
            <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
                show
            </p>
            <select value={count} onChange={handleCount} className="bg-white border text-[#444444] w-[100px] border-[#333333] h-[34px] rounded-[4px]">
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={100}>100</option>
            </select>
            <p className="font-poppins font-semibold text-[.875rem] leading-[22.4px] text-[#333333]">
                entries
            </p>
        </div>
    );
};

export default EntriesCount;
