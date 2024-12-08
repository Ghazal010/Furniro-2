import { BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
      <div className="bg-white relative h-24 w-screen flex justify-center items-center">
        <span>
            <img src="/logo.png" className="w-24 absolute top-4 left-4"/>
            <span className="font-sans font-extrabold font text-5xl absolute left-24 top-10 ml-1">Furniro</span>
        </span>
        <span>
        <nav className="hidden md:flex gap-x-20 text-black font-semibold absolute top-16 left-[460px]">
        <a href="/" className="">Home</a>
        <a href="/shop" className="">Shop</a>
        <a href="/blog" className="">Blog</a>
        <a href="/contact" className="">Contact</a>
      </nav>
        </span>
      <span className="flex absolute right-[120px] text-2xl top-16 gap-x-12">
      <BsPerson className=""/>
      <FiSearch />
      <FaRegHeart />
      <AiOutlineShoppingCart />

      </span>
      </div>
    );
  };
  
  export default Header;
  