"use client";
import { useId, useState } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from '@/components/ui/select'

const SelectProgrammingDemo = () => {
  const id = useId()
  const [value, setValue] = useState('React')

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Primary Tech Stack</Label>

      <Select value={value} onValueChange={(val) => val && setValue(val)}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="max-h-100 data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
          <SelectGroup>
            <SelectLabel>Frontend</SelectLabel>
            <SelectItem value="React">React</SelectItem>
            <SelectItem value="Next.js">Next.js</SelectItem>
            <SelectItem value="Vue.js">Vue.js</SelectItem>
            <SelectItem value="Svelte">Svelte</SelectItem>
            <SelectItem value="Angular">Angular</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Backend</SelectLabel>
            <SelectItem value="Node.js">Node.js</SelectItem>
            <SelectItem value="NestJS">NestJS</SelectItem>
            <SelectItem value="Django">Django</SelectItem>
            <SelectItem value="Spring Boot">Spring Boot</SelectItem>
            <SelectItem value="Laravel">Laravel</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
            <SelectItem value="TypeScript">TypeScript</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="Java">Java</SelectItem>
            <SelectItem value="Go">Go</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Databases</SelectLabel>
            <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
            <SelectItem value="MySQL">MySQL</SelectItem>
            <SelectItem value="MongoDB">MongoDB</SelectItem>
            <SelectItem value="Redis">Redis</SelectItem>
            <SelectItem value="Firebase">Firebase</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>DevOps & Tools</SelectLabel>
            <SelectItem value="Docker">Docker</SelectItem>
            <SelectItem value="Kubernetes">Kubernetes</SelectItem>
            <SelectItem value="GitHub Actions">GitHub Actions</SelectItem>
            <SelectItem value="Vercel">Vercel</SelectItem>
            <SelectItem value="AWS">AWS</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectProgrammingDemo
