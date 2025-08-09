import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewRfpPage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    // For now, simulate creation then navigate to details
    navigate('/rfp/123')
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Create New RFP</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border px-3 py-2"
            placeholder="e.g., Cloud Hosting RFP"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Due date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border px-3 py-2 min-h-[120px]"
            placeholder="Brief overview of the RFP"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm">Create</button>
          <button type="button" onClick={() => navigate(-1)} className="px-3 py-2 rounded border text-sm">Cancel</button>
        </div>
      </form>
    </div>
  )
}


