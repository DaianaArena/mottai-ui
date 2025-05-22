export type CardProps = {
    title: string;
    description: string;
    /** Additional className for the card container */
    className?: string;
    /** Custom styles for specific parts of the card */
    customStyles?: {
      container?: string;
      title?: string;
      description?: string;
    };
  };
  
  export const Card = ({ 
    title, 
    description, 
    className = '',
    customStyles = {}
  }: CardProps) => {
    const {
      container: containerStyles = '',
      title: titleStyles = '',
      description: descriptionStyles = ''
    } = customStyles;

    return (
      <div className="mottai">
      <div className={`mottai-max-w-sm mottai-rounded mottai-overflow-hidden mottai-shadow-lg mottai-m-4 mottai-bg-white ${className} ${containerStyles}`}>
        <div className="mottai-px-6 mottai-py-4">
          <div className="mottai-space-y-2">
            <h2 className={`mottai-text-xl mottai-font-bold mottai-text-gray-800 ${titleStyles}`}>
              {title}
            </h2>
            <p className={`mottai-text-gray-600 mottai-text-base ${descriptionStyles}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  };
  