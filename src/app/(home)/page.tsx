// import { FAQ1 } from "./faq";
import { CTA1 } from "./cta";
import FAQ1 from "./faq";

import Features from "./feature";
import { Hero1 } from "./hero";
import Pricing from "./pricing";
import { TechStack } from "./tech";
import { TestimonialsSection } from "./testimonials";

export default function Home() {
	return (
		<div>
			<Hero1 />
			<TechStack />
			<Features />
			<TestimonialsSection />
			<FAQ1 />
			<Pricing />
			<CTA1 />
		</div>
	);
}
