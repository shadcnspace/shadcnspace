"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Error";

const FeedbackTextarea = () => {
  const [feedback, setFeedback] = useState("Awesome product!");
  const isInvalid = feedback.length > 0 && feedback.length < 10;

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea
        aria-invalid={isInvalid}
        className="bg-background"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        id="feedback"
        placeholder="Share your feedback here"
      />
      {isInvalid ? (
        <p className="text-sm text-destructive" role="alert">
          Feedback must be at least 10 characters.
        </p>
      ) : (
        feedback.length >= 10 && (
          <p className="text-sm text-teal-400">
            Looks good!
          </p>
        )
      )}
    </div>
  );
};

export default FeedbackTextarea;
