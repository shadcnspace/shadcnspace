'use client'

import { useId, useState } from 'react'

import { MailIcon, SparklesIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'proton.me']

const quickDomains = ['gmail.com', 'outlook.com', 'icloud.com']

const getQuickDomains = (email: string) => {
  const [local, domain, ...rest] = email.toLowerCase().split('@')
  if (!local || rest.length) return { local, domains: [] }
  if (domain === undefined) return { local, domains: quickDomains }
  return {
    local,
    domains: quickDomains.filter(candidate => candidate.startsWith(domain) && candidate !== domain)
  }
}

const distance = (a: string, b: string) => {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const current = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1))
      previous = current
    }
  }
  return row[b.length]
}

const getSuggestion = (email: string) => {
  const [local, domain] = email.toLowerCase().split('@')
  if (!local || !domain || !domain.includes('.') || commonDomains.includes(domain)) return null

  const match = commonDomains
    .map(candidate => ({ candidate, score: distance(domain, candidate) }))
    .sort((a, b) => a.score - b.score)[0]

  return match.score > 0 && match.score <= 2 ? `${local}@${match.candidate}` : null
}

const InputEmailSuggestionDemo = () => {
  const [email, setEmail] = useState('jane@gmial.com')
  const [dismissed, setDismissed] = useState<string | null>(null)

  const id = useId()
  const hintId = `${id}-hint`

  const suggestion = getSuggestion(email)
  const showSuggestion = suggestion && suggestion !== dismissed
  const quick = getQuickDomains(email)

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Email</Label>
      <div className='relative'>
        <MailIcon
          aria-hidden='true'
          className='text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2'
        />
        <Input
          id={id}
          type='email'
          placeholder='you@example.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-describedby={hintId}
          autoComplete='email'
          spellCheck={false}
          className='pl-8'
        />
      </div>

      <p aria-live='polite' className='sr-only'>
        {showSuggestion ? `Did you mean ${suggestion}?` : ''}
      </p>

      <div id={hintId}>
        {showSuggestion ? (
          <div className='flex items-center gap-2 rounded-md border border-border bg-muted/50 py-1.5 pr-1.5 pl-2.5 text-xs'>
            <SparklesIcon aria-hidden='true' className='size-3.5 shrink-0 text-amber-300' />
            <p className='min-w-0 flex-1 text-muted-foreground'>
              Did you mean{' '}
              <button
                type='button'
                onClick={() => setEmail(suggestion)}
                className='cursor-pointer rounded-sm font-medium text-foreground underline underline-offset-2 outline-none hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring/50'
              >
                {suggestion}
              </button>
              ?
            </p>
            <Button
              variant='ghost'
              size='icon-xs'
              onClick={() => setDismissed(suggestion)}
              aria-label='Dismiss suggestion'
              className='text-muted-foreground shrink-0 cursor-pointer'
            >
              <XIcon />
            </Button>
          </div>
        ) : quick.domains.length ? (
          <div className='flex flex-wrap items-center gap-1.5'>
            <span className='text-muted-foreground text-xs'>Quick fill:</span>
            {quick.domains.map(domain => (
              <Button
                key={domain}
                variant='outline'
                size='xs'
                onClick={() => setEmail(`${quick.local}@${domain}`)}
                aria-label={`Use ${quick.local}@${domain}`}
                className='cursor-pointer'
              >
                @{domain}
              </Button>
            ))}
          </div>
        ) : (
          <p className='text-muted-foreground text-xs'>We&apos;ll send a confirmation link to this address.</p>
        )}
      </div>
    </div>
  )
}

export default InputEmailSuggestionDemo
