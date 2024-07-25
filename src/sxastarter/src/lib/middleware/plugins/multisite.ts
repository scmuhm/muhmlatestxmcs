import { NextRequest, NextResponse } from 'next/server';
import { MultisiteMiddleware, debug } from '@sitecore-jss/sitecore-jss-nextjs/middleware';
import { siteResolver } from 'lib/site-resolver';
import { MiddlewarePlugin } from '..';
import { SitesMap } from 'scripts/graphql-extended-siteinfo-service';
import JssConfig from '../../../temp/config';
import { extractPathComponents } from 'src/utils';

/**
 * This is the multisite middleware plugin for Next.js.
 * It is used to enable Sitecore multisite in Next.js.
 *
 * The `MultisiteMiddleware` will
 *  1. Based on provided hostname and sites information, resolve site.
 *  2. Rewrite the response to the specific site.
 *  3. Set `sc_site` cookie with site name and `x-sc-rewrite` header with rewritten path to be reused in following middlewares.
 */
class MultisitePlugin implements MiddlewarePlugin {
  private multisiteMiddleware: MultisiteMiddleware;

  // Multisite middleware has to be executed first
  order = -1;

  constructor() {
    this.multisiteMiddleware = new MultisiteMiddleware({
      // This function determines if a route should be excluded from site resolution.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: () => false,
      // Site resolver implementation
      siteResolver,
      // This function allows resolving site from sc_site cookie, which could be useful in case of Vercel preview URLs. Accepts NextRequest.
      useCookieResolution: () => process.env.VERCEL_ENV === 'preview',
    });
  }

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    if (req.nextUrl.pathname !== req.nextUrl.pathname.toLowerCase()) {
      return NextResponse.redirect(
        new URL(
          `${req.nextUrl.origin}${req.nextUrl.pathname.toLowerCase()}?${req.nextUrl.searchParams}`
        ),
        301 // Set Permanent Redirect
      );
    }
    debug.multisite('MultisitePlugin - origin: %o', req.headers.get('origin'));
    debug.multisite('MultisitePlugin - hostname: %o', req.headers.get('hostname'));
    debug.multisite('MultisitePlugin - host: %o', req.headers.get('host'));
    debug.multisite('MultisitePlugin - Origin: %o', req.headers.get('Origin'));
    debug.multisite('MultisitePlugin - Hostname: %o', req.headers.get('Hostname'));
    debug.multisite('MultisitePlugin - Host: %o', req.headers.get('Host'));
    debug.multisite('MultisitePlugin - pathName: %o', req.nextUrl.pathname.toLowerCase());
    // BEGIN: Nextjs multisite routing customisations based on virtual folder
    const requestHeaders = new Headers(req.headers);
    const hostname = req.headers.get('host')?.replace(/:\d+$/, '') ?? '';

    let sitesMap: SitesMap = {};
    const multisitesData: { [key: string]: SitesMap } = JssConfig.sites
      ? JSON.parse(JssConfig.sites)
      : {};
    debug.multisite('MultisitePlugin - multisitesData: %o', multisitesData);
    if (Object.keys(multisitesData).length > 0) {
      sitesMap = multisitesData[hostname];
    }
    debug.multisite('MultisitePlugin - sitesMap: %o', sitesMap);

    // extract country code, locale and rest of the path from the url path
    const { countrycode, languagecode, pathname } = extractPathComponents(
      hostname,
      req.nextUrl.pathname
    );

    debug.multisite('MultisitePlugin - extractPathComponents: %o', {
      countrycode,
      languagecode,
      pathname,
    });

    // set sc_site cookie with the country code in the url path
    // The value of custome header is set to resolve based on siteName. Search for instances of `siteResolver.getByName`
    if (countrycode) {
      req.cookies.set('sc_site', sitesMap[countrycode]);
      requestHeaders.set('x-sc-site', sitesMap[countrycode]);
    } else {
      req.cookies.set('sc_site', sitesMap['']);
      requestHeaders.set('x-sc-site', sitesMap['']);
    }

    debug.multisite('MultisitePlugin - sc_site: %o', req.cookies.get('sc_site'));

    // set the req locale and path with the ones extracted from the url path
    req.nextUrl.locale = languagecode as string;
    req.nextUrl.pathname = pathname;

    // set request headers in NextResponse.rewrite
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });

    res = response || res;
    // END: Nextjs multisite routing customisations based on virtual folder

    return this.multisiteMiddleware.getHandler()(req, res);
  }
}

export const multisitePlugin = new MultisitePlugin();
