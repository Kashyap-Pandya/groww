import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const handleMenuToggle = () => setMenuToggle(!menuToggle);

	return (
		<header className=' '>
			<nav className='w-full flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
				<h1 className='text-3xl font-bold text-[#00df9a]'>GROWW.</h1>
				<ul className='uppercase cursor-pointer hidden md:flex'>
					<li className='p-4'>Home</li>
					<li className='p-4'>company</li>
					<li className='p-4'>resources</li>
					<li className='p-4'>about</li>
					<li className='p-4'>contact</li>
				</ul>
				<div
					onClick={handleMenuToggle}
					className={`z-10 cursor-pointer md:hidden`}
				>
					{menuToggle ? (
						<AiOutlineClose size={30} />
					) : (
						<AiOutlineMenu size={30} />
					)}
				</div>

				<div
					className={`${
						menuToggle
							? "fixed right-0 top-0 w-[50%] border-left border-l-gray-900 border-b-4 border-l-4 border-b-gray-900 bg-black ease-in-out duration-500"
							: "fixed right-[-100%]"
					} md:hidden`}
				>
					<ul className='uppercase pt-16 text-center'>
						<li className='p-4 border-b border-green-400'>Home</li>
						<li className='p-4 border-b border-green-400'>
							company
						</li>
						<li className='p-4 border-b border-green-400'>
							resources
						</li>
						<li className='p-4 border-b border-green-400'>about</li>
						<li className='p-4'>contact</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
export default Nav;
