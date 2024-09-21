import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/Button";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/Label";
import HookFormWrapper from "~/components/wrappers/HookFormWrapper";
import InputHF from "~/components/wrappers/InputHF";
import { cn } from "~/lib/utils";

export interface SignInFormProps
  extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: (data: Record<string, string>) => void;
}

const SignInForm = ({ className, onSubmit, ...props }: SignInFormProps) => {
  return (
    <HookFormWrapper
      className={cn("space-y-3.5 p-6 rounded-lg bg-white", className)}
      onSubmitCustom={onSubmit}
      {...props}
    >
      <header className="space-y-1 grid">
        {/* <LogoIcon className="mx-auto h-12 mb-5" /> */}
        <h2 className="text-3xl font-bold">Sign In</h2>
        <p className="text-sm hidden">
          Don&apos;t have an account?
          <Link to="auth/sign-up" className="font-medium text-primary">
            Sign Up
          </Link>
        </p>
      </header>
      <InputHF label="Email" name="email" type="email" />
      <InputHF label="Password" name="password" type="password" />
      <div className="flex items-center space-x-2 py-1">
        <Checkbox id="remember" name="rememberMe" />
        <Label htmlFor="remember">Remember me</Label>
        <div className="flex-grow" />
        <Link
          to="auth/forgot-password"
          className="text-sm font-medium text-primary"
        >
          Forgot Password?
        </Link>
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </HookFormWrapper>
  );
};

export default SignInForm;
