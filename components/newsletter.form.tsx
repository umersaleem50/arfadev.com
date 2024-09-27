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

const newsLetterSchema = z.object({ email: z.string().email() });

function NewsLetterForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: { email: "" },
  });
  return (
    <Form {...form}>
      <form className={className}>
        <h3 className="text-3xl font-serif font-medium text-secondary">
          Subscribe to free newsletter
        </h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>You can unsubscribe anytime.</FormDescription>
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
