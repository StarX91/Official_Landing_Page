import { MdSupervisedUserCircle } from "react-icons/md";

// Define the type for the card's props
interface CardProps {
  item: {
    title: string;
    number: number;
    change: number;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg flex gap-5 items-center w-full hover:bg-gray-700 cursor-pointer">
      <MdSupervisedUserCircle size={24} className="text-white" />
      <div className="flex flex-col gap-3">
        <span className="text-xl font-bold text-white">{item.title}</span>
        <span className="text-2xl font-medium text-white">{item.number}</span>
        <span className="text-sm text-gray-300">
          <span className={item.change > 0 ? "text-lime-500" : "text-red-500"}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
