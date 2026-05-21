import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-pearl">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-luxury-black border-b border-luxury-border/30 pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,85,0,0.05)_0%,_transparent_65%)] pointer-events-none" />
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
              <FileText className="w-5 h-5 text-luxury-gold" />
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-luxury-gold font-sans font-medium">Legal</span>
          </div>
          <h1 className="font-accent text-3xl md:text-5xl text-luxury-white leading-tight mb-4">
            Terms &amp; Conditions
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
            Welcome to <span className="text-luxury-amber font-medium">Electrobattles Dance Academy</span>. By accessing our website or enrolling in any of our programs, you agree to be bound by these Terms &amp; Conditions. Please read them carefully before using our services. If you do not agree to these terms, kindly refrain from using our website and services.
          </p>
        </section>

        {/* Section 1 */}
        <TermsSection number="1" title="Acceptance of Terms">
          <p>By accessing and using the Electrobattles Dance Academy website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions, along with our Privacy Policy, which is incorporated herein by reference. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.</p>
        </TermsSection>

        {/* Section 2 */}
        <TermsSection number="2" title="Enrollment & Registration">
          <p>Enrollment in our dance programs is subject to availability and the following conditions:</p>
          <ul>
            <li>All registrations must be completed with accurate and truthful information.</li>
            <li>Enrollment is confirmed only upon receipt of the applicable fee.</li>
            <li>Minors (under 18) must have a parent or legal guardian complete the registration and waiver forms.</li>
            <li>The Academy reserves the right to refuse enrollment at its discretion.</li>
          </ul>
        </TermsSection>

        {/* Section 3 */}
        <TermsSection number="3" title="Fees & Payment">
          <ul>
            <li>All fees must be paid in advance as per the schedule communicated at time of enrollment.</li>
            <li>Fees are non-refundable unless a class is cancelled by the Academy.</li>
            <li>We reserve the right to revise our fee structure with reasonable notice to students.</li>
            <li>Returned payments or failed transactions may incur an additional administrative charge.</li>
          </ul>
        </TermsSection>

        {/* Section 4 */}
        <TermsSection number="4" title="Cancellation & Refund Policy">
          <p>We understand that circumstances change. Our policy is as follows:</p>
          <ul>
            <li><strong className="text-luxury-white/80">Academy-initiated cancellations:</strong> If we cancel a class, a full refund or equivalent credit will be offered.</li>
            <li><strong className="text-luxury-white/80">Student-initiated cancellations:</strong> Cancellations made more than 7 days before the term begins may receive a partial refund at our discretion.</li>
            <li><strong className="text-luxury-white/80">No-shows:</strong> Missed classes are non-refundable and cannot be transferred.</li>
          </ul>
        </TermsSection>

        {/* Section 5 */}
        <TermsSection number="5" title="Code of Conduct">
          <p>All students, guardians, and visitors are expected to maintain a respectful and positive environment. The following behaviours will not be tolerated:</p>
          <ul>
            <li>Disrespectful or abusive language towards instructors, staff, or fellow students</li>
            <li>Any form of discrimination, harassment, or bullying</li>
            <li>Damage to studio property</li>
            <li>Unauthorised recording or photography within the studio</li>
          </ul>
          <p>Violation of this code may result in immediate dismissal from the program without refund.</p>
        </TermsSection>

        {/* Section 6 */}
        <TermsSection number="6" title="Health, Safety & Liability Waiver">
          <p>Dance is a physical activity that carries inherent risks of injury. By enrolling, you acknowledge and agree that:</p>
          <ul>
            <li>You are physically fit and have no medical conditions that may prevent participation (or have disclosed them to us).</li>
            <li>Electrobattles Dance Academy shall not be held liable for any injury, loss, or damage sustained during classes or on studio premises, except where caused by our negligence.</li>
            <li>You will inform instructors of any physical limitations before class.</li>
            <li>We recommend wearing appropriate footwear and attire for all dance sessions.</li>
          </ul>
        </TermsSection>

        {/* Section 7 */}
        <TermsSection number="7" title="Intellectual Property">
          <p>All content on our website — including choreography, videos, photographs, training materials, and text — is the intellectual property of Electrobattles Dance Academy and is protected under applicable copyright laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
        </TermsSection>

        {/* Section 8 */}
        <TermsSection number="8" title="Photography & Media Consent">
          <p>By enrolling, you grant Electrobattles Dance Academy the right to photograph and/or video record students during classes, recitals, and events for use in promotional materials, social media, and our website, unless you explicitly opt out in writing. Student identities will be handled with care and discretion.</p>
        </TermsSection>

        {/* Section 9 */}
        <TermsSection number="9" title="Website Use">
          <p>You agree to use our website only for lawful purposes. You must not:</p>
          <ul>
            <li>Use the site in any way that violates applicable local, national, or international law or regulation.</li>
            <li>Attempt to gain unauthorised access to our systems or data.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
          </ul>
        </TermsSection>

        {/* Section 10 */}
        <TermsSection number="10" title="Limitation of Liability">
          <p>To the maximum extent permitted by applicable law, Electrobattles Dance Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website, even if we have been advised of the possibility of such damages.</p>
        </TermsSection>

        {/* Section 11 */}
        <TermsSection number="11" title="Governing Law">
          <p>These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts located in Kochi, Kerala.</p>
        </TermsSection>

        {/* Section 12 */}
        <TermsSection number="12" title="Changes to These Terms">
          <p>We reserve the right to amend these Terms &amp; Conditions at any time. Updated terms will be posted on this page. Your continued use of our services following any changes constitutes your acceptance of the new terms.</p>
        </TermsSection>

        {/* Contact */}
        <section className="bg-luxury-black border border-luxury-border/50 rounded-2xl p-8">
          <h2 className="font-accent text-lg text-luxury-gold mb-4">Questions?</h2>
          <p className="text-luxury-white/60 text-sm font-sans font-light leading-[1.9]">
            If you have any questions about these Terms &amp; Conditions, please contact us:
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

function TermsSection({ number, title, children }) {
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
