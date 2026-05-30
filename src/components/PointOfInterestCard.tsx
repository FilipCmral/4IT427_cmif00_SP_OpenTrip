interface PointOfInterestCardProps {
  id: string;
  name: string;
  kinds: string; //Comma-separated list of categories. https://dev.opentripmap.com/en/catalog.tree.json
  rate: string; //Rating of the place. The value is a string with a number 
  image: string; // Image URL
  wikipedia_extracts?: {
    title: string;
    text: string;
    html: string;
  };
}

export function PointOfInterestCard({ name, kinds, rate, image, wikipedia_extracts }: PointOfInterestCardProps) {
  return (
    <div className="point-of-interest-card">
      <h3>{name}</h3>
      {wikipedia_extracts && <p>{wikipedia_extracts.text}</p>}
      <p>Kinds: {kinds}</p>
      <p>Rating: {rate}⭐</p>
      {image && <img src={image} alt={name} />}
    </div>
  );
}