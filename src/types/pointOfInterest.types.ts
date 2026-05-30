// https://dev.opentripmap.org/docs#/#model-SimpleFeature

export interface PointOfInterestSimple {
  xid: string;
  name: string;
  kinds: string; //Comma-separated list of categories. https://dev.opentripmap.com/en/catalog.tree.json
  rate: string; //Rating of the place. The value is a string with a number 
}

export interface PointOfInterest extends PointOfInterestSimple {
  preview?: {
    source: string;
    height: number;
    width: number;
  }
  wikipedia_extracts?: {
    title: string;
    text: string;
    html: string;
  };
}