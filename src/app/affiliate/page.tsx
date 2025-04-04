import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AffiliatePage() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#000000] pt-8 pb-24 -mt-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(-45deg, #000000 50%, #0ea5e9 100%)" }} />
        <div className="relative pt-24">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="w-full relative mb-12">
              <Link
                href="/"
                className="absolute -left-4 top-8 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Go back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Link>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">AFFILIATE PROGRAM</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">We build the AI tools.&nbsp; You earn 25%</h1>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Join us in revolutionizing the future of coding. As a CopyCoder affiliate, you'll be part of our growing community and help shape the next generation of AI-powered development tools.
              </p>

              <div className="flex justify-center flex-wrap items-center gap-8 md:gap-12 mb-12">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-lg text-gray-200">25% commission on all sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-lg text-gray-200">Bi-weekly payout</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-lg text-gray-200">High conversion rate</span>
                </div>
              </div>

              <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Join the CopyCoder affiliate program
              </Button>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Affiliate Terms of Service</h2>
              <div className="space-y-8 text-gray-200">
                <section>
                  <p className="text-lg leading-relaxed">
                    Welcome to our CopyCoder's Affiliate Program! These Terms of Service (the "Agreement") govern your participation in our affiliate program (the "Program") and establish the terms and conditions of the Program. By participating in the Program, you agree to abide by these terms.
                  </p>
                </section>

                <section className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Self-referrals are not allowed</h3>
                  <p className="leading-relaxed">
                    You are not permitted to sign up for CopyCoder through your own affiliate link. If we detect any self-referrals, your account will be permanently banned and any commission earned will be forfeited.
                  </p>
                </section>

                <section className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Abuse or attempting to mislead</h3>
                  <p className="leading-relaxed">
                    We do not tolerate attempts to abuse our affiliate system. Any attempt to mislead, manipulate or defraud us or potential customers will result in your account being permanently banned. This includes posting fake discounts to coupon-sharing websites or engaging in any other activity that violates our policies.
                  </p>
                </section>

                <section className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">No competing advertisements</h3>
                  <p className="leading-relaxed">
                    You are not allowed to run any search engine ads (especially on branded terms or domain names), Facebook ads, or other ads that would compete with our own marketing and potentially cause confusion for customers. We reserve the right to terminate your account if we detect any such activity.
                  </p>
                </section>

                <section className="mt-8 border-t border-gray-800 pt-8">
                  <p className="leading-relaxed">
                    By participating in our affiliate program, you agree to comply with these terms and conditions. We reserve the right to terminate your participation in the Program at any time and for any reason if you violate these terms.
                  </p>
                  <p className="mt-4">
                    If you have any questions about these terms or our affiliate program, please contact us at <a href="mailto:info@copycoder.ai" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">info@copycoder.ai</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
