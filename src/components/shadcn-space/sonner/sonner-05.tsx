'use client'

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, GitBranch, Settings } from 'lucide-react'

const ToastComponent = () => {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-popover/95 backdrop-blur-md text-popover-foreground border-border rounded-2xl flex w-89 flex-col gap-3.5 border p-4 shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="rounded-lg flex size-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
            <GitBranch className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <p className="text-sm font-semibold tracking-tight">Repository Synced</p>
            <p className="text-muted-foreground/80 text-xs font-medium">github.com/shadcn-space/pro</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] text-teal-400 font-semibold border border-teal-400/20 uppercase tracking-wider">
            <span className="size-1 rounded-full bg-teal-400 animate-pulse" />
            Active
          </span>
        </div>
        <Separator className="bg-border/50" />
        <div className="text-muted-foreground/80 flex items-center justify-between text-xs font-medium px-0.5">
          <span className="flex items-center gap-1">
            <span className="font-semibold text-foreground">main</span> branch
          </span>
          <span>Last sync: 2m ago</span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer h-9 text-xs gap-1.5"
            onClick={() => toast.dismiss()}
          >
            <Settings className="size-3.5" aria-hidden="true" />
            Configure
          </Button>
          <Button 
            className="flex-1 cursor-pointer h-9 text-xs gap-1.5 hover:bg-primary/80" 
            onClick={() => toast.dismiss()}
          >
            <ExternalLink className="size-3.5" aria-hidden="true" />
            Open Repo
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit cursor-pointer">
        Sync Status Toast
      </Button>
    </div>
  )
}

export default ToastComponent

