"use client"

import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function Invalid() {
  const [value, setValue] = useState("")

  const isInvalid = value !== "" && !/^\d+$/.test(value)

  return (
    <Field className="w-fit" data-invalid={isInvalid}>
      <FieldLabel htmlFor="otp-invalid">Invalid OTP State ( Number only )</FieldLabel>
      <InputOTP
        id="otp-invalid"
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid={isInvalid} />
          <InputOTPSlot index={1} aria-invalid={isInvalid} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} aria-invalid={isInvalid} />
          <InputOTPSlot index={3} aria-invalid={isInvalid} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} aria-invalid={isInvalid} />
          <InputOTPSlot index={5} aria-invalid={isInvalid} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
