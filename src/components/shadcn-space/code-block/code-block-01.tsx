import { CodeBlock } from "@/components/ui/code-block";

const code = `import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`;

export default function CodeBlockDefault() {
  return (
    <div className="w-full max-w-lg">
      <CodeBlock code={code} filename="index.tsx" language="tsx" />
    </div>
  );
}
