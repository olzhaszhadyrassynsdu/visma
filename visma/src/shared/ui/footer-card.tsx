export const FooterCard = ({ imgURL, text }) => {
  return (
    <div className="flex text-white max-lg:mb-4">
      <img src={imgURL} />
      <p className="ml-4">{text}</p>
    </div>
  );
};
