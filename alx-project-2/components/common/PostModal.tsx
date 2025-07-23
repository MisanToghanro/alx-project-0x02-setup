import { PostModalProps , PostData } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({isOpen, onClose,onSubmit}) => {

    const[title , setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit =(e:React.FormEvent) => {
        e.preventDefault();

        const post: PostData = {
            title :title,
            content: content
        }
        onSubmit(post);
        setTitle("");
        setContent("");
        onClose();
    }

    if(!isOpen){
        return null //do not show modal if isopen is flase
    }

    return(
        <div className="fixed inset-0 bg-gradient-to-r from-blue-500 to-red-500 flex justify-center items-center">
        <div className="bg-white rounded-md shadow-2xl w-full max-w-md p-8">
            <h2 className="mb-2 font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Add a post</h2>

            <form onSubmit={handleSubmit} >
                <div className="mb-2">
                <label htmlFor="title" className="block text-xl font-semibold">Title</label>
                <input 
                type="text" 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full  rounded-md border focus:outline-none focus:ring-2 ring-blue-500 p-2"
                placeholder="Title"/>

               <label htmlFor="content" className="block text-xl font-semibold">Content</label>
                <textarea 
                value={content}
                id="content"
                onChange={(e) => setContent(e.target.value)}
                className="w-full  rounded-md border focus:outline-none focus:ring-2 ring-blue-500 p-2"
                placeholder="content"/>
                </div>

                <div className="flex justify-between items-center mt-2">
                <button className="rounded-full bg-blue-500 text-white px-6 py-2 cursor-pointer hover:bg-blue-600">Add Post</button>
                <button onClick={onClose}className="rounded-full bg-red-500 text-white px-6 py-2 cursor-pointer hover:bg-red-600">Cancel</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default PostModal;