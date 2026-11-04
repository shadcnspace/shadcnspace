"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ImageUpIcon, Trash2Icon } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

type Profile = {
  name: string;
  username: string;
  bio: string;
  avatar: string | null;
};

const BIO_LIMIT = 160;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";

export default function Dialog09() {
  const [profile, setProfile] = useState<Profile>({
    name: "Jane Cooper",
    username: "janecooper",
    bio: "Product designer building calm, accessible interfaces.",
    avatar: null,
  });
  const [draft, setDraft] = useState<Profile>(profile);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  useEffect(() => {
    if (!saving) return;
    const timeout = setTimeout(() => {
      setProfile(draft);
      setSaving(false);
      setOpen(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [saving, draft]);

  const handleOpenChange = (next: boolean) => {
    if (saving) return;
    if (next) setDraft(profile);
    setOpen(next);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setDraft((prev) => ({ ...prev, avatar: reader.result as string }));
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const isValid = draft.name.trim() && /^[a-z0-9_]{3,20}$/.test(draft.username);

  return (
    <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-border bg-background p-3">
      <Avatar size="lg">
        {profile.avatar && <AvatarImage src={profile.avatar} alt="" />}
        <AvatarFallback>{getInitials(profile.name)}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{profile.name}</p>
        <p className="truncate text-xs text-muted-foreground">@{profile.username}</p>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger render={<Button variant="outline" size="sm" className="cursor-pointer" />}>
          Edit profile
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (isValid) setSaving(true);
            }}
            className="grid gap-4"
          >
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Update your photo and personal details. Changes are visible to
                your team.
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4">
              <Avatar className="size-16">
                {draft.avatar && <AvatarImage src={draft.avatar} alt="Profile photo preview" />}
                <AvatarFallback className="text-lg">{getInitials(draft.name)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-wrap gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer"
                >
                  <ImageUpIcon data-icon="inline-start" />
                  Change photo
                </Button>
                {draft.avatar && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setDraft((prev) => ({ ...prev, avatar: null }))}
                    className="cursor-pointer text-muted-foreground"
                  >
                    <Trash2Icon data-icon="inline-start" />
                    Remove
                  </Button>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${id}-name`}>Name</Label>
              <Input
                id={`${id}-name`}
                value={draft.name}
                onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
                aria-invalid={!draft.name.trim() || undefined}
                autoComplete="name"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${id}-username`}>Username</Label>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-muted-foreground"
                >
                  @
                </span>
                <Input
                  id={`${id}-username`}
                  value={draft.username}
                  onChange={(event) =>
                    setDraft((prev) => ({ ...prev, username: event.target.value.toLowerCase() }))
                  }
                  aria-invalid={!/^[a-z0-9_]{3,20}$/.test(draft.username) || undefined}
                  aria-describedby={`${id}-username-hint`}
                  spellCheck={false}
                  className="pl-7"
                />
              </div>
              <p id={`${id}-username-hint`} className="text-xs text-muted-foreground">
                3 to 20 lowercase letters, numbers, or underscores.
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${id}-bio`}>Bio</Label>
              <Textarea
                id={`${id}-bio`}
                value={draft.bio}
                maxLength={BIO_LIMIT}
                onChange={(event) => setDraft((prev) => ({ ...prev, bio: event.target.value }))}
                aria-describedby={`${id}-bio-count`}
                className="min-h-20 resize-none"
              />
              <p
                id={`${id}-bio-count`}
                className="text-right text-xs text-muted-foreground tabular-nums"
              >
                {draft.bio.length}/{BIO_LIMIT}
              </p>
            </div>

            <DialogFooter>
              <DialogClose
                render={<Button type="button" variant="outline" className="cursor-pointer" />}
                disabled={saving}
              >
                Cancel
              </DialogClose>
              <Button type="submit" disabled={!isValid || saving} className="cursor-pointer">
                {saving && <Spinner data-icon="inline-start" />}
                {saving ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
