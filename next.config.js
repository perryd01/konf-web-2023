const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
	},
});

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	async headers() {
		const headers = [
			{
				source: "/assets/:path*",
				headers: [
					{
						key: "X-Robots-Tag",
						value: "noindex",
					},
				],
			},
		];
		if (process.env.VERCEL_ENV !== "production") {
			headers.push({
				source: "/:path*",
				headers: [
					{
						key: "X-Robots-Tag",
						value: "noindex",
					},
				],
			});
		}
		return headers;
	},

	async redirects() {
		return [
			{
				source: "/2022",
				destination: "https://2022.konferencia.simonyi.bme.hu",
				permanent: true,
			},
			{
				source: "/2021",
				destination: "https://2021.konferencia.simonyi.bme.hu",
				permanent: true,
			},
			{
				source: "/2019",
				destination: "https://2019.konferencia.simonyi.bme.hu",
				permanent: true,
			},
			{
				source: "/2018",
				destination: "https://2018.konferencia.simonyi.bme.hu",
				permanent: true,
			},
			{
				source: "/2017",
				destination: "https://2017.konferencia.simonyi.bme.hu",
				permanent: true,
			},
			{
				source: "/2016",
				destination: "https://2016.konferencia.simonyi.bme.hu",
				permanent: true,
			},
		];
	},
};

module.exports = withMDX({
	pageExtensions: ["tsx", "mdx", "ts"],
	...nextConfig,
});
