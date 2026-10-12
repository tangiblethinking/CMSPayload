import type { Metadata } from 'next'
import './catalog.css'
import { Sidebar } from '@/components/Sidebar'
import { ThemeRuntime } from '@/components/ThemeRuntime'
import { entries } from '@/lib/catalog'
import { kindOf } from '@/lib/status'

export const metadata: Metadata = {
  title: 'CMSPayload — Payload UI Catalog',
  description: 'Interactive catalog of Payload CMS admin UI components with source code and theming.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const items = entries.map((e) => ({
    category: e.category,
    slug: e.slug,
    name: e.name,
    kind: kindOf(e),
  }))
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Payload's real UI stylesheet (generated from payload-src by scripts/prepare.mjs) */}
        <link rel="stylesheet" href="/payload-ui.css" />
      </head>
      <body>
        <ThemeRuntime />
        <div className="cat-shell">
          <Sidebar items={items} />
          <main className="cat-main">{children}</main>
        </div>
      </body>
    </html>
  )
}
