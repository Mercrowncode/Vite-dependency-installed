import { ReactNode } from "react";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

interface FormLayoutProps {
  form: UseFormReturn<any>;
  onSubmit: (values: any) => Promise<void>;
  children: ReactNode;
}

export function FormLayout({ form, onSubmit, children }: FormLayoutProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {children}
      </form>
    </Form>
  );
}