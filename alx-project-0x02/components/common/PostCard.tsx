import { PostProps } from "@/interfaces";
const PostCard: React.FC<PostProps> = ({title, content,userId}) => {


    const post:PostProps = {
        title,
         content,
         userId
    }
    return(
        <div className="border p-4 rounded shadow bg-white">
            <div>
                <h1>Title: {post.title}</h1>
                <h1>Content: {post.content}</h1>
                <h1>User ID {post.userId}</h1>
            </div>
        </div>
    )
}
export default PostCard;