"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { ZJoinRoom } from "@/lib/validation";

export function RoomJoiningForm() {
  const form = useForm<z.infer<typeof ZJoinRoom>>({
    resolver: zodResolver(ZJoinRoom),
    defaultValues: {
      username: "",
      roomId: "",
    },
  });

  function onSubmit(data: z.infer<typeof ZJoinRoom>) {
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
        <form id="form-join-room" onSubmit={form.handleSubmit(onSubmit)}>
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
              name="roomId"
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
                    placeholder="e.g. 3f8a2c4d-7b9e-4e5a-9c2f-1d6a8b0c5e73"
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
          form="form-join-room"
          type="submit"
          className="font-mono mt-5 w-full cursor-pointer"
        >
          Join Workspace
        </Button>
      </CardContent>
    </Card>
  );
}
