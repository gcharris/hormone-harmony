import { Fragment, useEffect, useState } from 'react'
import './App.css'
import picoIcon from '../photos/pico-logo-icon.png'
import heroImage from '../photos/hero-patch-model.png'
import heroBackdrop from '../photos/hero-disc-backdrop.png'
import teamPortrait from '../photos/team-portrait.png'
import appDashboard from '../photos/app-dashboard.png'
import patchExploded from '../photos/patch-exploded.png'
import lifestyleVisual from '../photos/lifestyle-visual.png'
import providerConsole from '../photos/provider-console.png'
import patientConfidence from '../photos/patient-confidence.png'
import ivfPartnership from '../photos/ivf-partnership.png'
import partnersUnique from '../photos/partners-unique-haas.png'
import dataScienceLayer from '../photos/data-science-layer.png'
import rithmLogoMark from '../photos/rithm-logo-mark-transparent.png'
import rithmWord from '../photos/rithm-word-transparent.png'
import SplashGate from './components/SplashGate'
import clinicalImpactScene from '../photos/4. Clinical Impact Scene.png'
import React from 'react'

const ACCESS_KEY = 'pico-vision-access'

const navigation = [
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#platform', label: 'Platform' },
  { href: '#validation', label: 'Validation' },
  { href: '#partners', label: 'Partners' },
]

const pillars = [
  {
    title: 'Continuous Endocrine Intelligence',
    bullets: [
      '24/7 biosensing with adaptive sampling across estrogen, progesterone, cortisol, and thyroid analogues.',
      'Signal normalization tuned to circadian, infradian, and lifestyle markers for real-world reliability.',
      'Secure baseline mapping in under 72 hours with ongoing trend detection and health alerts.',
    ],
  },
  {
    title: 'Clinical-Grade Wearable Experience',
    bullets: [
      'Skin-friendly hydrogel array engineered for multi-day wear without irritation.',
      'Replaceable patch ecosystem paired with a rechargeable core sensor pod.',
      'Motion-resilient adhesion with breathable materials designed for active routines.',
    ],
  },
  {
    title: 'Decision-Making Insight Stack',
    bullets: [
      'Predictive trend scoring to anticipate endocrine shifts before symptoms surface.',
      'Provider portal with configurable protocols, risk flags, and care pathways.',
      'Consumer app layered with clarity-first storytelling, personalized actions, and adherence support.',
    ],
  },
]

const pipeline = [
  {
    phase: '01',
    title: 'Capture',
    description:
      'Microfluidic channels collect sweat metabolites and interstitial markers in real time while on-body sensors track motion and temperature.',
  },
  {
    phase: '02',
    title: 'Translate',
    description:
      'Embedded signal processing isolates hormone signatures, denoises activity artifacts, and calibrates to personal baselines.',
  },
  {
    phase: '03',
    title: 'Model',
    description:
      'Edge AI generates predictive hormone rhythm maps and risk scores synced to the Pico Molecular data cloud.',
  },
  {
    phase: '04',
    title: 'Deliver',
    description:
      'Insights stream to clinicians and members with actionable recommendations, automation hooks, and compliance tracking.',
  },
]

const platformTiles = [
  {
    heading: 'Provider Console',
    items: [
      'Population dashboards with cohort stratification and trending alerts.',
      'EHR-friendly exports, HL7/FHIR integrations, and programmable care plans.',
      'Automated note summarization for time-savings and audit-ready documentation.',
    ],
    image: providerConsole,
    imageAlt: 'Provider console with cohort risk stratification and care plan tools',
    imageFit: 'object-cover',
  },
  {
    heading: 'Member App',
    items: [
      'Dynamic visualization of hormonal patterns, readiness scores, and cycle forecasts.',
      'Daily habit coaching tied to sleep, stress, nutrition, and medication adherence.',
      'Confident communication with secure messaging, labs tracking, and patch guidance.',
    ],
    image: appDashboard,
    imageAlt: 'Hormone insights mobile app interface',
    imageFit: 'object-cover',
  },
  {
    heading: 'Data Science Layer',
    items: [
      'Privacy-first architecture with encrypted data pipelines and consent controls.',
      'Model training sandbox with bias monitoring and clinician-in-the-loop oversight.',
      'API toolkit for research sponsors, pharma partners, and digital front doors.',
    ],
    image: dataScienceLayer,
    imageAlt: 'Data science governance with privacy, APIs, and clinician oversight',
    imageFit: 'object-contain',
  },
]

const validationMilestones = [
  {
    phase: '01',
    title: 'ISF-Serum Correlation Study',
    detail: 'Planned Q2 2026 — paired blood and interstitial fluid sampling to calibrate hormone translation.',
  },
  {
    phase: '02',
    title: 'Multi-Day Sensor Stability',
    detail: 'Target: 5–7 days of continuous wear with drift <5% across dynamic lifestyle conditions.',
  },
  {
    phase: '03',
    title: 'Clinical Accuracy Validation',
    detail: 'Goal: >95% correlation to gold-standard assays across IVF and endocrine cohorts.',
  },
  {
    phase: '04',
    title: 'FDA 510(k) Submission',
    detail: 'Vision: File within 18–24 months post-seed to unlock commercial pilots.',
  },
]

const partnerHighlights = [
  {
    title: 'Target Clinical Partners for Co-Development',
    detail: 'Target: Deploy Rithm Patch as a turnkey program with white-labeled care pathways and reimbursement guides.',
  },
  {
    title: 'Envisioned Employer Collaborations',
    detail: 'Opportunity: Deliver hormone health as a core benefit with measurable outcomes and population-level reporting.',
  },
  {
    title: 'Research & Pharma Opportunities',
    detail: 'Vision: Unlock granular endocrine data streams for trials, companion diagnostics, and digital health integrations.',
  },
]

const advisorExpertise = [
  {
    label: 'Reproductive Endocrinology & Women’s Health',
    description: 'Guiding protocols that honor hormonal complexity across IVF, PMDD, PCOS, and healthy aging cohorts.',
  },
  {
    label: 'Biosensor Engineering & Nanomaterials',
    description: 'Informing microneedle, hydrogel, and electrochemical sensing breakthroughs for long-wear fidelity.',
  },
  {
    label: 'AI Safety & Regulatory Compliance',
    description: 'Shaping our machine learning lifecycle, bias monitoring, and evidence standards for frontline deployment.',
  },
  {
    label: 'FDA & Digital Health Commercialization',
    description: 'Charting regulatory pathways, reimbursement readiness, and launch playbooks for women’s health innovation.',
  },
  {
    label: 'Obstetrics, Gynecology, and Women’s Wellness',
    description: 'Ensuring the product experience supports whole-person care, clinician workflow fit, and inclusive access.',
  },
  {
    label: 'Clinical Trials & Study Design',
    description: 'Leading protocols for multi-site validation, recruitment, and longitudinal data collection to support regulatory submissions.',
  },
]

const stats = [
  { label: 'Signal Fidelity', value: '96.4%', caption: 'Average hormone signature accuracy versus lab assays.' },
  { label: 'Wear Time', value: '72 hrs', caption: 'Comfort-tested continuous wear per disposable patch.' },
  { label: 'Insights Ready', value: '72 hrs', caption: 'Baseline calibration to actionable cycle guidance.' },
  { label: 'Care Efficiency', value: '4x', caption: 'Clinician time saved with automated summarization.' },
]

const featureHighlights = [
  {
    tone: 'navy',
    label: 'Why it matters',
    title: 'Painless, precise breakthrough monitoring.',
    summary:
      'Microneedle hydrogel access, nanocomposite sensing, and adaptive biomarkers deliver lab-grade signal without daily sticks.',
    points: [
      'Microneedle array keeps stable biofluid access for days.',
      'Nanocomposite sensors capture low-level hormone shifts in real time.',
      'AI biomarkers surface cycle forecasts, risk alerts, and actions early.',
    ],
  },
  {
    tone: 'royal',
    label: 'How it flows',
    title: 'From capture to insight, orchestrated for clinicians.',
    summary:
      'Edge intelligence, cloud analytics, and configurable workflows move from raw biosignal capture to clear decision support.',
    points: [
      'Edge intelligence cleans and calibrates signals before sync.',
      'Cloud analytics layers protocols, cohorts, and personalization.',
      'Configurable alerts and summaries drop into existing workflows.',
    ],
  },
  {
    tone: 'dusk',
    label: 'What teams gain',
    title: 'Continuous hormone intelligence you can wear.',
    summary:
      'Members, clinicians, and partners unlock new clarity, capacity, and models with wearable endocrine signal fidelity.',
    points: [
      'Members shift from symptom tracking to data-backed choices.',
      'Clinics replace bulk blood draws and expand visit capacity.',
      'Partners layer unique IP and recurring hardware-as-a-service.',
    ],
  },
]

const createWearIcon = (id) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="20" width="52" height="24" rx="12" stroke={`url(#${id}-patchStroke)`} strokeWidth="3" fill="rgba(255,255,255,0.25)" />
    <rect x="20" y="26" width="24" height="12" rx="6" fill={`url(#${id}-patchFill)`} />
    <defs>
      <linearGradient id={`${id}-patchStroke`} x1="6" y1="20" x2="58" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#14b8a6" />
      </linearGradient>
      <linearGradient id={`${id}-patchFill`} x1="20" y1="26" x2="44" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e0f2fe" />
        <stop offset="1" stopColor="#cffafe" />
      </linearGradient>
    </defs>
  </svg>
)

const createConnectIcon = (id) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="32" r="14" fill={`url(#${id}-connectCircle)`} opacity="0.4" />
    <rect x="32" y="20" width="20" height="28" rx="6" stroke={`url(#${id}-connectStroke)`} strokeWidth="3" />
    <path d="M40 28H44" stroke={`url(#${id}-connectStroke)`} strokeWidth="3" strokeLinecap="round" />
    <path d="M40 36H48" stroke={`url(#${id}-connectStroke)`} strokeWidth="3" strokeLinecap="round" />
    <defs>
      <linearGradient id={`${id}-connectStroke`} x1="32" y1="20" x2="52" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id={`${id}-connectCircle`} x1="10" y1="18" x2="34" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ede9fe" />
        <stop offset="1" stopColor="#dbeafe" />
      </linearGradient>
    </defs>
  </svg>
)

const createKnowIcon = (id) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 24C26 20.6863 28.6863 18 32 18C35.3137 18 38 20.6863 38 24C38 26.0214 37.0529 27.8486 35.5387 29" stroke={`url(#${id}-knowStroke)`} strokeWidth="3" strokeLinecap="round" />
    <path d="M22 44C22 38.4772 26.4772 34 32 34C37.5228 34 42 38.4772 42 44" stroke={`url(#${id}-knowStroke)`} strokeWidth="3" strokeLinecap="round" />
    <rect x="16" y="44" width="32" height="6" rx="3" fill={`url(#${id}-knowFill)`} />
    <defs>
      <linearGradient id={`${id}-knowStroke`} x1="22" y1="18" x2="42" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981" />
        <stop offset="1" stopColor="#14b8a6" />
      </linearGradient>
      <linearGradient id={`${id}-knowFill`} x1="16" y1="44" x2="48" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#dcfce7" />
        <stop offset="1" stopColor="#ccfbf1" />
      </linearGradient>
    </defs>
  </svg>
)

const steps = [
  {
    id: 1,
    title: 'Wear',
    description:
      'Apply the skin-friendly patch—microneedles painlessly establish gentle, stable biofluid access in minutes, creating a continuous monitoring foundation.',
    gradientClass: 'step-gradient-1',
    icon: createWearIcon('wear-icon'),
  },
  {
    id: 2,
    title: 'Connect',
    description:
      'Edge electronics encrypt and stream data to the app, while cloud intelligence harmonizes and calibrates signals in real time for clinical-grade accuracy.',
    gradientClass: 'step-gradient-2',
    icon: createConnectIcon('connect-icon'),
  },
  {
    id: 3,
    title: 'Know',
    description: 'Models translate hormone rhythms into insights, forecasts, and workflows clinicians and members can act on immediately.',
    gradientClass: 'step-gradient-3',
    icon: createKnowIcon('know-icon'),
  },
]

const ipLayers = [
  {
    title: 'IP Layer 1: Bio-Interface Innovation',
    icon: '🔬',
    bullets: [
      { heading: 'Composition of Matter Patent', detail: 'Novel anti-biofouling hydrogel formulation' },
      { heading: 'Method Patent', detail: 'Microneedle fabrication and integration process' },
    ],
    status: 'Status: Provisional filing targeted Q1 2026',
  },
  {
    title: 'IP Layer 2: Sensing Engine',
    icon: '⚡',
    bullets: [
      { heading: 'Device Patent', detail: 'Nanocomposite electrode architecture (MXene/graphene)' },
      { heading: 'Method Patent', detail: 'Aptamer-based signal amplification mechanism' },
    ],
    status: 'Status: Research validation in progress',
  },
  {
    title: 'IP Layer 3: Data Intelligence',
    icon: '🧠',
    bullets: [
      { heading: 'Method Patent', detail: 'Proprietary digital biomarker algorithms' },
      { heading: 'Software Patent', detail: 'Predictive hormone analytics engine' },
    ],
    status: 'Status: Algorithm development underway',
  },
]

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(ACCESS_KEY)
      if (stored === 'granted') {
        setIsAuthorized(true)
      }
    }
  }, [])

  const handleUnlock = () => {
    setIsAuthorized(true)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(ACCESS_KEY, 'granted')
    }
  }

  if (!isAuthorized) {
    return <SplashGate logoSrc={picoIcon} onSuccess={handleUnlock} />
  }

  return (
    <div className="bg-brand-light text-brand-dark">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-brand-glow/15 via-brand-accent/10 to-transparent blur-3xl" />

        <header className="relative z-10 border-b border-brand-light bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
            <a href="#home" className="inline-flex items-center gap-4" aria-label="Pico Molecular">
              <img src={picoIcon} alt="Pico Molecular logo" className="h-12 w-auto" />
              <span className="hidden text-base font-semibold tracking-[0.32em] uppercase text-brand-dark sm:inline-flex lg:text-lg">
                Pico Molecular
              </span>
            </a>
            <div className="hidden items-center gap-8 text-sm font-medium text-brand-muted lg:flex">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-brand-primary">
                  {item.label}
                </a>
              ))}
        </div>
            <a
              href="#contact"
              className="hidden rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-primary/90 lg:inline-flex"
            >
              Request a Demo
            </a>
          </nav>
        </header>

        <main>
          <section id="home" className="relative isolate hero-section">
            <div
              className="hero-photo-bg"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,252,255,0.95) 50%, rgba(248,250,252,0.94) 100%), url(${heroBackdrop})`,
              }}
            />
            <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pt-20 pb-24 text-brand-dark lg:px-12 lg:pt-28 lg:pb-32">
              <div className="hero-brand">
                <img src={rithmLogoMark} alt="Rithm circular logo" className="hero-brand-mark" />
                <img src={rithmWord} alt="Rithm wordmark" className="hero-brand-word" />
                <p className="hero-tagline">“There&apos;s method in our magic.”</p>
                <p className="hero-summary">
                  Continuous hormone intelligence you can wear. The flagship modality of Pico Molecular delivers clinical-grade endocrine visibility without daily lab work.
                </p>
              </div>
            </div>
          </section>

          <section className="mission-vision-hero" style={{ backgroundImage: `url(${clinicalImpactScene})` }}>
            <div className="mission-vision-bg" aria-hidden="true" />
            <div className="mission-vision-container">
              <div className="mission-vision-grid">
                <div className="mission-vision-card mission-vision-card--mission">
                  <p className="mission-card__overline">Mission · What We&apos;re Building</p>
                  <h3 className="mission-card__title">Translate hormone signals into better outcomes.</h3>
                  <p className="mission-card__text">
                    We are developing wearable biosensors and AI biomarkers that aim to empower patients, equip clinicians, and unlock new standards of women’s health delivery as validation milestones are achieved.
                  </p>
                  <p className="mission-card__note">*Our mission defines the path forward; execution is underway and subject to validation and development milestones.*</p>
                </div>
                <div className="mission-vision-card mission-vision-card--vision">
                  <p className="mission-card__overline">Vision · Our North Star</p>
                  <h3 className="mission-card__title">Continuous molecular intelligence for every body.</h3>
                  <p className="mission-card__text">
                    Pico Molecular envisions a future where endocrine insight is ambient, proactive, and accessible — powering preventive care pathways across fertility, metabolic health, and healthy aging.
                  </p>
                  <p className="mission-card__note">*This vision represents our long-term goal and the impact we aspire to create.*</p>
                </div>
              </div>
            </div>
          </section>

          <section id="product" className="product-section bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 text-brand-dark lg:px-12 lg:py-20">
              <div className="mt-0 flex flex-col gap-12 lg:flex-row lg:items-start">
                <div className="order-2 flex-1 space-y-8 lg:order-1">
                  <span className="hero-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                    Next-Gen Hormone Biosensing
                  </span>
                  <h1 className="hero-heading font-display">
                    The Rithm Patch: The CGM for Hormones
                  </h1>
                  <p className="hero-subtext max-w-2xl text-base sm:text-lg">
                    Continuous, real-time hormone insight for a new era in women&apos;s health.
                  </p>
                  <div className="hero-metrics">
                    <div className="grid gap-6 text-center sm:grid-cols-4">
                      {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-dark/50">{stat.label}</p>
                          <p className="metric-value font-display text-3xl">{stat.value}</p>
                          <p className="text-xs text-brand-dark/70">{stat.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 flex-1 lg:order-2">
                  <div className="relative mx-auto max-w-md">
                    <div className="absolute -top-10 -right-10 hidden h-24 w-24 rounded-full bg-gradient-to-br from-brand-primary/40 to-brand-glow/30 blur-2xl sm:block" />
                    <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-brand-primary/15 via-white/10 to-brand-accent/15 shadow-2xl">
                      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59,130,246,0.45), transparent 50%)' }} />
                      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-glow/25 via-brand-primary/15 to-transparent blur-3xl" />
                      <div className="relative flex aspect-[3/4] items-end justify-center p-6">
                        <img src={heroImage} alt="Person wearing the Rithm Patch" className="h-full w-full rounded-3xl object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="feature-section mt-32">
            <div className="feature-container">
              <div className="feature-grid">
                {featureHighlights.map((card) => (
                  <div key={card.title} className={`feature-card feature-card--${card.tone}`}>
                    <p className="feature-card__label">{card.label}</p>
                    <h3 className="feature-card__title">{card.title}</h3>
                    <p className="feature-card__summary">{card.summary}</p>
                    {card.points && (
                      <ul className="feature-card__list">
                        {card.points.map((point) => (
                          <li key={point}>
                            <span />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
                  Inside the Patch
                </span>
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Layered engineering for trustworthy biosignals.</h2>
                <p className="text-brand-muted">
                  The Rithm Patch marries soft biointerfaces with ruggedized electronics so clinicians can trust every microvolt. Each layer is designed to stabilize data integrity from skin contact to cloud analytics.
                </p>
                <ul className="space-y-4 text-sm text-brand-dark/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span><strong>Hydrogel microneedles:</strong> Self-sealing microcolumns draw interstitial fluid while anti-biofouling coatings preserve signal clarity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span><strong>EAB sensor disc:</strong> Nanocomposite aptamers convert hormone binding events into stable electrochemical signatures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span><strong>Wireless module:</strong> Ultra-low-power telemetry syncs encrypted packets to the Pico Molecular data mesh in real time.</span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl border border-brand-light bg-brand-light/70 p-6 shadow-lg">
                <img src={patchExploded} alt="Exploded engineering view of the Rithm Patch" className="w-full object-contain" />
              </div>
            </div>
          </section>

          <section className="three-clicks-section bg-white">
             <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="three-clicks-header">
                <h2 className="three-clicks-title section-title font-display text-4xl text-brand-dark sm:text-5xl">From wear to wisdom in three clicks.</h2>
                <p className="three-clicks-subtitle section-subtitle text-brand-muted">
                  Microneedle arrays, electrochemical EAB sensors, and AI biomarker engines work together to transform surface-level sampling into clinically meaningful hormone intelligence.
                </p>
              </div>
              <div className="steps-flow steps-container">
                {steps.map((step, index) => (
                   <Fragment key={step.id}>
                    <div className="step-card-wrapper">
                      <div className="step-number">{step.id}</div>
                      <div className={`step-card ${step.gradientClass}`}>
                        <div className="step-icon" aria-hidden="true">
                          {step.icon}
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 ? (
                      <div className="step-arrow" aria-hidden="true">
                        <span className="step-arrow__desktop">→</span>
                        <span className="step-arrow__mobile">↓</span>
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-light/80">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-10 max-w-4xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Three protected innovation pillars.</h2>
                <p className="mt-4 text-brand-muted">
                  Each intellectual property aim anchors a different layer of the Rithm Patch stack, translating biochemical mastery into durable clinical value.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    heading: 'IP Aim 1',
                    title: 'Hydrogel microneedles',
                    description: 'Engineered for long, stable biofluid access with skin-friendly adhesion and day-long comfort.',
                  },
                  {
                    heading: 'IP Aim 2',
                    title: 'Nanocomposite EAB sensors',
                    description: 'Electrochemical aptamer-based sensing tuned for ultra-sensitive hormone capture at low concentrations.',
                  },
                  {
                    heading: 'IP Aim 3',
                    title: 'AI digital biomarkers',
                    description: 'Adaptive signal modeling converts raw hormone patterns into actionable insight and care pathways.',
                  },
                ].map((item) => (
                  <div key={item.heading} className="rounded-3xl border border-brand-light bg-white p-8 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{item.heading}</p>
                    <h3 className="mt-4 font-display text-2xl text-brand-dark">{item.title}</h3>
                    <p className="mt-4 text-sm text-brand-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-10 max-w-4xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Envisioned Impact.</h2>
                <p className="mt-4 text-brand-muted">
                  A glimpse of how Rithm could help patients, clinicians, and partners—once this vision becomes real.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-light bg-brand-light/70 shadow-sm">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={patientConfidence} alt="Member enjoying calm with hormone insight" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <h3 className="font-display text-2xl text-brand-dark">Patient (IVF | PMDD | PCOS)</h3>
                    <p className="text-base text-brand-dark/80">
                      Fewer needles. More clarity. Continuous hormone insight could make care less stressful and more personal.
                    </p>
                    <p className="mt-auto text-xs italic text-brand-muted/90">*Illustrative—based on our product vision.*</p>
                  </div>
                </div>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-light bg-white shadow-sm">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={ivfPartnership} alt="Clinician partnership supporting IVF couple" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <h3 className="font-display text-2xl text-brand-dark">Clinician</h3>
                    <p className="text-base text-brand-dark/80">
                      Objective trends at your fingertips—fewer blood draws, smarter timing, and data that translates into action.
                    </p>
                    <p className="mt-auto text-xs italic text-brand-muted/90">*Concept preview—not clinical guidance.*</p>
                  </div>
                </div>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-light bg-brand-light/70 shadow-sm">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={partnersUnique} alt="Partner ecosystem celebrating hormone clarity" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <h3 className="font-display text-2xl text-brand-dark">Partner</h3>
                    <p className="text-base text-brand-dark/80">
                      A new stream of longitudinal hormone data for research, trials, and digital health integrations.
                    </p>
                    <p className="mt-auto text-xs italic text-brand-muted/90">*Opportunity area—partnerships are targets, not yet formalized.*</p>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-center text-xs italic text-brand-muted/90">
                *These stories are aspirational and for private review. Not FDA-approved; not medical advice.*
              </p>
            </div>
          </section>

          <section className="bg-brand-light/70">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-8 max-w-4xl text-center">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">See how Rithm compares.</h2>
                <p className="mt-4 text-brand-muted">
                  A side-by-side view of continuous hormone intelligence versus legacy lab workflows and emerging competitors.
                </p>
              </div>
              <div className="comparison-table overflow-hidden rounded-3xl border border-brand-light bg-white shadow-sm">
                <div className="comparison-table__header grid grid-cols-4 bg-brand-dark text-white">
                  <div className="comparison-table__heading px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-light/70">Category</div>
                  <div className="comparison-table__heading px-6 py-4 text-lg font-semibold text-center">Rithm Patch</div>
                  <div className="comparison-table__heading px-6 py-4 text-lg font-semibold text-center">Blood Tests</div>
                  <div className="comparison-table__heading px-6 py-4 text-lg font-semibold text-center">Level Zero Health (LZH)</div>
                </div>
                {[
                  {
                    label: 'Continuous Monitoring',
                    rithm: 'Target: 24/7 hormone signal stream with adaptive AI coaching.',
                    blood: 'Status quo: Episodic draws capture isolated points.',
                    lzh: 'Current: Intermittent tracking with limited hormone scope.',
                  },
                  {
                    label: 'Pain Level',
                    rithm: 'Aspirational: Painless microneedle wear—no daily clinic visits.',
                    blood: 'Current: Invasive venipuncture and recurring appointments.',
                    lzh: 'Current: Low-discomfort surface sensors with narrow coverage.',
                  },
                  {
                    label: 'Data Intelligence',
                    rithm: 'Planned: Predictive digital biomarkers and integrated decision support.',
                    blood: 'Current: Manual interpretation with delays between draw and action.',
                    lzh: 'Current: Basic trend outputs and limited provider integrations.',
                  },
                  {
                    label: 'Clinical Workflow',
                    rithm: 'Vision: Embedded pathways, automation hooks, and care team alerts.',
                    blood: 'Current: Paper orders, manual scheduling, and follow-up calls.',
                    lzh: 'Current: Consumer-first flows; minimal clinic integration.',
                  },
                  {
                    label: 'IP Moat',
                    rithm: 'Strategy: Layered sensor, chemistry, and AI claims under development.',
                    blood: 'Current: Commodity lab infrastructure and processes.',
                    lzh: 'Current: Software-first IP; hardware sourced via partners.',
                  },
                  {
                    label: 'IP Protection',
                    rithm: 'Triple-layer patents planned.',
                    blood: 'Not applicable.',
                    lzh: 'Foundational UC patents.',
                  },
                ].map((row) => (
                  <div key={row.label} className="comparison-table__row grid grid-cols-4 border-t border-brand-light/60">
                    <div className="comparison-table__cell comparison-table__label px-6 py-5 text-sm font-semibold uppercase tracking-wide text-brand-muted">
                      {row.label}
                    </div>
                    <div className="comparison-table__cell px-6 py-5 text-sm text-brand-dark/80" data-label="Rithm Patch">
                      {row.rithm}
                    </div>
                    <div className="comparison-table__cell px-6 py-5 text-sm text-brand-dark/80" data-label="Blood Tests">
                      {row.blood}
                    </div>
                    <div className="comparison-table__cell px-6 py-5 text-sm text-brand-dark/80" data-label="Level Zero Health (LZH)">
                      {row.lzh}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] italic text-brand-muted/80">
                *All specifications are project targets; not yet validated. For private vision viewing only.*
              </p>
            </div>
          </section>

          <section className="bg-brand-light/70 mt-8">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
              <div className="order-2 space-y-6 lg:order-1">
                <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
                  Everyday adherence
                </span>
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Designed for real lives, not just lab visits.</h2>
                <p className="text-brand-muted">
                  Members wear Rithm like a wellness accessory while clinicians receive the fidelity of a research instrument. The consumer-grade onboarding keeps adoption high; the medical backbone keeps data unquestionable.
                </p>
                <ul className="space-y-4 text-sm text-brand-dark/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    Seamless pairing with the mobile app delivers personalised nudges without disrupting daily flow.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    Automatic escalation routes keep providers informed the moment hormone volatility appears.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    APIs feed partner ecosystems—from fertility coaching to employer wellness dashboards.
                  </li>
                </ul>
              </div>
              <div className="order-1 mb-10 overflow-hidden rounded-3xl border border-brand-light bg-white shadow-glow lg:order-2 lg:mb-0">
                <img src={lifestyleVisual} alt="Person reviewing hormone insights from the Rithm Patch at home" className="w-full object-cover" />
              </div>
            </div>
          </section>

          <section id="pillars" className="bg-brand-light/80">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="mb-12 max-w-3xl">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Modular building blocks for hormone health programs.</h2>
                <p className="mt-4 text-brand-muted">
                  Pair the wearable with the service modules you need—from continuous monitoring to engagement and analytics flows.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex h-full flex-col rounded-3xl border border-brand-light bg-white p-8 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-dark">{pillar.title}</h3>
                    <ul className="mt-6 space-y-4 text-sm text-brand-muted">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pipeline" className="relative overflow-hidden bg-brand-dark text-white">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.4), transparent 45%)' }} />
            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
              <div className="mb-12 max-w-3xl">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
                  Capture → Translate → Model → Deliver
                </span>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl">The hormone rhythm pipeline engineered for real-world care.</h2>
                <p className="mt-4 text-brand-light/80">
                  Every layer is purpose-built to honor the variability of human biology while maintaining clinical confidence and operational efficiency.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-4">
                {pipeline.map((step) => (
                  <div key={step.phase} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-2">
                    <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-brand-primary/40 to-brand-glow/30 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="text-sm font-semibold text-brand-accent">{step.phase}</p>
                    <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                    <p className="mt-4 text-sm text-brand-light/70">{step.description}</p>
                  </div>
                ))}
          </div>
        </div>
      </section>

          <section id="platform" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
              <div className="mb-12 max-w-4xl">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">One platform that harmonizes clinicians, members, and researchers.</h2>
                <p className="mt-4 text-brand-muted">
                  Rithm Patch is more than a wearable. It&apos;s an intelligent operating system that turns raw biosignals into shared progress.
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                {platformTiles.map((tile) => (
                  <div key={tile.heading} className="flex h-full flex-col rounded-3xl border border-brand-light bg-brand-light/70 p-8 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-dark">{tile.heading}</h3>
                    <ul className="mt-6 space-y-4 text-sm text-brand-muted">
                      {tile.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {tile.image ? (
                      <div className="mt-8 overflow-hidden rounded-2xl border border-white/60 bg-white">
                        <img src={tile.image} alt={tile.imageAlt} className={`h-full w-full ${tile.imageFit ?? 'object-cover'}`} />
                      </div>
                    ) : (
                      <div className="mt-8 rounded-2xl border border-dashed border-brand-primary/30 bg-white/80 p-4 text-xs text-brand-muted">
                        Placeholder visualization zone — swap with product screenshots or motion graphics.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="validation" className="relative bg-brand-light/60">
            <div className="absolute inset-x-0 -top-10 mx-auto h-20 max-w-5xl rounded-full bg-gradient-to-r from-brand-primary/20 via-brand-glow/10 to-transparent blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="validation-columns">
                <div className="validation-column validation-column--roadmap">
                  <h2 className="validation-roadmap__heading font-display text-4xl text-brand-dark sm:text-5xl">Validation Roadmap: Target Milestones</h2>
                  <p className="mt-4 text-brand-muted">
                    A forward-looking plan that outlines how Pico Molecular could prove safety, reliability, and regulatory readiness once prototypes are mature.
                  </p>
                  <div className="validation-roadmap mt-10">
                    {validationMilestones.map((milestone, index) => (
                      <div key={milestone.title} className="validation-step">
                        <div className="validation-step__marker">
                          <span>✓</span>
                        </div>
                        <div className="validation-step__body">
                          <p className="validation-step__title">{milestone.title}</p>
                          <p className="validation-step__detail">{milestone.detail}</p>
                        </div>
                        {index !== validationMilestones.length - 1 ? <div className="validation-step__connector" aria-hidden="true" /> : null}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-[13px] italic text-brand-muted/80">
                    *All milestones are targets and desired outcomes; not completed validations. Timeline subject to change pending development and funding.*
                  </p>
                </div>
                <aside className="validation-column validation-column--blueprint rounded-3xl border border-brand-light bg-white p-8 shadow-lg">
                  <h3 className="font-display text-2xl text-brand-dark">Program Blueprint Canvas</h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    Our internal roadmap canvas tracks key experiments, capital triggers, and strategic inputs needed to unlock each validation milestone as we progress toward clinical readiness.
                  </p>
                  <div className="mt-6 space-y-4 text-sm text-brand-dark/70">
                    <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/60 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-muted">Next Target</p>
                      <p className="mt-2 font-semibold">ISF-Serum Correlation Protocol (Partner Lab TBD, Post Hardware Beta)</p>
                    </div>
                    <div className="rounded-2xl border border-brand-primary/20 bg-brand-light/60 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-muted">Capital Trigger</p>
                      <p className="mt-2 font-semibold">FDA Pre-Sub Outreach (Target: Post Seed Round Close)</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section id="partners" className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="mb-10">
                <h2 className="font-display text-4xl text-brand-dark sm:text-5xl">Strategic Alignment: Target Partnership Ecosystem.</h2>
                <p className="mt-4 text-brand-muted">
                  We&apos;re building relationships with leading organizations across clinical, research, and commercial sectors—here&apos;s the vision for collaboration.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {partnerHighlights.map((partner) => (
                  <div key={partner.title} className="rounded-3xl border border-brand-light bg-brand-light/60 p-6 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-dark">{partner.title}</h3>
                    <p className="mt-4 text-sm text-brand-muted">{partner.detail}</p>
                    <div className="mt-6 text-sm text-brand-muted/80">We&apos;re actively exploring co-development models, pilot scopes, and integration paths with aligned partners.</div>
                  </div>
                ))}
          </div>
              <p className="mt-10 text-center text-xs italic text-brand-muted/80">
                *Partnerships represent strategic targets and opportunities; not yet formalized agreements. We are actively developing relationships with organizations aligned with our vision.*
              </p>
        </div>
      </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
              <div className="founder-profile">
                <div className="founder-photo">
                  <img src={teamPortrait} alt="Josephine Carr-Harris" className="founder-photo__img" />
                  <div className="founder-photo__glow" aria-hidden="true" />
                </div>
                <div className="founder-bio">
                  <p className="founder-bio__overline">Founder &amp; CEO</p>
                  <h2 className="founder-bio__name">Josephine Carr-Harris</h2>
                  <p className="founder-bio__text">
                    Josephine Carr-Harris is a digital health founder and CEO who blends biomedical engineering rigor with startup execution. An iBiomed graduate from McMaster University, she pairs technical fluency with strategic leadership to translate science into market-ready experiences.
                  </p>
                  <p className="founder-bio__text">
                    She has supported a $1.5M seed round, led deep-tech diligence, and architected go-to-market plans across early-stage ventures while guiding product design, business development, and innovation programs in the health ecosystem.
                  </p>
                </div>
              </div>

              <div className="advisor-section">
                <h3 className="advisor-section__heading">Target Advisory Expertise</h3>
                <p className="advisor-section__subtitle">
                  A world-class advisory network is critical to our vision. We&apos;re actively building relationships with leaders in the following fields:
                </p>
                <div className="advisor-grid">
                  {advisorExpertise.map((item) => (
                    <div key={item.label} className="advisor-card">
                      <div className="advisor-icon" aria-hidden="true">✶</div>
                      <div>
                        <h4 className="advisor-card__title">{item.label}</h4>
                        <p className="advisor-card__detail">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="advisor-disclaimer">
                  *Scientific advisory collaborations are aspirational and represent our intended fields of expertise; formal agreements are in development.*
                </p>
              </div>

            </div>
          </section>

          <section id="ip-strategy" className="ip-strategy-section bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
              <div className="mb-12 text-center">
                <h2 className="section-title font-display text-4xl text-brand-dark sm:text-5xl">Building the Moat: Our Three-Layer IP Strategy</h2>
                <p className="section-subtitle text-brand-muted">
                  Intellectual property isn&apos;t just protection—it&apos;s competitive advantage. Our patent strategy creates a defensible moat from the bio-interface to the AI layer.
                </p>
              </div>
              <div className="ip-cards-container">
                {ipLayers.map((layer) => (
                  <div key={layer.title} className="ip-card">
                    <span className="ip-card__icon" aria-hidden="true">{layer.icon}</span>
                    <h3 className="ip-card__title">{layer.title}</h3>
                    <ul className="ip-card__list">
                      {layer.bullets.map((item) => (
                        <li key={item.heading}>
                          <strong>{item.heading}</strong>
                          <span>{item.detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="ip-card__status">{layer.status}</p>
                  </div>
                ))}
              </div>
              <div className="freedom-to-operate-box">
                <h3 className="freedom-title">Freedom to Operate Strategy</h3>
                <p className="freedom-detail"><strong>Target License:</strong> University of Cincinnati foundational EAB sensor patents</p>
                <p className="freedom-detail"><strong>Strategy:</strong> Transform IP risk into competitive advantage through strategic licensing</p>
                <p className="freedom-detail"><strong>Timeline:</strong> Negotiations to commence post-seed funding</p>
              </div>
              <p className="ip-disclaimer">
                *Patent filings are in development. Provisional filing targets and timelines are estimates subject to research progress and funding.
              </p>
            </div>
          </section>

          <section id="contact" className="relative overflow-hidden bg-brand-dark text-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-glow/20" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:px-12">
              <div className="flex-1 space-y-6">
                <h2 className="font-display text-4xl sm:text-5xl">Let&apos;s build the future of hormone health together.</h2>
                <p className="mt-4 text-brand-light/80">
                  Share your program goals and we&apos;ll engineer a launch roadmap, integration plan, and success metrics tailored to your population.
                </p>
                <a
                  href="mailto:josephine@picomolecular.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact josephine@picomolecular.com
                </a>
              </div>
              <div className="flex-1">
                <form className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-sm font-medium text-brand-light/80">
                      Contact name
                      <input
                        type="text"
                        placeholder="Jordan Kim"
                        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                      />
                    </label>
                    <label className="text-sm font-medium text-brand-light/80">
                      Company
                      <input
                        type="text"
                        placeholder="Pico Molecular"
                        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                      />
                    </label>
                    <label className="text-sm font-medium text-brand-light/80">
                      Work email
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                      />
                    </label>
                    <label className="text-sm font-medium text-brand-light/80">
                      Program focus
                      <select className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white focus:border-brand-accent focus:outline-none">
                        <option value="" className="text-brand-dark">
                          Select
                        </option>
                        <option className="text-brand-dark">Perimenopause care</option>
                        <option className="text-brand-dark">Fertility support</option>
                        <option className="text-brand-dark">Endocrine recovery</option>
                        <option className="text-brand-dark">Research partnership</option>
                      </select>
                    </label>
                  </div>
                  <label className="mt-6 block text-sm font-medium text-brand-light/80">
                    Tell us more
                    <textarea
                      rows={4}
                      placeholder="Share goals, timeline, and success metrics."
                      className="mt-2 w-full rounded-2xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none"
                    />
                  </label>
                  <button
                    type="button"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:-translate-y-0.5 hover:bg-brand-light"
                  >
                    Submit interest
                  </button>
                  <p className="mt-4 text-xs text-brand-light/60">
                    This form is a visual placeholder. Connect to your preferred marketing automation or CRM when ready.
                  </p>
                </form>
              </div>
            </div>
          </section>

        </main>

        <footer className="border-t border-white/40 bg-white/80 py-10 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-brand-muted lg:px-12">
            <div className="flex flex-col items-center gap-4 sm:w-full sm:flex-row sm:items-start sm:justify-between">
              <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Pico Molecular. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-brand-primary">Privacy</a>
                <a href="#security" className="hover:text-brand-primary">Security</a>
                <a href="#press" className="hover:text-brand-primary">Press Kit</a>
              </div>
            </div>
            <p className="w-full text-center text-xs text-brand-muted">
              DISCLAIMER: This site presents a conceptual vision for Pico Molecular. Performance claims, partnerships, advisory relationships, and testimonials are aspirational and represent development targets. Not FDA-approved. For private evaluation only.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App