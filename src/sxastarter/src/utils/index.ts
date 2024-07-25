import DCA_CONSTANTS from 'components/DCAConstants';
import JssConfig from '../temp/config';
import { SitesMap } from 'scripts/graphql-extended-siteinfo-service';

type SiteInfoTuple = [string | undefined, string | undefined, string];

const extractPathComponents = (
  hostname: string,
  path: string
): { countrycode?: string; languagecode?: string; pathname: string } => {
  console.log(`extractPathComponents: hostname - ${hostname}`);

  const match = path.match(/^\/(?:(\w{2})\/)?(?:(\w{2}(?:-\w{2})?)\/)?(.+)/);

  let [countrycode, languagecode, pathname]: SiteInfoTuple = [undefined, undefined, '/'];
  let sitesMap: SitesMap = {};
  let countrycodes: string[] = [];

  const multisitesData: { [key: string]: SitesMap } = JssConfig.sites
    ? JSON.parse(JssConfig.sites)
    : {};

  if (Object.keys(multisitesData).length > 0) {
    sitesMap = multisitesData[hostname];

    countrycodes = Object.keys(sitesMap);
  }

  if (match) {
    [, countrycode, languagecode, pathname] = match;

    if (!countrycode || !languagecode) {
      if (countrycodes.includes(pathname)) {
        countrycode = pathname;
        pathname = '/';
      }

      if (DCA_CONSTANTS.DEFAULTS.LOCALES.includes(pathname)) {
        languagecode = pathname;
        pathname = '/';
      }
    }
  } else {
    [countrycode, languagecode, pathname] = [undefined, undefined, '/'];
  }

  languagecode = languagecode ?? 'en';
  pathname = pathname ?? '/';

  return { countrycode, languagecode, pathname };
};

export { extractPathComponents };