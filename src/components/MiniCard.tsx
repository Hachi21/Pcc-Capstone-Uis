import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  value: number;
  className?: string;
  image: ReactElement;
}

const MiniCard = (props: Props) => {
  return (
    <>
      <div className="flex gap-4 rounded-lg bg-gray-600 p-5">
        <span
          className={twMerge(
            "flex items-center justify-between rounded-full bg-orange-500 p-4",
            props.className,
          )}
        >
          {props.image}
        </span>

        <span className="flex flex-col justify-center">
          <p className="text-gray-300">{props.title}</p>
          <p className="text-xl font-bold text-gray-300">{props.value}</p>
        </span>
      </div>
    </>
  );
};

export default MiniCard;
