"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Camera, Trash2, Upload } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const MAX_SIZE_MB = 2;

const AvatarDemo = () => {
  const [preview, setPreview] = useState<string | null>(
    "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
  );
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const objectUrl = useRef<string | null>(null);

  // Release the blob URL when it is replaced or the component unmounts.
  const setObjectUrl = (url: string | null) => {
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = url;
  };

  useEffect(() => () => setObjectUrl(null), []);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image file.");
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Image must be under ${MAX_SIZE_MB} MB.`);
      return;
    }
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    setPreview(url);
    setError(null);
  };

  const remove = () => {
    setObjectUrl(null);
    setPreview(null);
    setError(null);
  };

  return (
    <div className="flex w-full max-w-sm items-center gap-4">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        aria-label="Change profile photo"
        className="group relative rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Avatar className="size-20">
          {preview && <AvatarImage src={preview} alt="Profile photo" />}
          <AvatarFallback className="bg-blue-500/15 text-xl font-medium text-foreground">JD</AvatarFallback>
        </Avatar>
        <span className="absolute inset-0 flex items-center justify-center rounded-full bg-gray-950/50 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
          <Camera className="size-5" aria-hidden="true" />
        </span>
      </button>

      <div className="flex flex-col gap-2">
        <div>
          <p className="text-sm font-medium text-foreground">Profile photo</p>
          <p className="text-xs text-muted-foreground">PNG, JPG or GIF, up to {MAX_SIZE_MB} MB.</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => inputRef.current?.click()}>
            <Upload />
            Upload
          </Button>
          {preview && (
            <Button size="sm" variant="ghost" onClick={remove}>
              <Trash2 />
              Remove
            </Button>
          )}
        </div>
        {error && (
          <p role="alert" className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>

      <input ref={inputRef} type="file" accept="image/*" className="sr-only" tabIndex={-1} aria-hidden="true" onChange={handleFile} />
    </div>
  );
};

export default AvatarDemo;
