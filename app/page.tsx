export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">
      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">
          Freelance Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Calculate Your Optimal
          <br />
          <span className="text-[#58a6ff]">Hourly Rate</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Stop guessing. Enter your skills, location, and experience — get a
          data-backed rate that wins clients and protects your margins.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $12/mo
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See Pricing
          </a>
        </div>
        <div className="flex justify-center gap-8 mt-4 text-sm text-[#8b949e]">
          <span>✓ Market data analysis</span>
          <span>✓ Profit margin calculator</span>
          <span>✓ Location-aware rates</span>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-6 bg-[#161b22]">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">
              Pro
            </span>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold text-white">$12</span>
              <span className="text-[#8b949e] mb-1">/month</span>
            </div>
            <p className="text-sm text-[#8b949e]">Everything you need to price confidently.</p>
          </div>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Unlimited rate calculations",
              "Skills & location analysis",
              "Profit margin breakdowns",
              "Market benchmark comparisons",
              "Export reports as PDF",
              "Priority email support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-center text-base"
          >
            Start Free Trial
          </a>
          <p className="text-xs text-[#8b949e] text-center">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "How does the rate calculator work?",
              a: "You input your skills, years of experience, and location. Our engine compares this against current market data to suggest a competitive hourly rate range along with profit margin guidance.",
            },
            {
              q: "Where does the market data come from?",
              a: "We aggregate data from multiple freelance platforms and industry salary surveys, updated monthly, to ensure your rate recommendations reflect real market conditions.",
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal. You keep access until the end of your billing period with no questions asked.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 flex flex-col gap-2 bg-[#161b22]">
              <h3 className="font-semibold text-white">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Freelancer Rate Calculator. All rights reserved.
      </footer>
    </main>
  );
}
