"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { createFormSchema } from "@/lib/form-helpers";
import useFormSchema from "@/hooks/use-form-schema";

// const formSchema = z.object({
//   email: z
//     .string()
//     .min(1, {
//       message: "Please provide your valid business email.",
//     })
//     .email("Please provide your valid business email."),
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   city: z.string(),
//   country: z.string().min(1, "Please select a country"),
//   services: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one item.",
//   }),
//   description: z.string().min(1, "Please tell us about your lawfirm."),
// });

export interface IFormComponent {
  className?: string;
  module: any;
}

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

const items = [
  {
    id: "web-design",
    label: "Web Designing",
  },
  {
    id: "web-development",
    label: "Web Development",
  },
  {
    id: "branding",
    label: "Law firm Branding",
  },
  {
    id: "seo",
    label: "SEO / Ranking",
  },
  {
    id: "other",
    label: "Other Services",
  },
] as const;

const getInputComponent = ({
  type,
  field,
  placeholder,
}: {
  type: string;
  field: any;
  placeholder: string;
}) => {
  switch (type) {
    case "submit":
      return null;

    case "textarea":
      return (
        <Textarea
          placeholder={placeholder}
          className="resize-none placeholder:text-muted-foreground"
          {...field}
        />
      );

    default:
      return <Input placeholder={placeholder} {...field} />;
  }
};

export function FormComponent({ module, className }: IFormComponent) {
  const { title = "", form: inputs = [], info = "" } = module;

  const { defaultValues, formSchema } = useFormSchema(inputs);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(values["email"]);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4 p-8 border-border border bg-card", className)}
      >
        {/* <p className="font-sans font-normal text-sm">Recommended Solution</p> */}
        <h3 className="font-serif font-medium text-3xl">{title}</h3>
        {inputs.map(
          (
            {
              label,
              placeholder,
              type,
            }: { label: string; placeholder: string; type: string },
            key: number
          ) => {
            return (
              <FormField
                key={key}
                control={form.control}
                name={label}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      {getInputComponent({ type, placeholder, field })}
                    </FormControl>
                    <FormDescription>
                      Only provide you business email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          }
        )}
        {/* <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your City</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Services</FormLabel>
                <FormDescription>
                  Please select the services you would like to have.
                </FormDescription>
              </div>
              {items.map((item: any) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="services"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked: boolean) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell Us More</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide a much details as you want.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button className="w-full" type="submit">
          Make Appointment
        </Button>
      </form>
    </Form>
  );
}
