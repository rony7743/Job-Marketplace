"use client";

import Link from "next/link";
import { Briefcase, Plus, Search } from "lucide-react";
import { Button } from "./button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Briefcase className="size-4.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              TechJobs<span className="text-blue-600">.np</span>
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link href="/jobs" className="transition hover:text-blue-600">
            Explore Jobs
          </Link>
          <Link href="/jobs?remote=true" className="transition hover:text-blue-600">
            Remote Jobs
          </Link>
          <Link href="/jobs" className="transition hover:text-blue-600">
            Companies
          </Link>
          <Link href="/jobs" className="transition hover:text-blue-600">
            Salaries
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/jobs"
            className="hidden sm:inline-flex text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-1.5 transition"
          >
            Sign In
          </Link>

          <Link href="/jobs">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-500/20 rounded-lg gap-1.5"
            >
              <Plus className="size-3.5" />
              <span>Post a Job</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}