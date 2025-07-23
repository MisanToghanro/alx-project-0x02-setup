import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({id,name,email,address}) => {

    const user: UserProps = {
        id,
        name,
        email,
        address
    }
    return(
        <div className="border p-4 rounded shadow bg-white">
            <h1>Users</h1>
            <div>
                <h1 className="text-lg font-bold">Name: {user.name}</h1>
                <h1 className="text-lg font-bold">User id: {user.id}</h1>
                <p className="text-sm">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Address: {user.address.street}, {user.address.city}</p>

            </div>
        </div>
    )
}
export default UserCard;