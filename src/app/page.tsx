export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-20">
        {/* Brand Header */}
        <header className="mb-10">
          <h3 className="text-2xl font-semibold">Prabahe</h3>
        </header>

        {/* Hero */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Learn IT, AI & Wellness Skills for a Global Future
          </h1>
          <p className="mt-4 text-lg text-gray-600">– Prabahe</p>
          <a
            href="#courses"
            className="inline-block mt-8 rounded-xl border px-5 py-3 font-medium"
          >
            Explore Courses
          </a>
        </section>

        {/* Categories */}
        <section id="courses" className="mt-8">
          <h2 className="text-2xl font-semibold">Top Categories</h2>
          <div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-3">
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">IT & AI Skills</h3>
              <p className="text-sm text-gray-600">Full-stack, Data, GenAI.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">Arts</h3>
              <p className="text-sm text-gray-600">Music, Dance, Culture.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <h3 className="font-semibold">Wellness</h3>
              <p className="text-sm text-gray-600">Yoga, Mindfulness.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          © Prabahe
        </footer>
      </div>
    </main>
  );
}
