import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface Props {
    color?: string;
    Top_text: string;
    Bottom_text: string;
    Bottom_text2: string;
    applicants: number;
    Big_number: number;
    image: ReactElement;
}

const Assignment = (props:Props) => {
    return (
      <>
        <div className="flex-auto gap-4 rounded-lg outline">
            <div className="flex justify">
                    <span className={twMerge("flex items-center justify-between rounded-full bg-teal-300 p-3 m-2",props.color,)}>
                        {props.image}
                    </span>
                <div className="flex items-center justify-start pr-5">
                    <p className="font-semibold">{props.Top_text}</p>
                </div>
                    <span className="flex items-center">
                    <MoreHorizIcon/>
                    </span>
            </div>
            <div className="flex flex-col pl-3 pb-3 pr-3">
            <p className="text-2xl font-bold">{props.Big_number}</p>
            <p className="text-[10px]">{props.Bottom_text} <span className="font-semibold">{props.applicants}</span> {props.Bottom_text2}</p>
            </div>
        </div>
      </>
  );
};

export default Assignment;