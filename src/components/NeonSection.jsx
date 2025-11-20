export default function NeonSection({ title, subtitle, children }) {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(600px_circle_at_80%_50%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
            {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-1">
          {children}
        </div>
      </div>
    </section>
  )
}
