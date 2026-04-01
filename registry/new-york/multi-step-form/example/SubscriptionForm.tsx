import { Button } from "@/components/ui/button";
import { Euro } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import MultiStepForm from "../MultiStepForm";
import { MultiFormStep } from "../types";
import SubscriptionBasicDetails from "./form/SubscriptionBasicDetails";
import SubscriptionPriceDetails from "./form/SubscriptionPriceDetails";
import {
  Subscription,
  subscriptionDetailsSchema,
  subscriptionPriceSchema,
} from "./validators/subscription.validator";

const SubscriptionSteps: MultiFormStep<Subscription>[] = [
  {
    title: "Subscription Details",
    component: <SubscriptionBasicDetails />,
    position: 1,
    validationSchema: subscriptionDetailsSchema,
    description: "Please provide details for your subscription.",
    fields: ["id", "name", "subscription_type"],
    icon: Euro,
  },
  {
    title: "Subscription Price",
    component: <SubscriptionPriceDetails />,
    position: 2,
    validationSchema: subscriptionPriceSchema,
    description: "Please select pricing for your subscription.",
    fields: ["price", "currency", "active_duration", "description"],
    icon: Euro,
  },
];

function SubscriptionForm({ data }: { data?: Subscription }) {
  const [isLoading, setIsLoading] = useState(false);
  function handleOnSubmit(payload: Subscription) {
    // Mutate or Save data in database via API endpoint
    toast("Your subscription data", {
      description: <code>{JSON.stringify(payload)}</code>,
    });
  }

  return (
    <MultiStepForm<Subscription>
      onSubmit={handleOnSubmit}
      localStorageKey="new-subscription"
      steps={SubscriptionSteps}
      isLoading={isLoading} //use loading from fetch request to show a spinner
      data={data}
    >
      <Button>New Subscription</Button>
    </MultiStepForm>
  );
}

export default SubscriptionForm;
