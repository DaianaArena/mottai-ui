export type CardProps = {
    title: string;
    description: string;
  };
  
  export const Card = ({ title, description }: CardProps) => {
    return (
      <div className="mottai">
      <div className="mottai-max-w-sm mottai-rounded mottai-overflow-hidden mottai-shadow-lg mottai-m-4 mottai-bg-white">
        <div className="mottai-px-6 mottai-py-4">
          <div className="mottai-space-y-2">
            <h2 className="mottai-text-xl mottai-font-bold mottai-text-gray-800">{title}</h2>
            <p className="mottai-text-gray-600 mottai-text-base">{description}</p>
          </div>
        </div>
      </div>
      </div>
    );
  };
  