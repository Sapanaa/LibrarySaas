"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, useForm, UseFormReturn, FieldValues, SubmitHandler } from "react-hook-form"
import { z, ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from "react"
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";



interface Props<T extends FieldValues> {
  schema: ZodType<T>
  defaultVal: DefaultValues<T>
  type: "sign-in" | "sign-up"
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultVal,
  type,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "sign-in"

  const form: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultVal,
  })

 

  const handleSubmit: SubmitHandler<T> = async (data) => {
    console.log(data)
  }

  return (
     <div className="bg-[#111827] text-white max-w-md mx-auto p-8 rounded-2xl shadow-lg">
      <div className="mb-6">
        
        <p className="text-gray-400 mt-2">
          Please complete all fields and upload a valid university ID to gain access to the library
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">

          {Object.keys(defaultVal).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as  Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                  <FormControl>
                     <Input required type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} />
                    
                   
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          
         

          

          <Button type="submit" className="w-full bg-orange-400 text-black font-semibold hover:bg-yellow-300">
            {isSignIn ? "Login" : "Sign Up"}
          </Button>

        </form>
      </Form>

      <p className="mt-6 text-center text-sm text-gray-400">
        {isSignIn
          ? "Don't have an account? "
          : "Already have an account? "}
        <a href={isSignIn ? "/sign-up" : "/sign-in"} className="text-orange-400 hover:underline">
          {isSignIn ? "Sign Up" : "Sign In"}
        </a>
      </p>
    </div>
  )
}

export default AuthForm
