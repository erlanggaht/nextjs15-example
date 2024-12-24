import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import { headers } from 'next/headers';
 
export default getRequestConfig(async ({requestLocale}) => {
  const headersList = await headers();
  const pathname = await headersList.get('x-pathname')?.split('/')[2]
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../locales/${pathname}/${locale}.json`)).default
  };
});