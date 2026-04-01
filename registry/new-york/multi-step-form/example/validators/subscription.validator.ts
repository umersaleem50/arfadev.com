import z from "zod";

export const subscriptionDetailsSchema = z.object({
  id: z.number().or(z.string()).optional(),
  subscription_type: z
    .enum(["recurring", "one-time"], {
      message: "Please select a subscription type.",
    })
    .optional()
    .default("recurring"),
  name: z
    .string()
    .min(1, "Provide name for subscription.")
    .max(255, "Keep name short."),
});

export const subscriptionPriceSchema = z.object({
  price: z.coerce.number().min(1, "Please provide price for subscription."),
  description: z
    .string()
    .min(1, { message: "Please provide a brief description." }),
  active_duration: z.coerce.number().optional(),
  currency: z.enum(["pkr", "usd", "pound", "euro"], {
    message: "Please select a currency",
  }),
});

export const subscriptionFormSchema = subscriptionDetailsSchema
  .merge(subscriptionPriceSchema)
  .superRefine((data, ctx) => {
    if (data.subscription_type && !data.active_duration) {
      ctx.addIssue({
        path: ["active_duration"],
        message: "Subscription duration is required for recurring plans.",
        code: "custom",
      });
    }
  });

export type Subscription = z.infer<typeof subscriptionFormSchema>;
