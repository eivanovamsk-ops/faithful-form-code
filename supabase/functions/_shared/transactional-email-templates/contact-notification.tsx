import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  phone?: string
  submittedAt?: string
}

const Email = ({ name = '—', phone = '—', submittedAt }: Props) => (
  <Html lang="ru" dir="ltr">
    <Head />
    <Preview>Новая заявка с сайта Articon</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Новая заявка с сайта</Heading>
        <Text style={text}>На сайте articon-clinic.ru оставлена новая заявка на запись.</Text>
        <Section style={card}>
          <Text style={row}><strong>Имя:</strong> {name}</Text>
          <Text style={row}><strong>Телефон:</strong> {phone}</Text>
          {submittedAt && <Text style={row}><strong>Время:</strong> {submittedAt}</Text>}
        </Section>
        <Text style={muted}>Свяжитесь с пациентом в ближайшее время.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Новая заявка с сайта Articon',
  displayName: 'Уведомление о новой заявке',
  to: 'clinic@articon.pro',
  previewData: { name: 'Иван Иванов', phone: '+7 999 000-00-00' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Montserrat, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { color: '#0b2545', fontSize: '22px', margin: '0 0 16px' }
const text = { color: '#33415c', fontSize: '14px', lineHeight: '22px' }
const card = { background: '#f3f6fb', borderRadius: '12px', padding: '20px 22px', margin: '20px 0' }
const row = { color: '#0b2545', fontSize: '15px', margin: '6px 0' }
const muted = { color: '#7a869a', fontSize: '12px', marginTop: '20px' }
