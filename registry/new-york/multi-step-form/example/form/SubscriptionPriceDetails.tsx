import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { useId } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Subscription } from "../validators/subscription.validator";

const CURRENCIES = [
  { name: "Pakistani Rupee", value: "pkr" },
  { name: "Great Britian Pounds", value: "pound" },
];

function SubscriptionPriceDetails() {
  const form = useFormContext<Subscription>();
  const inputId = useId();

  return (
    <>
      <Field>
        <FieldLabel>Price</FieldLabel>
        <FieldContent>
          <div className="flex rounded-md shadow-xs">
            <Controller
              control={form.control}
              name="currency"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-fit rounded-e-none text-muted-foreground shadow-none outline-none hover:text-foreground focus:outline-none">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Currency</SelectLabel>
                      {CURRENCIES.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />

            <Controller
              control={form.control}
              name="price"
              render={({ field, fieldState }) => (
                <>
                  <Input
                    {...field}
                    id={inputId}
                    className="-ms-px w-full rounded-s-none shadow-none focus-visible:z-10"
                    aria-invalid={fieldState.invalid}
                    type="number"
                  />
                  <FieldError errors={[fieldState.error]} />
                </>
              )}
            />
          </div>
        </FieldContent>

        {/* Access errors directly from the form state for reliability */}
        <FieldError errors={[form.formState.errors.price]} />
        <FieldError errors={[form.formState.errors.currency]} />
      </Field>

      {form.watch("subscription_type") === "recurring" && (
        <Controller
          control={form.control}
          name="active_duration"
          rules={
            form.watch("subscription_type") === "recurring"
              ? {
                  required: "Please provide active duration for subscription.",
                  min: "Duration should be greater than 1 day.",
                }
              : { required: false }
          }
          render={({ field, fieldState }) => {
            return (
              <Field>
                <FieldLabel htmlFor="active_duration">
                  Active Duration
                </FieldLabel>
                <FieldContent>
                  <Input
                    {...field}
                    type="number"
                    min={1}
                    aria-invalid={fieldState.invalid}
                  />
                </FieldContent>
                <FieldError errors={[fieldState.error]} />
              </Field>
            );
          }}
        />
      )}

      <Controller
        control={form.control}
        name="description"
        rules={{ required: "Please provide description." }}
        render={({ field, fieldState }) => {
          return (
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <FieldContent>
                <Textarea
                  {...field}
                  placeholder="Provide more details about plan"
                  maxLength={255}
                  rows={4}
                  id="description"
                  aria-invalid={fieldState.invalid}
                />
              </FieldContent>
              <FieldError errors={[fieldState.error]} />
            </Field>
          );
        }}
      />
    </>
  );
}

export default SubscriptionPriceDetails;
