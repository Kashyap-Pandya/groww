import img1 from "../assets/single.png";
import img2 from "../assets/double.png";
import img3 from "../assets/triple.png";
import Card from "../Components/Card";

const Cards = () => {
	return (
		<main className=' py-[10rem] px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<Card
					img={img1}
					h2='Single User'
					p='$149'
					p1='500 GB Storage'
					p2='1 Granted User'
					p3='Send upto 2 GB'
					btn='light-btn'
				/>
				<Card
					img={img2}
					h2='Two User'
					p='$179'
					p1='750 GB Storage'
					p2='2 Granted User'
					p3='Send upto 10 GB'
					btn='dark-btn'
					bgTransparent='bg-transparent'
					edited='edited'
				/>
				<Card
					img={img3}
					h2='Five User'
					p='$199'
					p1='1000 GB Storage'
					p2='5 Granted User'
					p3='Send upto 50 GB'
					btn='light-btn'
				/>
			</div>
		</main>
	);
};
export default Cards;
