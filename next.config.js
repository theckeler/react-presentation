/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.wikia.nocookie.net",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
