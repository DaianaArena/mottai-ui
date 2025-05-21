type CardProps = {
    title: string;
    description: string;
  };
  
  export const Card = ({ title, description }: CardProps) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <div className="px-6 py-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 text-base">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  