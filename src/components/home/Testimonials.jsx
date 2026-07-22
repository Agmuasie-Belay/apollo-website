import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";

import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section
      className="
        px-6
        lg:px-24
        py-24
        bg-gray-50
        dark:bg-slate-900
      "
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
        badge="Testimonials"
          title="What Our Travelers Say"
          description="Trusted by individuals, families, and corporate clients for reliable travel experiences."
        />

        <div
          className="
            mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;