import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { UsersPageProps } from "@/interfaces";
import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";


const Users: React.FC<UsersPageProps> = ({users}) => {

    return(
        <div>

            <Header/>
            <div>
            <h1>users</h1>

            <div>{users.map((user) => (<div key={user.id} >
                <UserCard {...user}/>
            </div>))}
            </div>
                
            </div>

        </div>
)
};
    export const getStaticProps:GetStaticProps = async () => {

        try{
           const response = await fetch("https://jsonplaceholder.typicode.com/users")
           const users:UserProps[] = await response.json()

           return{
            props: {
                users,
            }
           }
        }catch(error){
                 throw new Error("couldnt fetch users");
    }
};

export default Users;