import Link from "next/link";

const Header: React.FC = () => {

    return(
        <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-4">
            <div className="container flex justify-between mx-auto px-6 items-center">
            <h3>
                <Link href="/">M</Link>
            </h3>
            <nav >
                <ul className="flex space-x-6">
                    <li className="hover:underline">
                        <Link href="/home">Home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            </div>

        </div>
    )
}
export default Header;