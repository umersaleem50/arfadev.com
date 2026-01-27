import BrandSlider, {
  BrandList,
} from "@/components/shadcn-space/blocks/testimonial-02/brand-slider";
import Testimonial01Inner, {
  Testimonial,
} from "@/components/shadcn-space/blocks/testimonial-02/testimonial";
import Section from "../section";

const brandList: BrandList[] = [
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
    name: "Brand 1",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
    name: "Brand 2",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
    name: "Brand 3",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
    name: "Brand 4",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
    name: "Brand 5",
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Partnering with Arfa Developers has been a game-changer for our law firm. Their expertise in website design and development has transformed our online presence.",
    author: "Adv. Mian Shafeeq Chishti",
    role: "Founder | Chishti Law Firm",
    image: "/chishti.jpg",
  },
  {
    quote:
      "Had a great experience working with Umer on setting up our app’s backend using Supabase. He came in with a strong grasp of the stack, got things running smoothly, and made sure everything was well-documented and reliable.",
    author: "Syed Saamir Shamsie",
    role: "Founder | Copped AI",
    image: "/saamir-shamsie.jpg",
  },
];

export default function Testimonial01({ module }) {
  const metaData = module?.metaData || {
    miniTitle: "2. Testimonials",
    title: "What our clients says about us;",
    subtitle:
      "Everything we do is focused on generating more qualified cases for your law firm.",
  };
  return (
    <Section sectionData={metaData}>
      <Testimonial01Inner testimonials={defaultTestimonials} />
      <BrandSlider brandList={brandList} />
    </Section>
  );
}
