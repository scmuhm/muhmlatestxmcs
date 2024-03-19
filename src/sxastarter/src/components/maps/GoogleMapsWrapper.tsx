import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

export const GoogleMapsWrapper = ({
  children,
  apiKey,
}: {
  children: React.ReactNode;
  apiKey?: string;
}) => {
  apiKey = apiKey || process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};
