"use client"
import dynamic from "next/dynamic";
import { portfolioContent, type PortfolioContent } from "@/data";
import { useEffect, useState } from "react";
// Dynamic imports with ssr: false
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavBar").then((mod) => mod.FloatingNav),
  { ssr: false }
);

export default function Home() {
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBaseUrl) {
      setContent(portfolioContent);
      setIsLoading(false);
      return;
    }

    fetch(`${apiBaseUrl}/api/portfolio`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setContent({ ...portfolioContent, ...data });
          return;
        }

        setContent(portfolioContent);
      })
      .catch(() => {
        setContent(portfolioContent);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !content) {
    return <PortfolioSkeleton />;
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={content.navItems}/>
        <Hero content={content.heroContent}/>
        <Grid items={content.gridItems}/>
      <RecentProjects items={content.projects}/>
      <Clients items={content.testimonials}/>
      <Experience items={content.workExperience}/>
      <Approach/>
      <Footer items={content.socialMedia}/>
      </div>
    </main>
  );
}

function PortfolioSkeleton() {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full mx-auto py-10">
        <div className="flex justify-center">
          <div className="h-10 w-[420px] max-w-full rounded-lg bg-white/10 animate-pulse" />
        </div>

        <section className="min-h-[72vh] flex flex-col items-center justify-center gap-5">
          <div className="h-4 w-60 rounded bg-white/10 animate-pulse" />
          <div className="h-14 w-[760px] max-w-full rounded bg-white/10 animate-pulse" />
          <div className="h-14 w-[620px] max-w-[90%] rounded bg-white/10 animate-pulse" />
          <div className="h-5 w-[520px] max-w-[85%] rounded bg-white/10 animate-pulse" />
          <div className="h-12 w-44 rounded-lg bg-white/10 animate-pulse" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 pb-20">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="min-h-40 rounded-3xl border border-white/[0.1] bg-white/5 animate-pulse"
              key={index}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
