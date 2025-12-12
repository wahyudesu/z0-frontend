import { Star } from "lucide-react";

type TestimonialProps = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
};

export default function Testimonial({
  name,
  role,
  company,
  content,
  avatar,
}: TestimonialProps) {
  return (
    <div className="rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" key={i} />
        ))}
      </div>
      <p className="text-muted-foreground mb-6">{content}</p>
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
            src={avatar}
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

type TestimonialsSectionProps = {
  testimonials: TestimonialProps[];
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Loved by thousands of users
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
