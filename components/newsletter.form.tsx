"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const newsLetterSchema = z.object({
  email: z.string().min(1).email("Please enter a valid email."),
});

function NewsLetterForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: { email: "" },
  });
  return (
    <Form {...form}>
      <form className={cn(className, "space-y-2")}>
        <h3 className="text-3xl font-serif font-medium text-secondary">
          Subscribe to free newsletter
        </h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-muted dark:text-muted"}>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  // className={dark ? "border border-input !bg-none" : ""}
                  className={
                    "bg-foreground text-secondary border-secondary border placeholder:text-accent"
                  }
                />
              </FormControl>
              <FormDescription className={"text-muted dark:text-muted"}>
                You can unsubscribe anytime.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" variant={"secondary"} type="submit">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}

export default NewsLetterForm;
