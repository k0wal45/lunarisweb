import type { NextConfig } from 'next';

const CANONICAL = 'https://lunarisweb.pl';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  // w D:\Strony leży inny pnpm-workspace.yaml; korzeniem projektu jest ten katalog
  turbopack: { root: import.meta.dirname },

  async redirects() {
    return [
      // jeden kanoniczny adres: bez „www”
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lunarisweb.pl' }],
        destination: `${CANONICAL}/:path*`,
        permanent: true,
      },

      // stare adresy z poprzedniej wersji strony
      { source: '/portfolio', destination: '/realizacje', permanent: true },
      { source: '/portfolio/:slug', destination: '/realizacje/:slug', permanent: true },
      { source: '/blog', destination: '/wiedza', permanent: true },
      { source: '/blog/:slug', destination: '/wiedza/:slug', permanent: true },
      { source: '/omnie', destination: '/o-mnie', permanent: true },
      { source: '/uslugi/logotypy', destination: '/uslugi/identyfikacja-wizualna', permanent: true },
      // stara strona zbiorcza usług
      { source: '/uslugi', destination: '/uslugi/strony-internetowe', permanent: true },
    ];
  },
};

export default nextConfig;
