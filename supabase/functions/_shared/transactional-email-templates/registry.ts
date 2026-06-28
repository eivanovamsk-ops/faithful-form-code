import * as React from 'npm:react@18.3.1'

export type TemplateEntry = {
  component: React.ComponentType<any>
  subject: string | ((data: any) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

import { template as contactNotification } from './contact-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-notification': contactNotification,
}
