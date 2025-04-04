import Link from "next/link";

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>
        <p className="text-gray-300 mb-8">Last updated: February 12, 2024</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <p>Please read these Terms of Service carefully before using CopyCoder AI. By accessing or using our service, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p>By accessing or using CopyCoder AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Service Description</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">2.1 Service Overview</h3>
                <p>CopyCoder AI provides AI-powered code generation and assistance services. Our platform helps developers write, analyze, and improve their code through artificial intelligence technology.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">2.2 Service Availability</h3>
                <p>We strive to maintain high availability of our services but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our service at any time.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. User Responsibilities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Use the service for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Share your account credentials with others</li>
              <li>Use the service to generate harmful or malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Email: info@copycoder.ai</li>
              <li>Website: copycoder.ai</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
