import { Link } from 'react-router-dom'

type RfpSummary = {
  id: string
  title: string
  dueDate: string
  status: 'draft' | 'in-progress' | 'submitted'
}

const mockRfps: RfpSummary[] = [
  { id: '1', title: 'Cloud Hosting RFP', dueDate: '2025-09-15', status: 'in-progress' },
  { id: '2', title: 'Payment Gateway RFP', dueDate: '2025-10-01', status: 'draft' },
]

export default function RfpListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">RFPs</h1>
        <Link to="/new" className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm">
          New RFP
        </Link>
      </div>
      <div className="grid gap-3">
        {mockRfps.map((rfp) => (
          <Link
            key={rfp.id}
            to={`/rfp/${rfp.id}`}
            className="rounded border p-4 hover:bg-gray-50 flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{rfp.title}</div>
              <div className="text-xs text-gray-600">Due {new Date(rfp.dueDate).toLocaleDateString()}</div>
            </div>
            <span className="text-xs uppercase tracking-wide px-2 py-1 rounded bg-gray-100 text-gray-700">
              {rfp.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}


