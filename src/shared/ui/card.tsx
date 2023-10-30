export const Card = ({ title, content }) => {
  return (
    <div className="p-8 bg-[#5DB7DE] rounded-3xl">
      <h4>{title}</h4>
      <p className="font-bold mt-28">{content}</p>
    </div>
  );
};
