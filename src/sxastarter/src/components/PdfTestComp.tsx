import React from 'react';

export const Default = (): JSX.Element => {
  return (
    <div>
      <h1>Test PDF Viewer</h1>    
      <object
        className="absolute top-0 left-0 w-full h-full"
        data="https://xmc-pssapj1-muhmlatestxmc-dev.sitecorecloud.io/-/media/Project/testSite/testSite/ADV_Plate.pdf"
        title="testpdf"
      ></object>
    </div>
  );
};
