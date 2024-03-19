import React, { useEffect, useRef } from 'react';
import { addSingleMarkers } from '@components/maps/MapsMarker';

const DEFAULT_CENTER = { lat: 39.94758, lng: -75.19313 };
const DEFAULT_ZOOM = 10;

export const GoogleMaps = ({
  locations,
  center = DEFAULT_CENTER,
  defaultZoom = DEFAULT_ZOOM,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  className?: string;
  center?: google.maps.LatLngLiteral;
  defaultZoom?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: center,
        zoom: defaultZoom,
      });

      // Displays single markers on map when called
      addSingleMarkers({ locations, map });

      // Displays cluster markers on map when called (when needed call this to group markers)
      //addClusterMarkers({ locations, map });
    }
  }, [ref, locations, center, defaultZoom]);

  return <div ref={ref} className="map" />;
};
