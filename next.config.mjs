import createNextIntlPlugin from 'next-intl/plugin';

//https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing#move-i18n-ts
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
