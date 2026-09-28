"use client";

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { FiArrowUpRight, FiMapPin, FiBarChart2, FiBriefcase } from 'react-icons/fi';
import { FaYoutube, FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { SiWebflow, SiSpotify, SiNetflix } from 'react-icons/si';

export interface JobCardProps {
  company: string;
  logoUrl?: string | StaticImageData;
  brandColor?: string;
  brandIcon?: React.ReactNode;
  title: string;
  description: string;
  location: string;
  level?: string;
  category?: string;
  salary?: string;
  type?: string;
  tags?: string[];
  posted?: string;
  applyUrl: string;
  isSelected?: boolean;
  className?: string;
}

// Helper to render authentic brand logos like Jobboardly Webflow template
function getBrandVisual(company: string, logoUrl?: string | StaticImageData, brandColor?: string, brandIcon?: React.ReactNode) {
  if (brandIcon) {
    return (
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm text-white ${
          brandColor || 'bg-blue-600'
        }`}
      >
        {brandIcon}
      </div>
    );
  }

  const name = company.toLowerCase().trim();

  if (name.includes('youtube')) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF0000] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <FaYoutube className="h-7 w-7" />
      </div>
    );
  }

  if (name.includes('facebook') || name.includes('meta')) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <FaFacebookF className="h-6 w-6" />
      </div>
    );
  }

  if (name.includes('webflow')) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#146EF5] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <SiWebflow className="h-6 w-6" />
      </div>
    );
  }

  if (name.includes('google')) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4285F4] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <FaGoogle className="h-6 w-6" />
      </div>
    );
  }

  if (name.includes('spotify')) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1DB954] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <SiSpotify className="h-7 w-7" />
      </div>
    );
  }

  if (name.includes('netflix')) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <SiNetflix className="h-6 w-6" />
      </div>
    );
  }

  if (logoUrl) {
    return (
      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logoUrl}
          alt={company}
          width={44}
          height={44}
          className="object-contain"
        />
      </div>
    );
  }

  // Default clean gradient with company initials
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white font-extrabold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 ${
        brandColor || 'bg-gradient-to-tr from-blue-600 to-indigo-600'
      }`}
    >
      {company.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function JobCard({
  company,
  logoUrl,
  brandColor,
  brandIcon,
  title,
  description,
  location,
  level = 'Mid-level',
  category = 'Engineering',
  salary,
  type,
  applyUrl,
  isSelected = false,
  className = '',
}: JobCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-white p-8 transition-all duration-300 transform-gpu will-change-transform ${
        isSelected
          ? 'border-2 border-blue-500 shadow-md ring-4 ring-blue-500/10'
          : 'border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/60'
      } ${className}`}
    >
      <div>
        {/* Top Header: Brand App Icon & Arrow Up Right Button */}
        <div className="flex items-start justify-between">
          {getBrandVisual(company, logoUrl, brandColor, brandIcon)}

          <Link
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} position`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 bg-white text-slate-400 transition-all duration-200 hover:border-blue-500 hover:text-blue-600 hover:bg-slate-50/50 shadow-2xs"
          >
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Company & Title */}
        <div className="mt-6">
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
            {company}
          </span>
          <Link href={applyUrl} target="_blank" rel="noopener noreferrer">
            <h3
              className={`mt-1.5 text-xl font-bold tracking-tight transition-colors line-clamp-1 ${
                isSelected
                  ? 'text-blue-600'
                  : 'text-slate-900 group-hover:text-blue-600'
              }`}
            >
              {title}
            </h3>
          </Link>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Badges Section */}
      <div className="mt-8 flex flex-col gap-2 text-xs font-medium text-slate-700">
        {/* Row 1: Location & Experience Level */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <FiMapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>{location}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <FiBarChart2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>{level}</span>
          </span>
        </div>

        {/* Row 2: Category & optional Salary/Type */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <FiBriefcase className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>{category}</span>
          </span>

          {salary && (
            <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 font-semibold text-emerald-700 shadow-2xs">
              <span>{salary}</span>
            </span>
          )}

          {type && !salary && (
            <span className="inline-flex items-center gap-1 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 font-semibold text-blue-700">
              <span>{type}</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}