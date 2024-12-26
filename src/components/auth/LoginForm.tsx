import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "@/lib/firebase/auth";
import { Button } from "@/components/ui/button";
import { loginFormSchema } from "@/lib/validations/auth";
import { FormField } from "./FormField";
import { FormLayout } from "./FormLayout";

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    try {
      setIsLoading(true);
      const { user, error } = await signIn(values.email, values.password);

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
          description: "You have successfully logged in.",
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
        placeholder="Enter your password"
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </FormLayout>
  );
}