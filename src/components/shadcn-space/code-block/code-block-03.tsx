import { CodeBlock } from "@/components/ui/code-block";

const code = `import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return <Button size="sm">Shadcn/ui</Button>
}`;

export default function CodeBlockCustomBg() {
  return (
    <div className="w-full max-w-lg">
      <CodeBlock
        code={code}
        filename="button.tsx"
        language="tsx"
        showLineNumbers
        bodyClassName="bg-blue-500/20"
      />
    </div>
  );
}
