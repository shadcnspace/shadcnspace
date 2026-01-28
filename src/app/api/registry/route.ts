import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";
import { blocks } from "@/config/registry/blocks";
import { components } from "@/config/registry/components";

const blockItems = blocks.map(
  ({
    name,
    title,
    description,
    type,
    dependencies = [],
    registryDependencies = [],
    files = [],
  }) => ({
    name,
    title,
    description,
    type,
    dependencies,
    registryDependencies,
    files,
  })
);

const componentItems = components.map(
  ({
    name,
    title,
    description,
    type,
    dependencies = [],
    registryDependencies = [],
    files = [],
  }) => ({
    name,
    title,
    description,
    type,
    dependencies,
    registryDependencies,
    files,
  })
);
export async function GET() {
  const schema = "https://ui.shadcn.com/schema/registry.json";
  const homepage = "https://shadcnspace.com";

  const registry = {
    $schema: schema,
    name: "Shadcn Space",
    homepage,
    items: [...blockItems, ...componentItems],
  };

  const outputPath = path.resolve("./registry.json");
  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));

  return NextResponse.json(
    { message: "Registry generated successfully" },
    { status: 200 }
  );
}
