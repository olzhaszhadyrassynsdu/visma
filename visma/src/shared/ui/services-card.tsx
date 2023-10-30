export const ServicesCard = ({ title, content }) => {
  return (
    <div className="p-8 bg-[#3D348B] rounded-3xl text-white">
      <h4>{title}</h4>
      <p className="font-bold mt-28">{content}</p>
    </div>
  );
};
