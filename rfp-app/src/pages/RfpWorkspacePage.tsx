import { useParams } from 'react-router-dom'
import { useRfpStore } from '@/store/rfpStore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'

export default function RfpWorkspacePage() {
  const { id } = useParams()
  const { documents } = useRfpStore()
  const doc = id ? documents[id] : undefined

  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 max-w-6xl mx-auto w-full px-4 py-6">
        <aside className="md:sticky md:top-16 h-fit">
          <Card>
            <CardContent className="p-0">
              <ScrollArea className="h-[60vh]">
                <div className="p-3">
                  {doc?.sections.map((s) => (
                    <div key={s.id} className="mb-3">
                      <div className="text-sm font-medium text-gray-700">{s.title}</div>
                      <ul className="mt-1 space-y-1 text-sm text-gray-600">
                        {s.questions.map((q) => (
                          <li key={q.id}>• {q.prompt.slice(0, 36)}...</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>
        <section>
          {!doc ? (
            <div className="text-sm text-gray-600">RFP not found.</div>
          ) : (
            doc.sections.map((s) => (
              <Card key={s.id} className="mb-4">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-3">{s.title}</h2>
                  <div className="space-y-4">
                    {s.questions.map((q) => (
                      <QuestionEditor key={q.id} docId={doc.id} sectionId={s.id} qid={q.id} prompt={q.prompt} defaultValue={q.answer ?? ''} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

function QuestionEditor({ docId, sectionId, qid, prompt, defaultValue }: { docId: string; sectionId: string; qid: string; prompt: string; defaultValue: string }) {
  const { updateAnswer } = useRfpStore()
  const form = useForm<{ answer: string }>({ defaultValues: { answer: defaultValue } })

  return (
    <Form {...form}>
      <form
        onChange={form.handleSubmit((v) => updateAnswer(docId, sectionId, qid, v.answer))}
        className="grid gap-2"
      >
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-gray-700">{prompt}</FormLabel>
              <FormControl>
                <textarea {...field} className="w-full rounded border px-3 py-2 min-h-[100px]" placeholder="Type your answer..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}


