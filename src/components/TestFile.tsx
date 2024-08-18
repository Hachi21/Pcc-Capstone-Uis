import { ReactElement } from "react";

interface Props {
  title: string;
  image: ReactElement;
}

const TestFile = (props: Props) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-400 p-10">
      <div className="flex gap-3">
        {props.image}
        <p>{props.title}</p>
      </div>
      <button className="bg-red-400 p-3 outline">See All</button>
    </div>
  );
};

export default TestFile;
