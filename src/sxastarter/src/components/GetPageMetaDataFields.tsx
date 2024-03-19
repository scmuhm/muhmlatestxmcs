import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export type PageFieldsType = {
  value?: string;
};

export type PageFields = {
  title: PageFieldsType;
  shortTitle: PageFieldsType;
  longTitle: PageFieldsType;
  navigationTitle: PageFieldsType;
  description: PageFieldsType;
  image: PageFieldsType;
};

export const GetPageMetaDataFields = () => {
  const { sitecoreContext } = useSitecoreContext();
  const pageFields: PageFields = {
    shortTitle: sitecoreContext?.route?.fields!['shortTitle'] as PageFieldsType,
    longTitle: sitecoreContext?.route?.fields!['longTitle'] as PageFieldsType,
    description: sitecoreContext?.route?.fields!['description'] as PageFieldsType,
    image: sitecoreContext?.route?.fields!['image'] as PageFieldsType,
    title: sitecoreContext?.route?.fields!['shortTitle'] as PageFieldsType,
    navigationTitle: sitecoreContext?.route?.fields!['navigationTitle'] as PageFieldsType,
  };

  pageFields.title =
    pageFields.longTitle?.value === '' ? pageFields.shortTitle : pageFields.longTitle;

  return pageFields;
};
