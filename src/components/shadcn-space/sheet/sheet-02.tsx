import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const SheetWithScrollableContentDemo = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant='outline' className='cursor-pointer' />}>Scrollable Content</SheetTrigger>
      <SheetContent initialFocus={false}>
        <ScrollArea className='h-full'>
          <SheetHeader>
            <SheetTitle>Terms &amp; Conditions</SheetTitle>
            <SheetDescription>Please read the terms and conditions carefully before proceeding.</SheetDescription>
          </SheetHeader>
          <div className='space-y-4 p-4 pt-0 text-sm text-muted-foreground'>
            <p className='text-xs text-muted-foreground'>Last Updated: June 1, 2025</p>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>1. Introduction</h3>
              <p>
                Welcome to our platform. These Terms and Conditions outline the rules and regulations for the use of our
                services. By accessing or using our services, you agree to comply with these terms. If you do not agree
                with any of these terms, please do not use our services.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>2. Acceptance of Terms</h3>
              <p>
                By using our services, you confirm that you have read, understood, and accepted these terms. You also
                agree to comply with any additional guidelines, policies, or rules that may apply to specific features of
                our services.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>3. Services Provided</h3>
              <p>
                We offer a range of digital services including but not limited to content creation, subscription
                services, and access to various online tools. We reserve the right to modify, suspend, or discontinue
                services at any time without prior notice.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>4. User Obligations</h3>
              <p>
                As a user, you agree to provide accurate and complete information when required and to keep it
                up-to-date. You are solely responsible for maintaining the confidentiality of your account credentials
                and for all activities conducted under your account.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>5. Prohibited Activities</h3>
              <p>You may not use our services for any unlawful activities, including but not limited to:</p>
              <ul className='ml-4 list-disc space-y-1'>
                <li>Distributing malicious content or viruses</li>
                <li>Engaging in illegal activities or fraud</li>
                <li>Impersonating another user or entity</li>
                <li>Harassing, threatening, or bullying other users</li>
                <li>Attempting to gain unauthorized access to our systems</li>
              </ul>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>6. Content Ownership</h3>
              <p>
                All content on our platform — including text, images, graphics, and software — is owned by us or our
                licensors and is protected under applicable copyright laws. You are granted a limited, non-exclusive,
                non-transferable license to access and use this content for personal or business purposes only.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>7. Privacy &amp; Data Protection</h3>
              <p>
                Your privacy matters to us. Please review our{' '}
                <a href='#' className='text-primary underline-offset-4 hover:underline'>
                  Privacy Policy
                </a>{' '}
                to understand how we collect, use, and safeguard your personal data in compliance with applicable
                privacy regulations.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>8. Payment Terms</h3>
              <p>
                Certain services are available for a fee. By subscribing or purchasing, you agree to pay all applicable
                charges. We reserve the right to update pricing at any time with reasonable notice provided to active
                subscribers.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>9. Termination</h3>
              <p>
                We reserve the right to suspend or terminate your account for violations of these Terms or conduct we
                deem inappropriate. Upon termination, your access will be revoked immediately and any outstanding
                balances will become due.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>10. Limitation of Liability</h3>
              <p>
                Our services are provided &quot;as is&quot; without warranties of any kind. We are not liable for any
                indirect, incidental, or consequential damages arising from your use of, or inability to use, our
                services.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>11. Governing Law</h3>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws of the jurisdiction in
                which our company is registered. Any disputes shall be subject to the exclusive jurisdiction of the
                courts in that jurisdiction.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>12. Changes to Terms</h3>
              <p>
                We may update these Terms at any time. Changes take effect immediately upon posting. It is your
                responsibility to review these terms periodically. Continued use of our services constitutes your
                acceptance of any revised terms.
              </p>
            </div>

            <div className='space-y-1.5'>
              <h3 className='text-sm font-semibold text-foreground'>13. Contact Us</h3>
              <p>If you have questions or concerns about these Terms, please reach out to us:</p>
              <p>
                Email:{' '}
                <a href='mailto:support@example.com' className='text-primary underline-offset-4 hover:underline'>
                  support@example.com
                </a>
              </p>
              <p>Phone: +1 (800) 123-4567</p>
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button type='submit' className='cursor-pointer hover:bg-primary/80' />}>Accept</SheetClose>
            <SheetClose render={<Button variant='outline' className='cursor-pointer' />}>Decline</SheetClose>
          </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default SheetWithScrollableContentDemo
