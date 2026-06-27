import {
  AlertTriangle,
  BadgeCheck,
  CalendarClock,
  ClipboardList,
  FileCheck2,
  FolderClock,
  Scale,
} from "lucide-react";
import { RentProofLogo } from "@/components/rentproof-logo";
import { WaitlistForm } from "@/components/waitlist-form";

const problemPoints = [
  {
    title: "The missing record usually appears too late",
    description:
      "A certificate, notice date, or arrears note can look fine until a Section 8 claim depends on it.",
    icon: AlertTriangle,
  },
  {
    title: "Scattered evidence weakens possession work",
    description:
      "If the file is spread across inboxes, folders, and messages, the chronology is harder to defend under pressure.",
    icon: Scale,
  },
  {
    title: "PRS Database rollout adds another deadline",
    description:
      "The register is expected to roll out by area from late 2026, which means more records need to be orderly before your area goes live.",
    icon: CalendarClock,
  },
] as const;

const benefitCards = [
  {
    title: "Evidence Readiness Snapshot",
    description:
      "A dated view showing exactly what is on file, what is missing, and what needs attention before you need to act.",
    icon: FileCheck2,
  },
  {
    title: "PRS Database Readiness Pack",
    description:
      "Keep the records the new register is expected to require already organised, so registration is far more straightforward when rollout reaches your area.",
    icon: ClipboardList,
  },
  {
    title: "Rent Arrears Evidence Ledger",
    description:
      "Maintain a clear arrears history, supporting notes, and payment chronology to help you prepare for Ground 8 cases.",
    icon: BadgeCheck,
  },
] as const;

const recordChecklist = [
  "Certificates, dates, and key tenancy records in one place",
  "Arrears evidence organised in a usable chronology",
  "PRS Database preparation before late-2026 local rollout",
] as const;

const faqItems = [
  {
    question: "What is the PRS Database and when does it launch?",
    answer:
      "The Private Rented Sector Database is a mandatory national register of private landlords and rental properties in England, introduced by the Renters' Rights Act 2025. Regional rollout is expected to begin from late 2026, with full national registration required progressively through 2027 and into 2028. An unregistered landlord cannot serve a valid Section 8 possession notice and faces fines of up to £40,000 for non-compliance. Landlords will need to provide gas safety certificates, EICRs, and EPCs for each registered property.",
  },
  {
    question: "What replaced Section 21 after it was abolished?",
    answer:
      "Section 21 no-fault evictions were abolished on 1 May 2026 under the Renters' Rights Act 2025. All private tenancies in England converted to assured periodic tenancies on that date. Landlords must now use Section 8 grounds for all possession claims, and every possession case requires a court hearing. A complete, ground-specific evidence trail is essential — a single gap in the record can cause a claim to be dismissed.",
  },
  {
    question: "What evidence does a landlord need for a Ground 8 possession claim?",
    answer:
      "Ground 8 is the mandatory rent arrears ground under Section 8. It now requires at least three months' rent arrears (for monthly tenancies) or 13 weeks' arrears (for weekly or fortnightly tenancies) at both the date notice is served and the date of the court hearing. A landlord needs a clear rent statement showing rent due, rent paid, balance, dates, and source documents. A valid gas safety certificate, EICR, protected deposit, and served prescribed information are also required before notice can be served on most grounds.",
  },
  {
    question: "What is an Evidence Readiness Snapshot?",
    answer:
      "An Evidence Readiness Snapshot is a dated record of exactly what compliance and possession evidence is on file for a property at a given point in time. It shows which items are evidenced with documents, which have been confirmed by the landlord, which are missing, and which are outside the scope of the current tool. It is designed to be reviewed with a solicitor before any possession action is taken, not used as a substitute for legal advice.",
  },
  {
    question:
      "Do England landlords need to provide the How to Rent guide to tenants under the new rules?",
    answer:
      "The requirements changed under the Renters' Rights Act 2025. For tenancies that existed before 1 May 2026 with written tenancy terms, landlords were required to provide the official Renters' Rights Act Information Sheet by 31 May 2026. Failure to do so carries a penalty of up to £7,000. For new tenancies, landlords must provide prescribed written information about the tenancy terms. The standard How to Rent guide requirement no longer applies in the same way it did under the pre-reform rules.",
  },
  {
    question: "Is RentProof legal advice?",
    answer:
      "No. RentProof is an evidence organisation and deadline tracking tool only. It helps landlords keep their compliance records in order and understand what is on file before a possession situation arises. It does not provide legal advice, does not interpret the law for any specific situation, and does not guarantee any outcome in court or with the PRS Database. Always seek qualified legal advice before serving a possession notice or taking any possession action.",
  },
  {
    question: "Which landlords is RentProof built for?",
    answer:
      "RentProof is built for self-managing landlords in England with between 5 and 50 residential properties. It is not currently available for landlords in Wales, Scotland, or Northern Ireland, which have separate possession legislation and compliance requirements.",
  },
] as const;

const disclaimer =
  "RentProof is an evidence organisation and deadline tracking tool only. It does not provide legal advice and does not guarantee any outcome in court or with the PRS Database. Always seek qualified legal advice before taking possession action.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "RentProof",
      url: "https://www.realtyclose.com",
      description:
        "RentProof is an evidence organisation and deadline tracking tool for England self-managing landlords preparing for Section 8 possession cases and PRS Database registration.",
      areaServed: {
        "@type": "Country",
        name: "England",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Self-managing residential landlords in England with 5 to 50 properties",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "RentProof",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.realtyclose.com",
      description:
        "Evidence organisation and deadline tracking for England self-managing landlords. Tracks certificates, organises possession evidence, maintains rent arrears chronology, and prepares landlords for PRS Database registration.",
      offers: {
        "@type": "Offer",
        price: "25.00",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "25.00",
          priceCurrency: "GBP",
          unitText: "per month minimum",
        },
      },
      featureList: [
        "Section 8 Evidence Readiness Snapshot",
        "PRS Database Readiness Pack",
        "Rent Arrears Evidence Ledger for Ground 8 cases",
        "Certificate expiry tracking for gas safety, EICR, and EPC",
        "Immutable audit log for court-useful evidence trail",
      ],
      areaServed: "England",
    },
    {
      "@type": "WebPage",
      name: "RentProof | Section 8 Evidence and PRS Database Readiness for England Landlords",
      url: "https://www.realtyclose.com",
      description:
        "Waitlist page for RentProof, an evidence and compliance tracking tool for England self-managing landlords preparing for Section 8 possession cases and the PRS Database rollout beginning late 2026.",
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        name: "RentProof",
        url: "https://www.realtyclose.com",
      },
      about: {
        "@type": "Thing",
        name: "PRS Database registration and Section 8 evidence preparation for England landlords",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,168,143,0.18),_transparent_32%),linear-gradient(180deg,_rgba(10,18,32,0.96),_rgba(10,18,32,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(236,242,238,0.16))]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <RentProofLogo tone="light" className="mb-8" />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-slate-300">
              <span
                className="flex h-4 w-6 overflow-hidden rounded-[3px] ring-1 ring-white/20"
                aria-hidden="true"
              >
                <svg viewBox="0 0 60 30" className="h-full w-full">
                  <clipPath id="union-jack-clip">
                    <rect width="60" height="30" rx="2" ry="2" />
                  </clipPath>
                  <g clipPath="url(#union-jack-clip)">
                    <rect width="60" height="30" fill="#012169" />
                    <path d="M0 0L60 30M60 0L0 30" stroke="#FFF" strokeWidth="6" />
                    <path
                      d="M0 0L60 30M60 0L0 30"
                      stroke="#C8102E"
                      strokeWidth="3"
                    />
                    <path d="M30 0V30M0 15H60" stroke="#FFF" strokeWidth="10" />
                    <path
                      d="M30 0V30M0 15H60"
                      stroke="#C8102E"
                      strokeWidth="6"
                    />
                  </g>
                </svg>
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              England-only for self-managing landlords
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get your compliance records ready before the next crisis — or
              before PRS registration hits your area.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              RentProof helps self-managing landlords in England organise
              certificates, evidence, and arrears records so possession claims
              are defensible and PRS Database registration is straightforward.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              England only · Possession evidence and PRS Database preparation ·
              For self-managing landlords with 5–50 properties
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-medium text-slate-950 transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Join the waitlist
              </a>
              <p className="text-sm text-slate-400">
                England-only • Built for self-managing landlords with 5–50
                properties
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              PRS Database rollout is expected by area from late 2026.
            </p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/6 p-7 text-slate-100 shadow-[0_30px_80px_-42px_rgba(2,6,23,0.85)] backdrop-blur-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
              <FolderClock className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              A calmer way to keep the file in order
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              RentProof is designed for the moment a landlord needs a clean,
              dated record, not a scramble through old folders and emails.
            </p>
            <div className="mt-6 space-y-3">
              {recordChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/30 px-4 py-4"
                >
                  <BadgeCheck
                    className="mt-0.5 h-4 w-4 flex-none text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section
        id="problem"
        className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-18"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            The real fear is discovering the evidence gap when you finally need
            to act.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Possession work and registration deadlines both become harder when
            the record is incomplete, badly dated, or spread across too many
            places.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {problemPoints.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.35)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
              What RentProof Does
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Three focused tools for evidence discipline and PRS readiness.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {benefitCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.4)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            PRS Database registration begins regionally from late 2026.
            Landlords who have their records organised before rollout hits their
            area will complete registration in minutes. Those who don&apos;t will
            scramble.
          </p>
        </div>
      </section>

      <section
        id="faq"
        className="border-b border-slate-200 bg-slate-950 text-slate-100"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.4)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
              Waitlist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Register interest for early access.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Early access is aimed at landlords in England who self-manage and
              want a more reliable record before a Section 8 issue or PRS
              Database deadline lands.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)] sm:p-8">
            <WaitlistForm disclaimer={disclaimer} />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 sm:px-8 lg:px-12">
          <RentProofLogo tone="light" showTagline={false} />
          <p className="text-sm text-slate-400">
            RentProof is an evidence organisation and deadline tracking tool for
            private residential landlords in England. It is not a legal service
            and does not provide legal advice. Section 8 possession claims
            require qualified legal representation.
          </p>
          <p className="text-sm text-slate-400">England only</p>
        </div>
      </footer>
    </main>
  );
}
