import React from 'react';

export const Default = (): JSX.Element => {
  return (
    <div>
      <h1>Test PDF Viewer</h1>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src='https://xmc-pssapj1-muhmlatestxmc-dev.sitecorecloud.io/-/media/Project/testSite/testSite/ADV_Plate.pdf'
        width="100%"
        height="100%"
        title="test PDF"
      ></iframe>
    </div>
  );
};