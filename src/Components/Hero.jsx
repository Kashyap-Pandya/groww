import Typed from "react-typed";

const Hero = () => {
	return (
		<div className='text-white'>
			<div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-[-100px]'>
				<p className='uppercase font-bold p-2 text-[#00df9a] md:text-xl sm:text-xl'>
					growing with data analytics
				</p>
				<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 pt-4 pb-6 tracking-wider '>
					Grow with data<span className='text-[#00df9a]'>!</span>
				</h1>
				<div className='flex justify-center items-center'>
					<p className='md:text-4xl sm:text-2xl  font-bold '>
						Fast, Flexible, Financing For
						<Typed
							className='md:text-4xl sm:text-2xl  font-bold pl-2  text-green-300'
							strings={["BTB.", "BTC.", "SASS."]}
							typeSpeed={120}
							backSpeed={140}
							loop
						/>
					</p>
				</div>
				<p className='md:text-2xl text-xl  text-gray-500 p-4 sm:text-xl'>
					Monitor your data analytics to increase revenue for BTB,BTC
					& SASS platforms.
				</p>
				<button className=' w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black text-2xl border-2 text-[#00df9a] border-green-600 hover:bg-green-400 hover:text-black'>
					Get Started{" "}
				</button>
			</div>
		</div>
	);
};
export default Hero;
