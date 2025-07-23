import Header from "@/components/layout/Header";
import { PostsPageProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

const Post: React.FC<PostsPageProps> = ({posts}) => {

    return(
        <div>
            <Header/>
            <main>
                <h1 className="text-center text-2xl font-semibold mb-2">Post page</h1>

                <div>{posts.map((post) =>(<div key={post.userId}>
                    <PostCard {...post}/>
                </div>))}</div>
            </main>
        </div>
    )}

        export const getStaticProps:GetStaticProps = async () => {
    
            try{
               const response = await fetch("https://jsonplaceholder.typicode.com/posts")
               const posts:PostProps[] = await response.json()
    
               return{
                props: {
                    posts,
                }
               }
            }catch(error){
                     throw new Error("couldnt fetch users");
        }
}

export default Post;