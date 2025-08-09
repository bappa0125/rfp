import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { nanoid } from 'nanoid'
import type { RfpDocument, RfpSection } from '@/types/rfp'

type RfpState = {
  documents: Record<string, RfpDocument>
  currentId?: string
  createFromTemplate: (title: string) => string
  importDocument: (doc: RfpDocument) => void
  setCurrent: (id: string) => void
  updateAnswer: (docId: string, sectionId: string, questionId: string, answer: string) => void
}

export const useRfpStore = create<RfpState>()(
  persist(
    (set) => ({
      documents: {},
      currentId: undefined,
      createFromTemplate: (title: string) => {
        const id = nanoid()
        const newDoc: RfpDocument = {
          id,
          title,
          sections: [
            {
              id: nanoid(),
              title: 'Company Overview',
              questions: [
                { id: nanoid(), prompt: 'Describe your company mission.' },
                { id: nanoid(), prompt: 'Year founded and key milestones.' },
              ],
            },
            {
              id: nanoid(),
              title: 'Security & Compliance',
              questions: [
                { id: nanoid(), prompt: 'List your certifications and audits.' },
                { id: nanoid(), prompt: 'How is customer data protected?' },
              ],
            },
          ],
        }
        set((s) => ({ documents: { ...s.documents, [id]: newDoc }, currentId: id }))
        return id
      },
      importDocument: (doc: RfpDocument) => set((s) => ({ documents: { ...s.documents, [doc.id]: doc } })),
      setCurrent: (id: string) => set({ currentId: id }),
      updateAnswer: (docId, sectionId, questionId, answer) =>
        set((s) => {
          const doc = s.documents[docId]
          if (!doc) return s
          const sections: RfpSection[] = doc.sections.map((sec) =>
            sec.id === sectionId
              ? {
                  ...sec,
                  questions: sec.questions.map((q) =>
                    q.id === questionId ? { ...q, answer } : q,
                  ),
                }
              : sec,
          )
          return { documents: { ...s.documents, [docId]: { ...doc, sections } } }
        }),
    }),
    { name: 'rfp-store' },
  ),
)


