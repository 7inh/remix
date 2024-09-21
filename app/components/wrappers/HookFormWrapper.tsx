/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { isRequestSuccessful } from "~/lib/utils";

interface HookFormWrapperProps<T extends FieldValues, P = T>
  extends React.HTMLAttributes<HTMLFormElement> {
  ref?: React.Ref<HTMLFormElement>;
  children?: React.ReactNode;
  formId?: string;
  validate?: (data: T) => boolean;
  mutateAsyncFn?: (params: P) => Promise<any>;
  mapDataToParams?: (data: T) => P;
  onSuccessful?: (data: any) => void;
  onError?: (error: any) => void;
  onSubmitCustom?: (data: T) => void;
}

const HookFormWrapper = <T extends FieldValues, P = T>({
  children,
  validate,
  onChange,
  mutateAsyncFn,
  onSuccessful,
  mapDataToParams,
  onSubmitCustom,
  onError,
  formId,
  ref,
  className,
  ...rest
}: HookFormWrapperProps<T, P>) => {
  const methods = useForm<T>();
  const { handleSubmit } = methods;

  const onSubmit = useCallback(
    async (data: any) => {
      if (!mutateAsyncFn) {
        return;
      }

      if (validate && !validate(data)) {
        return;
      }

      const mappedData = mapDataToParams ? mapDataToParams(data) : data;

      const response: any = await mutateAsyncFn?.(mappedData);

      if (isRequestSuccessful(response)) {
        onSuccessful?.(response.data?.data);
      } else {
        onError?.(response?.response?.data?.detail);
      }
    },
    [mapDataToParams, mutateAsyncFn, onError, onSuccessful, validate]
  );

  return (
    <FormProvider {...methods}>
      <form
        ref={ref}
        className={className}
        onChange={onChange}
        onSubmit={handleSubmit(onSubmitCustom ? onSubmitCustom : onSubmit)}
        {...(formId ? { id: formId } : {})}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default HookFormWrapper;
