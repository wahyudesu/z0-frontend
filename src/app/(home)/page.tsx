// import { FAQ1 } from "./faq";
import { CTA1 } from "./component/cta";
import FAQ1 from "./component/faq";

import Features from "./component/feature";
import { Hero1 } from "./component/hero";
import Pricing from "./component/pricing";
import { TechStack } from "./component/tech";
import { TestimonialsSection } from "./component/testimonials";
// import Navbar from "@/app/(home)/navbar/navbar";

export default function Home() {
	return (
		<div>
			{/* <Navbar /> */}
			<Hero1 />
			{/* <TechStack /> */}
			<Features />
			{/* <TestimonialsSection /> */}
			<FAQ1 />
			<Pricing />
			<CTA1 />
		</div>
	);
}
