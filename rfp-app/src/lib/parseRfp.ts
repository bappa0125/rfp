import { nanoid } from 'nanoid'
import type { RfpDocument, RfpSection, RfpQuestion } from '@/types/rfp'

function isHeading(line: string): boolean {
  const trimmed = line.trim()
  if (trimmed.length < 3) return false
  if (/^\d+(?:\.\d+)*\s+.+/.test(trimmed)) return true
  if (/^[A-Z][A-Z\s]{3,}$/.test(trimmed)) return true
  if (/^(?:SECTION|CHAPTER|PART)\s+\d+/i.test(trimmed)) return true
  return false
}

function isQuestion(line: string): boolean {
  const t = line.trim()
  return t.endsWith('?') && t.length > 6
}

export function parseRfpFromText(title: string, raw: string): RfpDocument {
  const lines = raw.split(/\r?\n/)
  const sections: RfpSection[] = []
  let current: RfpSection | null = null

  const pushSection = (titleText: string) => {
    const section: RfpSection = { id: nanoid(), title: titleText.trim(), questions: [] }
    sections.push(section)
    current = section
  }

  for (const line of lines) {
    const t = line.trim()
    if (!t) continue
    if (isHeading(t)) {
      pushSection(t.replace(/^\d+(?:\.\d+)*/,'').trim() || t)
      continue
    }
    if (!current) pushSection('Introduction')
    const target = sections[sections.length - 1]
    if (isQuestion(t)) {
      const q: RfpQuestion = { id: nanoid(), prompt: t }
      target.questions.push(q)
    } else {
      // Aggregate non-question text; break paragraphs into pseudo-questions if none exist yet
      if (t.length > 40 && target.questions.length === 0) {
        const parts = t.split(/(?<=\.)\s+/).filter(Boolean)
        for (const p of parts) {
          if (p.trim().length < 20) continue
          target.questions.push({ id: nanoid(), prompt: p.trim() })
        }
      }
    }
  }

  if (sections.length === 0) {
    pushSection('Content')
    const last = sections[sections.length - 1]
    last.questions.push({ id: nanoid(), prompt: raw.slice(0, 120) + '…' })
  }

  return { id: nanoid(), title, sections }
}


