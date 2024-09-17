/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/matrices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
