import React from 'react';

import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

import { GoogleMapsWrapper } from '@components/maps/GoogleMapsWrapper';
import { GoogleMaps } from '@components/maps/GoogleMap';

export type GoogleMapProps = ComponentProps & {
  fields: {
    apiKey?: Field<string>;
  };
};

export const LOCATIONS = [{ lat: 39.94758, lng: -75.19313 }];

const Map = (props: GoogleMapProps) => (
  <GoogleMapsWrapper apiKey={props.fields.apiKey?.value}>
    <GoogleMaps locations={LOCATIONS} />
  </GoogleMapsWrapper>
);

//export default Map;

export default withDatasourceCheck()<GoogleMapProps>(Map);
