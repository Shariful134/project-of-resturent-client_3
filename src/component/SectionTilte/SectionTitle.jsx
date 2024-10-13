const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" mx-auto  text-center  w-4/12 my-8">
      <p className=" text-yellow-500">{subHeading}</p>
      <h3 className="text-black uppercase border-y-4 py-4 ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
