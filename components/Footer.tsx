import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          &copy; 2026 Asif Iqbal. AI Systems Architect.
        </p>
        <div className="flex items-center gap-8">
          {['Home', 'About', 'Expertise', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              className="text-gray-500 hover:text-neural-cyan transition-colors text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
