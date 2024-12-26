import { ReactNode } from "react";
import {
  FormControl,
  FormField as UIFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface FormFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  children?: ReactNode;
}

export function FormField({
  form,
  name,
  label,
  placeholder,
  type = "text",
  children,
}: FormFieldProps) {
  return (
    <UIFormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {children || (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                aria-label={label}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}