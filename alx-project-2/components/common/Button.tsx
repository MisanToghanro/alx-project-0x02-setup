import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({size, shape , title}) => {

    return(
        <div>
            <button className={`bg-red-500 mb-2 text-white px-6 py-2 cursor-pointer ${size} ${shape}`} type="button"> {title}</button>
        </div>
    )
}
export default Button;