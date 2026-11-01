"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  Cpu,
  Layers,
  Minus,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

interface FeatureRow {
  name: string;
  description?: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

interface FeatureSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  features: FeatureRow[];
}

const sections: FeatureSection[] = [
  {
    id: "core",
    title: "Core Primitives & Components",
    icon: Layers,
    features: [
      {
        name: "Shadcn UI Base Primitives",
        description: "Official Base UI and Radix headless primitives",
        starter: "40+ items",
        pro: "100+ items",
        enterprise: "Full Catalog",
      },
      {
        name: "Full-Page Marketing Templates",
        starter: "3 pages",
        pro: "Unlimited",
        enterprise: "Custom Dedicated",
      },
      {
        name: "Figma Community File Kit",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Tailwind CSS v4 & v3 Dual Support",
        starter: true,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    id: "tooling",
    title: "AI Integration & MCP Server",
    icon: Cpu,
    features: [
      {
        name: "Cursor / Windsurf MCP Server",
        starter: "Free tier rate limit",
        pro: "Unthrottled",
        enterprise: "Dedicated Endpoint",
      },
      {
        name: "One-Click CLI Add Tool",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Autonomous Agent Evaluators",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Private NPM Proxy & Registry",
        starter: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    id: "security",
    title: "Security, Governance & SLA",
    icon: ShieldCheck,
    features: [
      {
        name: "SOC2 Type II & GDPR Audit Trail",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Custom SSO & SAML Authentication",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Commercial Use Royalty Exemption",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Dedicated Engineering Support",
        starter: "Community",
        pro: "Priority (24h)",
        enterprise: "Dedicated (1h SLA)",
      },
    ],
  },
];

const renderValue = (val: boolean | string) => {
  if (typeof val === "boolean") {
    return val ? (
      <Check className="size-4 text-emerald-500 mx-auto" />
    ) : (
      <Minus className="size-4 text-muted-foreground/50 mx-auto" />
    );
  }
  return <span className="text-xs font-medium text-foreground">{val}</span>;
};

const AccordionFeatureMatrix = () => {
  const [openItems, setOpenItems] = useState<string[]>(["core", "tooling"]);

  return (
    <div className="w-full max-w-2xl mx-auto px-2 py-4">
      <div className="mb-6 space-y-1 text-center">
        <Badge variant="outline" className="gap-1.5 py-1 text-xs mx-auto">
          <Zap className="size-3 text-primary" />
          Feature Comparison
        </Badge>
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          Compare Plan Features & Capabilities
        </h3>
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          Deep dive into the technical capabilities, AI tooling limits, and enterprise safeguards across all tiers.
        </p>
      </div>

      {/* Plan Header Grid */}
      <div className="grid grid-cols-12 gap-2 pb-2 px-4 text-xs font-semibold border-b border-border text-muted-foreground">
        <div className="col-span-6 sm:col-span-5">Feature Category</div>
        <div className="col-span-2 text-center">Starter</div>
        <div className="col-span-2 text-center text-primary font-bold flex items-center justify-center gap-1">
          Pro
          <Sparkles className="size-2.5 text-primary" />
        </div>
        <div className="col-span-2 sm:col-span-3 text-center">Enterprise</div>
      </div>

      {/* Accordion Group */}
      <Accordion
        value={openItems}
        onValueChange={setOpenItems}
        className="divide-y divide-border/60"
      >
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <AccordionItem key={section.id} value={section.id} className="border-none py-1">
              <AccordionTrigger className="px-4 py-3 hover:no-underline cursor-pointer group">
                <div className="flex items-center gap-2.5 text-left">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </span>
                  <Badge variant="secondary" className="text-[10px] font-normal">
                    {section.features.length} specs
                  </Badge>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-2 pb-3 pt-1">
                <div className="rounded-xl border border-border/70 bg-card/60 overflow-hidden divide-y divide-border/40">
                  {section.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-12 gap-2 p-3 text-xs items-center hover:bg-muted/30 transition-colors"
                    >
                      <div className="col-span-6 sm:col-span-5 pr-2">
                        <p className="font-medium text-foreground leading-snug">
                          {feature.name}
                        </p>
                        {feature.description && (
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                            {feature.description}
                          </p>
                        )}
                      </div>

                      <div className="col-span-2 text-center text-muted-foreground">
                        {renderValue(feature.starter)}
                      </div>

                      <div className="col-span-2 text-center bg-primary/5 py-1.5 rounded-md">
                        {renderValue(feature.pro)}
                      </div>

                      <div className="col-span-2 sm:col-span-3 text-center">
                        {renderValue(feature.enterprise)}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="mt-5 p-3 rounded-xl border border-border/60 bg-muted/30 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Looking for custom seat volume or on-prem deployment?</span>
        <Button variant="outline" size="sm" className="h-7 text-xs">
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default AccordionFeatureMatrix;
