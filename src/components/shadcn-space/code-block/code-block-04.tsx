import { CodeBlock } from "@/components/ui/code-block";

const code = `import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return <Button variant="outline">Shadcnspace</Button>
}`;

export default function CodeBlockHighlighted() {
  return (
    <div className="w-full max-w-lg">
      <CodeBlock
        code={code}
        filename="button.tsx"
        language="tsx"
        showLineNumbers
        highlightLines={[4]}
      />
    </div>
  );
}
