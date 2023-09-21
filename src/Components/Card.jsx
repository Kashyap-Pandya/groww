const Card = ({ img, h2, p, p1, p2, p3, btn, margin, bg }) => {
	console.log(margin);
	return (
		<div
			className={`w-full text-center shadow-xl md:my-0 my-4 flex flex-col p-4 rounded-lg hover:scale-105 border ${margin} ${bg}`}
		>
			<img
				src={img}
				className='w-[4rem] mx-auto mt-[-3rem] bg-white'
				alt='icon'
			/>
			<h2 className='text-2xl font-bold py-8 '>{h2}</h2>
			<p className='text-4xl font-bold'>{p}</p>
			<div className='font-medium'>
				<p className='py-2 border-b mx-8 mt-8 no-li whitespace-nowrap'>
					{p1}
				</p>
				<p className='py-2 border-b mx-8'>{p2}</p>
				<p className='py-2 border-b mx-8'>{p3}</p>
			</div>
			<button className={btn}>Start Trial</button>
		</div>
	);
};
export default Card;
