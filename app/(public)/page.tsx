import Link from "next/link";
import {
  Search,
  MapPin,
  Wifi,
  ArrowRight,
  Briefcase,
  Sparkles,
  TrendingUp,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/home/jobs/page";
import { FadeUp } from "@/components/ui/fade-up";
import { Navbar } from "@/components/ui/navbar";
import logo from "../../public/logo/logo.png";
import facebook from "../../public/logo/facebook.png";
import youtube from "../../public/logo/youtube.png";

const demoJobs = [
  {
    title: "Customer support agent",
    company: "YOUTUBE",
    location: "Austin, TX",
    level: "Junior",
    category: "Business",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elitsed eiusmod tempor.",
    logoUrl: youtube,
    applyUrl: "/jobs",
    isSelected: false,
  },
  {
    title: "React Native Developer",
    company: "FACEBOOK",
    location: "Austin, TX",
    level: "Senior",
    category: "Development",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elitsed eiusmod tempor.",
    logoUrl: facebook,
    applyUrl: "/jobs",
    isSelected: true,
  },
  {
    title: "Video marketing producer",
    company: "WEBFLOW",
    location: "Remote",
    level: "Senior",
    category: "Marketing",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elitsed eiusmod tempor.",
    applyUrl: "/jobs",
    isSelected: false,
  },
  {
    title: "Cloud Solutions Architect",
    company: "GOOGLE",
    location: "New York, NY",
    level: "Senior",
    category: "Design",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elitsed eiusmod tempor.",
    applyUrl: "/jobs",
    isSelected: false,
  },
  {
    title: "Backend Systems Engineer",
    company: "SPOTIFY",
    location: "Remote",
    level: "Senior",
    category: "Development",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elitsed eiusmod tempor.",
    applyUrl: "/jobs",
    isSelected: false,
  },
  {
    title: "Lead Product Designer",
    company: "NETFLIX",
    location: "Miami, FL",
    level: "Executive",
    category: "Design",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elitsed eiusmod tempor.",
    applyUrl: "/jobs",
    isSelected: false,
  },
];

const popularTech = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Flutter",
  "DevOps",
  "AI / ML",
];

const stats = [
  { label: "Active Tech Jobs", value: "1,200+", icon: Briefcase },
  { label: "Verified Companies", value: "380+", icon: Building2 },
  { label: "Avg. Tech Salary", value: "NPR 95k/mo", icon: TrendingUp },
  { label: "Salary Transparency", value: "100%", icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
          {/* Subtle Ambient Background Lighting */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(37,99,235,0.12),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28 text-center">
            {/* High-Contrast Badge */}
            <FadeUp delay={0.05} className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-2xs backdrop-blur-xs">
                <Sparkles className="size-3.5 text-blue-600" />
                <span>#1 Tech Career Platform in Nepal</span>
              </div>
            </FadeUp>

            {/* Main Headline */}
            <FadeUp delay={0.15}>
              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.12]">
                Find your dream tech job with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  verified salaries
                </span>
              </h1>
            </FadeUp>

            {/* Subheading */}
            <FadeUp delay={0.25}>
              <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed">
                Discover curated software, design, and DevOps roles from Nepal&apos;s
                leading tech startups and global remote companies. All with transparent pay in NPR.
              </p>
            </FadeUp>

            {/* Hero Search Box */}
            <FadeUp delay={0.35} className="mx-auto mt-9 max-w-3xl">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl shadow-slate-200/60 transition-all hover:border-slate-300">
                {/* Job Title / Skill Input */}
                <div className="flex flex-1 items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                  <Search className="size-4.5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company..."
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 sm:w-48">
                  <MapPin className="size-4.5 text-slate-400 shrink-0" />
                  <select className="w-full bg-transparent text-sm text-slate-700 focus:outline-none cursor-pointer">
                    <option value="">All Locations</option>
                    <option value="kathmandu">Kathmandu</option>
                    <option value="lalitpur">Lalitpur</option>
                    <option value="pokhara">Pokhara</option>
                    <option value="remote">Remote Only</option>
                  </select>
                </div>

                {/* Submit Action */}
                <Link href="/jobs" className="sm:shrink-0">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 shadow-md shadow-blue-500/25 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Search Jobs
                  </Button>
                </Link>
              </div>
            </FadeUp>

            {/* Popular Quick Pills */}
            <FadeUp delay={0.45}>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs">
                <span className="font-semibold text-slate-500">Trending Skills:</span>
                {popularTech.map((tech) => (
                  <Link
                    key={tech}
                    href={`/jobs?tech=${encodeURIComponent(tech)}`}
                    className="rounded-lg border border-slate-200/90 bg-white/90 px-3 py-1 font-medium text-slate-600 shadow-2xs transition-all hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600"
                  >
                    {tech}
                  </Link>
                ))}
                <Link
                  href="/jobs?remote=true"
                  className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-1 font-semibold text-emerald-700 shadow-2xs hover:bg-emerald-100/70 transition"
                >
                  <Wifi className="size-3" />
                  <span>Remote Only</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Social Proof / Stats Strip */}
          <div className="border-t border-slate-100 bg-slate-50/60 py-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      <item.icon className="size-4.5 text-blue-600" />
                      <span>{item.value}</span>
                    </div>
                    <span className="mt-1 text-xs font-medium text-slate-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Job Listings Section */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <FadeUp delay={0.1}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Featured Vacancies
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Latest Tech Opportunities
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Updated hourly with verified compensation details in NPR.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group"
              >
                <span>Browse all {demoJobs.length * 20}+ jobs</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>

          {/* Jobs Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {demoJobs.map((job, index) => (
              <FadeUp key={job.title} delay={0.08 * (index % 6)}>
                <JobCard
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  level={job.level}
                  category={job.category}
                  description={job.description}
                  logoUrl={job.logoUrl}
                  applyUrl={job.applyUrl}
                  isSelected={job.isSelected}
                />
              </FadeUp>
            ))}
          </div>

          {/* Section Footer CTA */}
          <div className="mt-12 text-center">
            <Link href="/jobs">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 shadow-xs"
              >
                Load More Open Positions
              </Button>
            </Link>
          </div>
        </section>

        {/* Post a Job CTA Banner */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <FadeUp delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-12 text-white shadow-xl shadow-blue-600/20">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs text-white">
                  For Employers & Startups
                </span>
                <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Hiring top tech talent in Nepal?
                </h3>
                <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                  Connect with over 15,000+ developers, designers, and tech leaders.
                  Post a vacancy in under 2 minutes and start receiving verified applications.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/jobs">
                    <Button
                      size="lg"
                      className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 rounded-xl shadow-md"
                    >
                      Post a Job for NPR 0
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-100">
                    <CheckCircle2 className="size-4 text-emerald-300" />
                    <span>Instant distribution to Telegram & LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Decorative Background Blob */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
            </div>
          </FadeUp>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                TJ
              </div>
              <span className="font-bold text-slate-800 tracking-tight">
                TechJobs Nepal
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
              <Link href="/jobs" className="hover:text-blue-600 transition">
                Find Jobs
              </Link>
              <Link href="/jobs?remote=true" className="hover:text-blue-600 transition">
                Remote Work
              </Link>
              <Link href="/jobs" className="hover:text-blue-600 transition">
                Salary Explorer
              </Link>
              <Link href="/jobs" className="hover:text-blue-600 transition">
                Terms & Privacy
              </Link>
            </div>

            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} TechJobs.np. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}