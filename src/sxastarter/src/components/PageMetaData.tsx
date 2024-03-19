import { Text, Image, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { GetPageMetaDataFields } from '@components/GetPageMetaDataFields';
import { PageFields } from '@components/GetPageMetaDataFields';

const PageMetaData = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const pageFields: PageFields = GetPageMetaDataFields();
  return sitecoreContext?.pageEditing ? (
    <section className={`metadata `}>
      <div className="title">Add card Metadata here (Edit mode only)</div>
      <div>
        <Image field={pageFields.image} editable={true} className="image" />
        <div>
          <span className="label">Short Title:</span>
          <Text field={pageFields.shortTitle} editable={true} />
        </div>
        <div>
          <span className="label">Long Title:</span>
          <Text field={pageFields.longTitle} editable={true} />
        </div>
        <div>
          <span className="label">Description:</span>
          <Text field={pageFields.description} editable={true} />
        </div>
        <div>
          <span className="label">Breadcrumb Title:</span>
          <Text field={pageFields.navigationTitle} editable={true} />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default PageMetaData;
