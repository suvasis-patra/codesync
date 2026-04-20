"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ZCreateNewRoom } from "@/lib/validation";

export function RoomCreationForm() {
  const form = useForm<z.infer<typeof ZCreateNewRoom>>({
    resolver: zodResolver(ZCreateNewRoom),
    defaultValues: {
      username: "",
      roomName: "",
      primaryLanguage: "",
    },
  });

  function onSubmit(data: z.infer<typeof ZCreateNewRoom>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:min-w-100 mt-6 bg-[#15171C] text-white">
      <CardHeader>
        <CardTitle className="font-heading font-semibold text-xl">
          New Session
        </CardTitle>
        <CardDescription className="font-mono">
          Configure your collaborative environment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-create-room" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-username"
                    className="font-heading font-semibold"
                  >
                    Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-username"
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. dev@master_99"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="roomName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-roomname"
                    className="font-heading font-semibold"
                  >
                    Room Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-roomname"
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. critical-bug-fix"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="primaryLanguage"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-primary-language"
                    className="font-heading font-semibold"
                  >
                    Primary Language
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-primary-language"
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g javascript"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Button
          type="submit"
          form="form-create-room"
          className="font-mono mt-5 w-full cursor-pointer"
        >
          Create Workspace
        </Button>
      </CardContent>
    </Card>
  );
}
