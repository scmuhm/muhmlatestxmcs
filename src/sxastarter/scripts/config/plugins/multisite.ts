import chalk from 'chalk';
import {
  GraphQLExtendedSiteInfoService,
  ExtendedSiteInfo,
  SitesMap,
} from '../../graphql-extended-siteinfo-service';
import { createGraphQLClientFactory } from 'lib/graphql-client-factory/create';
import { JssConfig } from 'lib/config';
import { ConfigPlugin } from '..';

/**
 * This plugin will set the "sites" config prop.
 * By default this will attempt to fetch site information directly from Sitecore (using the GraphQLSiteInfoService).
 * You could easily modify this to fetch from another source such as a static JSON file instead.
 */
class MultisitePlugin implements ConfigPlugin {
  order = 11;

  async exec(config: JssConfig) {
    // let sites: SiteInfo[] = [];
    let sites: ExtendedSiteInfo[] = [];
    let sitesMap: SitesMap = {};
    let locales: string[] = [];

    try {
      console.log('Fetching extended site information');
      // get extended site info = site info + virtual folder
      const siteInfoService = new GraphQLExtendedSiteInfoService({
        clientFactory: createGraphQLClientFactory(config),
      });
      sites = await siteInfoService.fetchExtendedSiteInfo();
    } catch (error) {
      console.error(chalk.red('Error fetching site information'));
      console.error(error);
    }

    console.log(`MultisitePlugin: Sites Info:`);
    console.table(sites);

    // Remove duplicates based on name, hostName, and virtualFolder
    const uniqueSitesData = sites.filter(
      (site, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.hostName === site.hostName &&
            t.name === site.name &&
            t.virtualFolder === site.virtualFolder
        )
    );

    console.log(`MultisitePlugin: uniqueSitesData:`);
    console.table(uniqueSitesData);

    // Group by hostName
    const sitesData: { [key: string]: SitesMap } = {};
    uniqueSitesData.forEach((item) => {
      if (!sitesData[item.hostName]) {
        sitesData[item.hostName] = {};
      }
      sitesData[item.hostName][item.virtualFolder?.replace(/\//g, '')] = item.name;
    });

    console.log(`MultisitePlugin: sitesData:`);
    console.table(sitesData);

    // get country - site mapping from the sites info
    sitesMap = sites.reduce((sMap: SitesMap, { name, virtualFolder }) => {
      const virtualName = virtualFolder?.replace(/\//g, '');
      sMap[virtualName] = name;

      return sMap;
    }, {});

    console.log(`MultisitePlugin: sitesMap:`);
    console.table(sitesMap);

    // get languages from the sites info
    locales = sites.reduce((acc: string[], { language }) => {
      if (!acc.includes(language)) {
        acc.push(language);
      }
      return acc;
    }, []);

    console.log(`MultisitePlugin: locales:`);
    console.table(locales);

    return Object.assign({}, config, {
      sites: JSON.stringify(sites),
      sitesMap: JSON.stringify(sitesMap),
      sitesData: JSON.stringify(sitesData),
      locales: JSON.stringify(locales),
    });
  }
}

export const multisitePlugin = new MultisitePlugin();
