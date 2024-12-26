import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { signUp } from "@/lib/firebase/auth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { signUpFormSchema } from "@/lib/validations/auth";
import { FormField } from "./FormField";
import { FormLayout } from "./FormLayout";

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

interface SignUpFormProps {
  onSuccess: () => void;
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      terms: false,
    },
  });

  async function onSubmit(values: SignUpFormValues) {
    try {
      setIsLoading(true);
      const { user, error } = await signUp(values.email, values.password, {
        name: values.name,
        phone: values.phone,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
        return;
      }

      if (user) {
        toast({
          title: "Success",
          description: "Your account has been created successfully.",
        });
        form.reset();
        onSuccess();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FormLayout form={form} onSubmit={onSubmit}>
      <FormField
        form={form}
        name="name"
        label="Full Name"
        placeholder="John Doe"
      />
      <FormField
        form={form}
        name="email"
        label="Email"
        type="email"
        placeholder="email@example.com"
      />
      <FormField
        form={form}
        name="password"
        label="Password"
        type="password"
        placeholder="Create a password"
      />
      <FormField
        form={form}
        name="phone"
        label="Phone (Optional)"
        placeholder="+234 XXX XXX XXXX"
      />
      <FormField
        form={form}
        name="terms"
        label="I accept the terms and conditions"
      >
        <Checkbox
          checked={form.watch("terms")}
          onCheckedChange={(checked) =>
            form.setValue("terms", checked as boolean)
          }
        />
      </FormField>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </FormLayout>
  );
}