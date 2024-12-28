interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          className="inline-block px-4 py-2 bg-white font-semibold rounded-lg shadow hover:bg-gray-500 hover:text-white transition duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
