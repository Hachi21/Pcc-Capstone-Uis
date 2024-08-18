import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  price: number;
  hasCash: boolean;
  image: ReactElement;
  className?: string;
}

const Card = (props: Props) => {
  return (
    <>
      <div
        className={twMerge(
          "flex flex-col items-center justify-start gap-3 rounded-2xl bg-slate-600 p-8",
          props.className,
        )}
      >
        {props.image}

        <p>{props.title}</p>

        <p className="text-xl font-bold">${props.price}</p>

        {props.hasCash && (
          <div className="flex justify-between gap-8">
            <span className="flex flex-col items-center justify-center">
              <p>Cash:</p>
              <p>$370.55</p>
            </span>
            <span className="flex flex-col items-center justify-center">
              <p>Card:</p>
              <p>$872.22</p>
            </span>
            <span className="flex flex-col items-center justify-center">
              <p>Credit:</p>
              <p>$0.00</p>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
