import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRfpStore } from '@/store/rfpStore'
import { rfpDocumentSchema } from '@/types/rfp'
import { parseRfpFromText } from '@/lib/parseRfp'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ImportRfpPage() {
  const navigate = useNavigate()
  const { importDocument, setCurrent } = useRfpStore()

  function handleImportText(text: string) {
    try {
      const json = JSON.parse(text)
      const parsed = rfpDocumentSchema.parse(json)
      importDocument(parsed)
      setCurrent(parsed.id)
      navigate(`/workspace/${parsed.id}`)
    } catch (e) {
      alert('Invalid RFP JSON. Expect { id, title, sections: [{ id, title, questions: [{ id, prompt }] }] }')
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => handleImportText(String(reader.result))
    reader.readAsText(file)
  }

  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <Card>
          <CardContent className="p-5 space-y-4">
            <h1 className="text-2xl font-semibold">Import RFP</h1>
            <p className="text-sm text-gray-600">Paste JSON or upload a file to begin working interactively.</p>
            <textarea className="w-full rounded border px-3 py-2 min-h-[160px]" placeholder='Paste raw RFP text here to auto-parse into sections/questions, or paste JSON to import exactly.' onBlur={(e) => {
              const text = e.target.value
              if (!text.trim()) return
              try {
                handleImportText(text)
              } catch {
                const doc = parseRfpFromText('Imported RFP', text)
                importDocument(doc)
                setCurrent(doc.id)
                navigate(`/workspace/${doc.id}`)
              }
            }} />
            <div className="flex items-center gap-3">
              <input type="file" accept="application/json" onChange={handleFile} />
              <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}


