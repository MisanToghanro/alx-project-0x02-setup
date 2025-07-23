import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {

    return(
        <div className="m-4 mb-2 grid-cols-1 md:grid-cols-2">
            <div className="bg-blue-500 max-w-sm mx-auto p-4 rounded-md shadow-lg text-white cursor-pointer ">
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm">{content}</p>
            </div>
        </div>
    )
}
export default Card;