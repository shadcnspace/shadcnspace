"use client";
import { useId, useState } from "react";

import { SendHorizonalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils'

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

const InputEndInlineButtonDemo = () => {
  const id = useId();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setError("");
    setSuccess("");

    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setSuccess("Email sent successfully !");
    setEmail("");
  };

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Input with end inline button</Label>
      <div className="relative">
        <Input
          id={id}
          type='email'
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            'pr-9',
            error && 'border-destructive focus-visible:ring-destructive'
          )}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSubmit}
          className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
        >
          <SendHorizonalIcon className="text-sky-400" />
          <span className="sr-only">Subscribe</span>
        </Button>
      </div>
      {success && <p className="text-sm text-emerald-500">{success}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputEndInlineButtonDemo;
