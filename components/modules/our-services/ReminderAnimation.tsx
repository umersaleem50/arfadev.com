"use client";
import {
  AlertTriangle,
  BarChart3,
  Check,
  FormInput,
  LucideIcon,
  Route,
  ScanSearch,
  ShieldAlert,
  TextSearch,
  Waypoints,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Item = {
  id: string;
  title: string;
  icon: LucideIcon;
  endIcon?: LucideIcon;
};

const DATA: Item[] = [
  {
    id: "1",
    title: "New Row Inserted",
    icon: Route,
  },
  {
    id: "2",
    title: "Stripe Webhook",
    icon: TextSearch,
  },
  {
    id: "3",
    title: "Database Transaction",
    icon: ScanSearch,
  },
  {
    id: "4",
    title: "New User inserted",
    icon: FormInput,
  },
  {
    id: "5",
    title: "Matrics and Analytics",
    icon: BarChart3,
  },
  {
    id: "6",
    title: "Delete Subscriptions",
    icon: Waypoints,
    endIcon: AlertTriangle,
  },
  {
    id: "7",
    title: "Update Subscription",
    icon: BarChart3,
    endIcon: ShieldAlert,
  },
];

export default function ReminderCarousel() {
  const [visible, setVisible] = useState<Item[]>(DATA.slice(0, 3));
  const [pointer, setPointer] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => {
        const nextIndex = (pointer + 1) % DATA.length;
        setPointer(nextIndex);
        return [...prev.slice(1), DATA[nextIndex]];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [pointer]);

  return (
    <div className="relative flex flex-col items-center rounded-2xl h-52 w-full overflow-hidden">
      <AnimatePresence initial={false}>
        {visible.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ y: 215, opacity: 0, scale: 0.9 }}
            animate={{
              y: i * 70,
              scale: i === 1 ? 1 : 0.9,
              opacity: i === 1 ? 1 : 0.5,
            }}
            exit={{ y: -100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute flex items-center justify-between w-full px-5 py-4 rounded-xl bg-background border border-border text-card-foreground"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <item.icon size={20} />
                <span className="text-sm font-medium font-sans">
                  {item.title}
                </span>
              </div>
              {item.endIcon ? (
                <item.endIcon size={20} className="stroke-red-300" />
              ) : (
                <Check size={20} className="stroke-green-500" />
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
