import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		// allow remote avatars used in testimonials
		domains: ["randomuser.me", "images.unsplash.com"],
	},
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
