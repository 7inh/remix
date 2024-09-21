import { useFetcher } from "@remix-run/react";
import SignInForm from "~/components/ui/SignInForm";
import { jsonToFormData } from "~/lib/utils";

const SignIn = () => {
  const fetcher = useFetcher();

  return (
    <SignInForm
      className="max-w-sm shrink-0 w-full"
      onSubmit={(data) => {
        const formData = jsonToFormData(data);
        fetcher.submit(formData, {
          method: "POST",
        });
      }}
      fetcherState={fetcher.state}
    />
  );
};

export default SignIn;
