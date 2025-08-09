import { z } from 'zod'

export const rfpQuestionSchema = z.object({
  id: z.string(),
  prompt: z.string(),
  answer: z.string().optional(),
})

export const rfpSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  questions: z.array(rfpQuestionSchema),
})

export const rfpDocumentSchema = z.object({
  id: z.string(),
  title: z.string(),
  dueDate: z.string().optional(),
  sections: z.array(rfpSectionSchema),
})

export type RfpQuestion = z.infer<typeof rfpQuestionSchema>
export type RfpSection = z.infer<typeof rfpSectionSchema>
export type RfpDocument = z.infer<typeof rfpDocumentSchema>


