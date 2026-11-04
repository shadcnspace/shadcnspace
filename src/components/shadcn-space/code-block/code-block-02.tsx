import { CodeBlock } from "@/components/ui/code-block";

const code = `import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MiniCard() {
  return (
    <Card className="w-60 p-4">
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">Random number</p>
        <p className="text-2xl font-bold">
          {Math.random().toFixed(4)}
        </p>
        <Button size="sm" variant="outline">
          Regenerate
        </Button>
      </CardContent>
    </Card>
  )
}`;

export default function CodeBlockScrollable() {
  return (
    <div className="w-full max-w-lg">
      <CodeBlock
        code={code}
        filename="number-generator.tsx"
        language="tsx"
        showLineNumbers
        scrollable
        maxHeight={260}
      />
    </div>
  );
}
