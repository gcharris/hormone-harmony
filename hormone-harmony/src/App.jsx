import { useState, useEffect } from 'react';
import Button from './components/Button';
import SplashGate from './components/SplashGate';
import { Zap, Frown, Moon, Scale, Calendar, CloudFog, Heart, Droplets } from 'lucide-react';
import './App.css';

// Symptom Icon Component
function SymptomIcon({ icon: Icon, label, bgColor }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-20 h-20 flex items-center justify-center rounded-full mb-3"
        style={{
          backgroundColor: bgColor,
        }}
        role="img"
        aria-label={label}
      >
        <Icon size={32} strokeWidth={1.5} style={{ color: 'var(--color-text-primary)' }} />
      </div>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
          fontWeight: 'var(--font-weight-medium)',
        }}
      >
        {label}
      </p>
    </div>
  );
}

// Pillar Card Component
function PillarCard({ icon, title, description }) {
  return (
    <div
      className="p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-white)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl mx-auto"
        style={{
          backgroundColor: 'var(--color-primary-pale)',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-center mb-3"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-center"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-secondary)',
        }}
      >
        {description}
      </p>
    </div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 text-white font-bold"
        style={{
          backgroundColor: 'var(--color-accent)',
          fontSize: 'var(--font-size-lg)',
        }}
      >
        {number}
      </div>
      <h4
        className="mb-2"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-secondary)',
        }}
      >
        {description}
      </p>
    </div>
  );
}

// Trust Card Component
function TrustCard({ icon, title, description }) {
  return (
    <div
      className="p-8 rounded-xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-white)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-3xl"
        style={{
          backgroundColor: 'var(--color-accent-pale)',
        }}
      >
        {icon}
      </div>
      <h4
        className="mb-3"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-secondary)',
        }}
      >
        {description}
      </p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, author }) {
  return (
    <div
      className="p-8 rounded-xl hover:shadow-lg transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-bg-tertiary)',
        borderLeft: '4px solid var(--color-accent)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      <p
        className="mb-4 italic"
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'var(--font-size-lg)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-primary)',
        }}
      >
        "{quote}"
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-accent)',
        }}
      >
        {author}
      </p>
    </div>
  );
}

// Footer Link Component
function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="hover:opacity-70 transition-opacity"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-cream)',
          textDecoration: 'none',
          opacity: 0.8,
        }}
      >
        {children}
      </a>
    </li>
  );
}

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Check localStorage on mount to see if user has already unlocked
  useEffect(() => {
    const savedUnlock = localStorage.getItem('hormoneHarmonyUnlocked');
    if (savedUnlock === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const smoothScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    localStorage.setItem('hormoneHarmonyUnlocked', 'true');
  };

  // Show password gate if not unlocked
  if (!isUnlocked) {
    return <SplashGate logoSrc="/brand/logos/harmony-mark.png" onSuccess={handleUnlock} />;
  }

  return (
    <div className="min-h-screen">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white"
      >
        Skip to main content
      </a>

      {/* Header with Logo */}
      <header
        className="sticky top-0"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          position: 'sticky',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Lockup */}
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Hormone Harmony home"
          >
            <img
              src="/brand/logos/harmony-mark.png"
              alt="Hormone Harmony logo"
              className="h-8 md:h-10"
              style={{ minHeight: '32px' }}
            />
            <span
              className="hidden md:block"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              Hormone Harmony
            </span>
          </a>

          {/* CTA */}
          <Button variant="primary" size="sm" onClick={() => smoothScrollTo('hero')}>
            Start Your Journey
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-pale) 0%, var(--color-secondary-pale) 100%)',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left py-16 lg:py-0">
              {/* Headline */}
              <h1
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  color: 'var(--color-text-primary)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                }}
              >
                Find Your Hormone Balance
              </h1>

              {/* Subheadline */}
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-lg)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Evidence-based guidance and support for every stage of your hormonal journey
              </p>

              {/* Byline */}
              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-gray-warm)',
                }}
              >
                Powered by Rhithm technology
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  href="/assessment"
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => smoothScrollTo('validation')}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <img
                  src="/photos/before-after-transformation.png"
                  alt="From struggle to empowerment - visual story of hormone balance transformation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    objectFit: 'cover',
                  }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Anchor */}
      <main id="main-content">
        {/* Section 2: Validation */}
        <section
          id="validation"
          className="py-16 md:py-24"
          style={{
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
            {/* Headline */}
            <h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
              }}
            >
              You're Not Alone—And You Deserve to Be Heard
            </h2>

            {/* Body Copy */}
            <p
              className="mb-4 max-w-3xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-text-primary)',
              }}
            >
              After years of feeling dismissed by doctors, overwhelmed by conflicting advice, or simply confused about what's happening in your body—you're in the right place.
            </p>

            <p
              className="mb-2 max-w-3xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
              }}
            >
              80% of women experience hormone imbalance at some point in their lives.
            </p>

            <p
              className="mb-8 max-w-3xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-text-secondary)',
              }}
            >
              You're not imagining it. Your symptoms are real. And you deserve answers.
            </p>

            {/* Symptom Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
              {/* Fatigue */}
              <SymptomIcon icon={Zap} label="Fatigue" bgColor="var(--color-primary-pale)" />

              {/* Mood Changes */}
              <SymptomIcon icon={Frown} label="Mood Changes" bgColor="var(--color-secondary-pale)" />

              {/* Sleep Issues */}
              <SymptomIcon icon={Moon} label="Sleep Issues" bgColor="var(--color-accent-pale)" />

              {/* Weight Fluctuations */}
              <SymptomIcon icon={Scale} label="Weight Fluctuations" bgColor="var(--color-primary-pale)" />

              {/* Irregular Cycles */}
              <SymptomIcon icon={Calendar} label="Irregular Cycles" bgColor="var(--color-secondary-pale)" />

              {/* Brain Fog */}
              <SymptomIcon icon={CloudFog} label="Brain Fog" bgColor="var(--color-accent-pale)" />

              {/* Low Libido */}
              <SymptomIcon icon={Heart} label="Low Libido" bgColor="var(--color-primary-pale)" />

              {/* Skin Changes */}
              <SymptomIcon icon={Droplets} label="Skin Changes" bgColor="var(--color-secondary-pale)" />
            </div>

            {/* Support & Understanding Image */}
            <div className="max-w-4xl mx-auto mt-16">
              <img
                src="/photos/Clinical Impact Scene.png"
                alt="You're not alone - supportive healthcare and understanding for hormone health"
                className="w-full h-auto rounded-2xl shadow-xl"
                style={{
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Three Pillars */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: 'var(--color-bg-elevated)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            {/* Headline */}
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
              }}
            >
              Understanding Your Hormones Changes Everything
            </h2>

            {/* Three Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Pillar 1: Learn */}
              <PillarCard
                icon="📚"
                title="Learn"
                description="Evidence-based education about your hormone health, explained in plain language you can actually understand."
              />

              {/* Pillar 2: Track */}
              <PillarCard
                icon="📊"
                title="Track"
                description="Tools to monitor your symptoms and patterns over time, revealing connections you might have missed."
              />

              {/* Pillar 3: Thrive */}
              <PillarCard
                icon="🌱"
                title="Thrive"
                description="Personalized guidance for lasting balance—from lifestyle changes to knowing when to see a specialist."
              />
            </div>

            {/* Lifestyle Image - Thrive Visualization */}
            <div className="max-w-4xl mx-auto mt-12">
              <img
                src="/photos/yoga.png"
                alt="Woman practicing wellness and self-care for hormone balance"
                className="w-full h-auto rounded-2xl shadow-lg"
                style={{
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 4: How It Works */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
              }}
            >
              Your Path to Hormone Harmony
            </h2>

            {/* Two-column layout: Steps + Product Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
              {/* Process Steps */}
              <div className="grid grid-cols-2 gap-6">
                <ProcessStep
                  number="1"
                  title="Assess"
                  description="Complete our comprehensive hormone health assessment (10-15 minutes)"
                />
                <ProcessStep
                  number="2"
                  title="Understand"
                  description="Receive personalized insights about your unique patterns and what they mean"
                />
                <ProcessStep
                  number="3"
                  title="Act"
                  description="Get evidence-based recommendations tailored to your body and lifestyle"
                />
                <ProcessStep
                  number="4"
                  title="Track"
                  description="Monitor your progress and adjust as you learn what works for you"
                />
              </div>

              {/* Wellness Ecosystem Image */}
              <div className="flex justify-center mt-12">
                <img
                  src="/photos/flatlay-ecosystem.png"
                  alt="Complete wellness ecosystem - Hormone Harmony patch integrated with health tracking app, wellness journal, and daily routines"
                  className="w-full max-w-4xl h-auto rounded-2xl shadow-xl"
                  style={{
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="primary" size="lg" href="/assessment">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: Trust & Credibility */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
              }}
            >
              Science-Backed, Privacy-First
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <TrustCard
                icon="🩺"
                title="Medical Expertise"
                description="Developed in collaboration with board-certified endocrinologists and women's health specialists"
              />
              <TrustCard
                icon="🔒"
                title="Your Data is Yours. We Never Sell It. Period."
                description="End-to-end encryption • Anonymized tracking • HIPAA-compliant data protection • Export or delete your data anytime"
              />
              <TrustCard
                icon="✓"
                title="Evidence-Based"
                description="Every recommendation backed by peer-reviewed research and clinical guidelines"
              />
            </div>

            {/* Precision Medicine Visualization */}
            <div className="max-w-3xl mx-auto mt-16 mb-16">
              <img
                src="/photos/data-driven-precision.png"
                alt="Precision medicine - your body, your data, your control with Hormone Harmony"
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>

            {/* Founder Credibility - Real Person Behind the Product */}
            <div className="max-w-3xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/photos/Josie with patch forearm.png"
                  alt="Josie, Hormone Harmony founder, wearing the patch"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  style={{
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: 'var(--line-height-relaxed)',
                    color: 'var(--color-text-primary)',
                    fontStyle: 'italic',
                  }}
                >
                  "After years of navigating my own hormone journey, I knew there had to be a better way. We built Hormone Harmony to give women the understanding and support they deserve."
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-accent)',
                  }}
                >
                  — Josie, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: 'var(--color-bg-elevated)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
              }}
            >
              Stories of Transformation
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="After years of feeling dismissed by doctors, Hormone Harmony helped me understand what was happening and take control. I finally feel like myself again—and I lost 15 pounds once my hormones balanced."
                author="— Sarah M., 38 (PCOS journey)"
              />
              <TestimonialCard
                quote="This is genuinely the first time in my 7 years of being diagnosed that I have felt seen and heard. The education alone was worth it. I learned more about my hormones in one week than I had in 20 years."
                author="— Jennifer L., 42 (Perimenopause)"
              />
              <TestimonialCard
                quote="I love that it's private and I'm in control of my data. Finally, a health tool I can trust. My sleep quality improved within 2 weeks of understanding my cycle patterns."
                author="— Maya K., 31 (Irregular cycles)"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
              }}
            >
              Ready to Find Your Balance?
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-text-primary)',
              }}
            >
              Join thousands of women taking control of their hormone health. Start your personalized journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="primary" size="lg" href="/assessment">
                Get Started Free
              </Button>
              <a
                href="/learn"
                className="inline-flex items-center justify-center"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  textDecoration: 'none',
                }}
              >
                Explore Resources →
              </a>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-gray-warm)',
              }}
            >
              No credit card required • Your data is private
            </p>
          </div>
        </section>

        {/* Section 8: Footer */}
        <footer
          className="py-12"
          style={{
            backgroundColor: 'var(--color-charcoal)',
            color: 'var(--color-cream)',
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            {/* Logo Lockup */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/brand/logos/harmony-mark.png"
                alt="Hormone Harmony logo"
                className="h-10"
              />
              <img
                src="/brand/logos/harmony-wordmark-white.svg"
                alt="Hormone Harmony"
                className="h-6"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-cream)',
                    opacity: 0.8,
                  }}
                >
                  Find your hormone balance
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: 'var(--line-height-relaxed)',
                    color: 'var(--color-cream)',
                    opacity: 0.8,
                  }}
                >
                  Empowering women with evidence-based guidance and tools for lasting hormone health.
                </p>
              </div>

              {/* Navigation Column */}
              <div>
                <h4
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-cream)',
                  }}
                >
                  Navigation
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/how-it-works">How It Works</FooterLink>
                  <FooterLink href="/learn">Learn</FooterLink>
                  <FooterLink href="/about">About</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-cream)',
                  }}
                >
                  Legal
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="/privacy">Privacy Policy</FooterLink>
                  <FooterLink href="/terms">Terms of Service</FooterLink>
                  <FooterLink href="/accessibility">Accessibility</FooterLink>
                </ul>
              </div>

              {/* Newsletter Column */}
              <div>
                <h4
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-cream)',
                  }}
                >
                  Get Hormone Health Tips
                </h4>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--font-size-sm)',
                    }}
                  />
                  <Button variant="primary" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </form>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-cream)',
                    opacity: 0.6,
                  }}
                >
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Medical Disclaimer & Copyright */}
            <div
              className="pt-8 text-center"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-cream)',
                  opacity: 0.7,
                  marginBottom: '1rem',
                  maxWidth: '800px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider before making changes to your health routine.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-cream)',
                  opacity: 0.6,
                }}
              >
                © 2025 Hormone Harmony. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
