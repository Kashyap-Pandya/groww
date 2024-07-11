const Analytics = () => {
  return (
    <div className="w-full bg-white">
      <div className="grid max-w-[1240px] mx-auto gap-8 md:grid-cols-2 py-12">
        <img
          src="/laptop.svg"
          className="w-[250px] mx-auto my-4 sm:w-[450px]"
          alt="Laptop img"
        />
        <div className="flex flex-col justify-center px-4 ">
          <p className="text-[#00df9a] font-bold text-lg">
            DATA ANALYTICS DASHBOARD
          </p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h2>
          <p className="first-letter:bg-[#f1eaea] first-letter:text-2xl first-letter:sm:text-3xl first-letter:md:text-4l">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            excepturi quibusdam unde laborum voluptatum, hic labore nisi magni
            iure. Accusamus recusandae fugit, consequatur tenetur libero soluta
            architecto commodi magni eaque?
          </p>
          <button className="dark-btn md:mx-0">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
