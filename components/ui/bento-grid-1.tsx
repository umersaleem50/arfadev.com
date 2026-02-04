import { BentoGrid, BentoItem } from "@/components/ui/bento-grid-template-one";
import Section from "../section";

function CTABento() {
  const items: BentoItem[] = [
    // {
    //   id: "1",
    //   type: "chat",
    //   content: <ChatMessaging />,
    // },
    // {
    //   id: "3",
    //   type: "partners",
    //   title: "Connected Everywhere",
    //   description:
    //     "Embed your work seamlessly across your favorite platforms for instant sharing.",
    //   content: <p>Testing</p>,
    // },
    {
      id: "2",
      type: "feature",
      title: "Launch Your App with Impact",
      description: "If you're interested, contact now to get started!",
      image: "/assets/dashboard.jpg",
    },
  ];

  return (
    <Section fullWidth>
      <BentoGrid items={items} />
    </Section>
  );
}
export default CTABento;
