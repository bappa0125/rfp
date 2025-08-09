import { useParams, Link } from 'react-router-dom'

export default function RfpDetailPage() {
  const { id } = useParams()

  // Placeholder data
  const rfp = {
    id,
    title: 'Cloud Hosting RFP',
    dueDate: '2025-09-15',
    sections: [
      { id: 's1', title: 'Company Overview', status: 'complete' },
      { id: 's2', title: 'Security & Compliance', status: 'in-progress' },
      { id: 's3', title: 'Pricing', status: 'pending' },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{rfp.title}</h1>
          <div className="text-sm text-gray-600">Due {new Date(rfp.dueDate).toLocaleDateString()}</div>
        </div>
        <Link to="/" className="text-sm underline">Back to list</Link>
      </div>

      <div className="grid gap-3">
        {rfp.sections.map((s) => (
          <div key={s.id} className="rounded border p-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="font-medium">{s.title}</div>
              <span className="text-xs uppercase tracking-wide px-2 py-1 rounded bg-gray-100 text-gray-700">
                {s.status}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Content placeholder for {s.title}.</div>
          </div>
        ))}
      </div>
    </div>
  )
}


