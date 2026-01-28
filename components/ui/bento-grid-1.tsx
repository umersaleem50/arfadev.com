import {
  BentoGrid,
  BentoItem,
  ChatMessaging,
} from "@/components/ui/bento-grid-template-one";
import Section from "../section";

export function BentoGridOne({ module }: any) {
  const items: BentoItem[] = [
    {
      id: "1",
      type: "feature",
      title: "World-Class Information Design",
      description:
        "Transform complex data into crisp visuals that quickly tell your story.",
      image: "/assets/dashboard.jpg",
    },
    {
      id: "2",
      type: "chat",
      content: <ChatMessaging />,
    },
    {
      id: "3",
      type: "partners",
      title: "Connected Everywhere",
      description:
        "Embed your work seamlessly across your favorite platforms for instant sharing.",
      content: <p>Testing</p>,
    },
  ];

  return (
    <Section fullWidth>
      <BentoGrid items={items} />
    </Section>
  );
}
