
export interface CardProps {
title:string,
content:string
}

export interface ButtonProps {
    title:string,
    size: "small" | "medium" | "large",
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostData {
title:string,
content:string
}

export interface PostModalProps{

    isOpen : boolean,
    onClose: () => void,
    onSubmit: (post:PostData) => void
}

export interface PostProps{
    title:string,
    content:string,
    userId:number
}

export interface UserProps{
    id:number,
    name:string,
    email:string,
    address: {
     street: string;
    city: string;
    }
}


export interface UsersPageProps {
  users: UserProps[];
}

export interface PostProps{
    title:string,
     content:string,
      userId:number,
}

export interface PostsPageProps{
    posts: PostProps[]
}