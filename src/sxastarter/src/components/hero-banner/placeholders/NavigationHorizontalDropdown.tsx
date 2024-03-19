import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

const NavigationHorizontalDropdown = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <section className="navigation-horizontal-dropdown">
      {sitecoreContext?.pageEditing ? (
        <p>NavigationHorizontalDropdown Placeholder</p>
      ) : (
        <p>&nbsp;</p>
      )}
    </section>
  );
};

export default NavigationHorizontalDropdown;
