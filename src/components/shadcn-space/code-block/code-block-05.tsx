import { MultiFileCodeBlock } from "@/components/ui/code-block";
import type { FileEntry } from "@/components/ui/code-block";

const files: FileEntry[] = [
  {
    filename: "avatar.tsx",
    language: "tsx",
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarComponent() {
  return (
    <Avatar>
      <AvatarImage src="https://images.shadcnspace.com/assets/profiles/ben.webp" />
      <AvatarFallback className="text-xs">B</AvatarFallback>
    </Avatar>
  )
}`,
  },
  {
    filename: "button.tsx",
    language: "tsx",
    code: `import { Button } from "@/components/ui/button"

export default function ButtonComponent() {
  return (
    <Button variant="outline" size="sm">
      Shadcn Space
    </Button>
  )
}`,
  },
];

export default function CodeBlockMultiFile() {
  return (
    <div className="w-full max-w-lg">
      <MultiFileCodeBlock
        files={files}
        showLineNumbers
        scrollable
        maxHeight={260}
      />
    </div>
  );
}
