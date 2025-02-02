import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";

import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import Typography from "@/components/Typography";
import { REG_EMAIL } from "@/constants/regex";

interface EmailForm {
  email: string;
}

export default function EmailForm() {
  const methods = useForm<EmailForm>({
    mode: "onTouched",
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: EmailForm) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="input w-full flex flex-col gap-2.5 justify-center items-center"
      >
        <Input
          id="email"
          label="Input Your Email"
          className="w-full rounded-lg border-1 border-[#BBBCBF] p-2 placeholder:font-normal"
          placeholder="Masukkan Email"
          validation={{
            required: "Email tidak boleh kosong!",
            pattern: {
              value: REG_EMAIL,
              message: "Email tidak valid!",
            },
          }}
        />
        <Button
          type="submit"
          variant="green"
          className="w-full rounded-lg py-2"
        >
          <Typography variant="p" className="text-white text-[10px]">
            Continue
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
