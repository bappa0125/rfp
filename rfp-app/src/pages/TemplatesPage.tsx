export default function TemplatesPage() {
  const templates = [
    { id: 't1', name: 'SaaS Security Questionnaire' },
    { id: 't2', name: 'Infrastructure & Hosting' },
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Templates</h1>
      <ul className="grid gap-2">
        {templates.map((t) => (
          <li key={t.id} className="rounded border p-3 bg-white">
            <div className="font-medium">{t.name}</div>
            <div className="text-xs text-gray-600">Use this template when creating a new RFP</div>
          </li>
        ))}
      </ul>
    </div>
  )
}


