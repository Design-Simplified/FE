import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";

import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import Typography from "@/components/Typography";
import { REG_EMAIL } from "@/constants/regex";
import { useEmailMutation } from "../../hooks/LoginEmail";

interface EmailForm {
  email: string;
  state: string;
}

export default function EmailForm({
  setDoneEmail,
  state,
}: {
  setDoneEmail: React.Dispatch<React.SetStateAction<boolean>>;
  state: string;
}): JSX.Element {
  const methods = useForm<EmailForm>({
    mode: "onTouched",
  });

  const { handleSubmit } = methods;
  const { handleLoginEmail } = useEmailMutation();
  const onSubmit = async (data: EmailForm) => {
    data.state = state;
    setDoneEmail(true);
    await handleLoginEmail(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="input w-full flex flex-col gap-2.5 justify-center items-center"
      >
        <Input
          id="email"
          label="Input Your Email (personal or work)"
          labelClassName="xl:text-base lg:text-base md:text-sm"
          className="w-full rounded-lg border-2 border-[#BBBCBF] p-2 lg:p-3 sm:p-2.5 placeholder:font-normal xl:text-base lg:text-base md:text-sm placeholder:xl:text-base placeholder:lg:text-base placeholder:md:text-sm"
          placeholder="Input Your Email"
          validation={{
            required: "Email doesn't allow empty!",
            pattern: {
              value: REG_EMAIL,
              message: "Email not valid!",
            },
          }}
        />
        <Button
          onClick={() => setDoneEmail(true)}
          type="submit"
          variant="green"
          className="w-full rounded-lg py-2"
        >
          <Typography
            variant="p"
            className="text-white text-[10px] xl:text-base lg:text-base md:text-sm"
          >
            Continue
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
