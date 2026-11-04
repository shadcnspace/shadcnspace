"use client";

import { useState } from "react";
import { Bell, Mail, Smartphone } from "lucide-react";

import { Switch } from "@/components/ui/switch";

const channels = [
  { id: "email", label: "Email", icon: Mail },
  { id: "push", label: "Push", icon: Bell },
  { id: "sms", label: "SMS", icon: Smartphone },
] as const;

type Channel = (typeof channels)[number]["id"];

const events = [
  { id: "comments", label: "Comments", description: "Replies and mentions" },
  { id: "assigned", label: "Assignments", description: "Tasks assigned to you" },
  { id: "billing", label: "Billing", description: "Invoices and payment issues" },
  { id: "security", label: "Security", description: "New sign-ins and password changes" },
];

type Matrix = Record<string, Record<Channel, boolean>>;

const initial: Matrix = {
  comments: { email: true, push: true, sms: false },
  assigned: { email: true, push: false, sms: false },
  billing: { email: true, push: false, sms: false },
  security: { email: true, push: true, sms: true },
};

const SwitchDemo = () => {
  const [matrix, setMatrix] = useState(initial);

  const toggle = (event: string, channel: Channel, value: boolean) =>
    setMatrix((current) => ({ ...current, [event]: { ...current[event], [channel]: value } }));

  const setColumn = (channel: Channel, value: boolean) =>
    setMatrix((current) =>
      Object.fromEntries(Object.entries(current).map(([key, row]) => [key, { ...row, [channel]: value }])),
    );

  const columnOn = (channel: Channel) => events.every((event) => matrix[event.id][channel]);

  return (
    <div className="w-full max-w-lg overflow-x-auto rounded-lg border border-border bg-background">
      <table className="w-full text-sm">
        <caption className="sr-only">Notification preferences by channel</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="px-4 py-3 text-left font-medium text-foreground">
              Notify me about
            </th>
            {channels.map((channel) => (
              <th key={channel.id} scope="col" className="w-20 px-2 py-3 font-medium text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                  <span className="flex items-center gap-1.5">
                    <channel.icon className="size-3.5" aria-hidden="true" />
                    {channel.label}
                  </span>
                  <Switch
                    size="sm"
                    checked={columnOn(channel.id)}
                    onCheckedChange={(value) => setColumn(channel.id, value)}
                    aria-label={`All ${channel.label} notifications`}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {events.map((event) => (
            <tr key={event.id}>
              <th scope="row" className="px-4 py-3 text-left font-normal">
                <span className="block text-foreground">{event.label}</span>
                <span className="block text-xs text-muted-foreground">{event.description}</span>
              </th>
              {channels.map((channel) => (
                <td key={channel.id} className="px-2 py-3 text-center">
                  <Switch
                    checked={matrix[event.id][channel.id]}
                    onCheckedChange={(value) => toggle(event.id, channel.id, value)}
                    aria-label={`${event.label} by ${channel.label}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SwitchDemo;
