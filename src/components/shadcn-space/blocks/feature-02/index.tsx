"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import {
    Box,
    CirclePlay,
    CodeXml,
} from "lucide-react"

const featureData = [
    {
      icon: Box,
      title: "Streamline your international payroll.",
      content: "Launch faster with modular tools that automate workflows, centralize data, and scale securely, helping teams build, deploy, and manage products.",
    },
    {
      icon: CirclePlay,
      title: "Easily track your spend and growth analytics.",
      content: "Power your business with real-time analytics, seamless integrations, and cloud-ready architecture designed to reduce costs, boost productivity.",
    },
    {
      icon: CodeXml,
      title: "Build better products in half the time.",
      content: "All-in-one SaaS platform offering automation, collaboration, and performance monitoring so growing teams can optimize operations.",
    }
];

const Feature02 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature02;
