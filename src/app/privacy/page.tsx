import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="w-full relative mb-12">
          <Link
            href="/"
            className="absolute -left-4 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-200 group"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
        <p className="text-gray-300 mb-8">Last updated: February 12, 2025</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <p>This Privacy Policy describes how CopyCoder collects, uses, and shares information about you when you use our website copycoder.ai and related services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">1.1 Authentication Data</h3>
                <p>We use Supabase, a secure authentication and database service, to manage user accounts. When you use our Services, we collect:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Email address for authentication purposes</li>
                  <li>OTP (One-Time Password) verification status</li>
                  <li>Authentication timestamps</li>
                  <li>Session data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">1.2 Account Information</h3>
                <p>When you create an account through our OTP verification system:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Email address for sending verification codes</li>
                  <li>Account creation date</li>
                  <li>Last login information</li>
                  <li>Session tokens</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Send one-time verification codes via email</li>
              <li>Verify your identity through secure OTP verification</li>
              <li>Provide access to our Services</li>
              <li>Maintain account security</li>
              <li>Send necessary service emails (including verification codes)</li>
              <li>Monitor and prevent fraud or abuse</li>
              <li>Improve our Services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Contact Us</h2>
            <p>For any questions about this Privacy Policy, please contact us at <a href="mailto:info@copycoder.ai" className="text-blue-400 hover:text-blue-300 hover:underline">info@copycoder.ai</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
