import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ item: string }> }
) {
    try {
        const { item } = await params;
        const component = item.replace(/\.json$/, "");

        const filePath = path.join(
            process.cwd(),
            "src",
            "r",
            `${component}.json`
        );

        const content = fs.readFileSync(filePath, "utf-8");

        return new NextResponse(content, {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
