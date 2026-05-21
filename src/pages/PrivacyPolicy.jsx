import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-pearl">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-luxury-black border-b border-luxury-border/30 pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,85,0,0.05)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-luxury-white/40 hover:text-luxury-gold text-xs tracking-widest uppercase font-sans font-light transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-luxury-gold" />
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-luxury-gold font-sans font-medium">Legal</span>
          </div>
          <h1 className="font-accent text-3xl md:text-5xl text-luxury-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-luxury-white/40 text-xs font-sans font-light tracking-wide">
            Last updated: May 2025 &nbsp;·&nbsp; Electrobattles Dance Academy, Kochi
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-12">

        {/* Intro */}
        <section>
          <p className="text-luxury-white/60 text-sm font-sans font-light leading-[1.9]">
            At <span className="text-luxury-amber font-medium">Electrobattles Dance Academy</span>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read it carefully. If you disagree with its terms, please discontinue use of our site.
          </p>
        </section>

        {/* Section 1 */}
        <PolicySection number="1" title="Information We Collect">
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul>
            <li>Enroll in a dance class or program</li>
            <li>Contact us through our website, phone, or email</li>
            <li>Register for events, workshops, or competitions</li>
            <li>Subscribe to our newsletter or promotional communications</li>
          </ul>
          <p>This information may include your <strong className="text-luxury-white/80">name, email address, phone number, date of birth, payment details,</strong> and any other information you choose to provide.</p>
          <p>We also automatically collect certain technical data such as IP addresses, browser type, pages visited, and time spent on pages when you interact with our website.</p>
        </PolicySection>

        {/* Section 2 */}
        <PolicySection number="2" title="How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process enrollments and manage your membership</li>
            <li>Communicate class schedules, updates, and announcements</li>
            <li>Send promotional content and offers (with your consent)</li>
            <li>Process payments securely</li>
            <li>Improve our website and services</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
        </PolicySection>

        {/* Section 3 */}
        <PolicySection number="3" title="Sharing of Your Information">
          <p>We do <strong className="text-luxury-white/80">not sell, trade, or rent</strong> your personal information to third parties. We may share your data only in the following limited circumstances:</p>
          <ul>
            <li><strong className="text-luxury-white/80">Service Providers:</strong> Trusted third-party vendors who assist us in operating our website or conducting our business (e.g., payment processors), subject to strict confidentiality agreements.</li>
            <li><strong className="text-luxury-white/80">Legal Requirements:</strong> When required to do so by law, court order, or governmental authority.</li>
            <li><strong className="text-luxury-white/80">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
        </PolicySection>

        {/* Section 4 */}
        <PolicySection number="4" title="Cookies & Tracking Technologies">
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.</p>
        </PolicySection>

        {/* Section 5 */}
        <PolicySection number="5" title="Data Security">
          <p>We implement appropriate technical and organisational security measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </PolicySection>

        {/* Section 6 */}
        <PolicySection number="6" title="Data Retention">
          <p>We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymise it.</p>
        </PolicySection>

        {/* Section 7 */}
        <PolicySection number="7" title="Your Rights">
          <p>Depending on your location and applicable law, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent to marketing communications at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the details below.</p>
        </PolicySection>

        {/* Section 8 */}
        <PolicySection number="8" title="Children's Privacy">
          <p>We recognise the importance of protecting the privacy of children. We do not knowingly collect personal information from children under the age of 13 without verifiable parental consent. If you believe a child has provided us with personal information without consent, please contact us immediately.</p>
        </PolicySection>

        {/* Section 9 */}
        <PolicySection number="9" title="Third-Party Links">
          <p>Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of those sites and are not responsible for them. We encourage you to review the privacy policy of every site you visit.</p>
        </PolicySection>

        {/* Section 10 */}
        <PolicySection number="10" title="Changes to This Policy">
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
        </PolicySection>

        {/* Contact */}
        <section className="bg-luxury-black border border-luxury-border/50 rounded-2xl p-8">
          <h2 className="font-accent text-lg text-luxury-gold mb-4">Contact Us</h2>
          <p className="text-luxury-white/60 text-sm font-sans font-light leading-[1.9]">
            If you have questions or concerns about this Privacy Policy, please reach out:
          </p>
          <div className="mt-4 space-y-2 text-sm font-sans font-light text-luxury-white/60">
            <p><span className="text-luxury-gold/80">Studio:</span> House No. 9/488D2, Near Veli School, Cbsc Rd, Fort Kochi, Kochi, Kerala 682001</p>
            <p><span className="text-luxury-gold/80">Phone:</span>{' '}
              <a href="tel:08879116961" className="hover:text-luxury-gold transition-colors">088791 16961</a>
            </p>
            <p><span className="text-luxury-gold/80">Email:</span>{' '}
              <a href="mailto:electrobattles@gmail.com" className="hover:text-luxury-gold transition-colors">electrobattles@gmail.com</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

function PolicySection({ number, title, children }) {
  return (
    <section>
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-luxury-gold/40 font-accent text-sm">{number}.</span>
        <h2 className="font-accent text-lg md:text-xl text-luxury-white/90">{title}</h2>
      </div>
      <div className="pl-0 md:pl-6 space-y-4 text-luxury-white/60 text-sm font-sans font-light leading-[1.9] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
