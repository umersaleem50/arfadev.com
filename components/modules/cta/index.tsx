import { BentoGrid, BentoItem } from "@/components/modules/cta/bento-grid";

function CTASection() {
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
      title: "Send us Email to get started!",
      description: "And leave the rest on us!",
      image: "/assets/dashboard.png",
    },
  ];

  return (
    // <Section fullWidth className="my-0!">
    <BentoGrid items={items} />
    // </Section>
  );
}
export default CTASection;
