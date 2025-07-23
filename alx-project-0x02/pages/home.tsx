import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {

    const [isModalOpen , setIsModalOpen] = useState(false);
    const [posts ,setPosts] = useState<PostData[]>([])

    const handleAddPost = (newPost:PostData) => {setPosts((prevPost) => [...prevPost , newPost])
        
    }
    return(
        <div>
            <Header/>

            <main>
                <div>
                    <div className="flex justify-between items-center px-6 py-2">
                  <h1 className=" font-semibold text-2xl text-center">Home page</h1>

                  <button onClick={() => setIsModalOpen(true)} 
                  className="bg-blue-500 cursor-pointer hover:bg-blue-600 rounded-full px-6 py-2 text-white">Add a post</button>
                    </div>

                    <PostModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}/>

      

                <div className=" m-4 space-y-4  ">{posts.map((post , index) => (
                    <div className=" max-w-sm mx-auto  rounded-md bg-blue-500 text-white shadow-md p-4 "key={index}>
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm">{post.content}</p>
                    </div>))}
                </div>


                  <Card title="Create Card" content="Check if the card prop worked"/>
                  <Card title="Frontend development" content="Learning Type script and Nex.js"/>
                  <Card title="Fupre" content="Have to go to school"/>
                  <Card title="Time mangaement" content="Time waits for no one"/>
                  
                </div>


                 
            </main>
            
        </div>
    )
}
export default Home;