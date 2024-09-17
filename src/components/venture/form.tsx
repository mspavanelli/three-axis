"use client";

import { Plus } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useVentureForm } from "@/hooks/use-venture-form";

import { Button } from "../ui/button";

export function VentureForm() {
  const { form, onSubmit } = useVentureForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-end"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-[2]">
              <FormLabel htmlFor={field.name}>Venture</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="structure"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel htmlFor={field.name}>Structure</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="platform">Platform</SelectItem>
                    <SelectItem value="post-digital">Post Digital</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="interface"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel htmlFor={field.name}>Interface</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-digital">Non Digital</SelectItem>
                    <SelectItem value="digitally-translated">
                      Digitally Translated
                    </SelectItem>
                    <SelectItem value="digitally-designed">
                      Digitally Designed
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="tangibility"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel htmlFor={field.name}>Tangibility</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="presence">Presence</SelectItem>
                    <SelectItem value="tangible">Tangible</SelectItem>
                    <SelectItem value="intangible">Intangible</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="outline" className="size-9 p-0">
          <Plus className="size-4" />
        </Button>
      </form>
    </Form>
  );
}
