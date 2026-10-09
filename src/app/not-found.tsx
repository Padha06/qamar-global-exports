import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden pt-[68px]">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.10),transparent_65%)] blur-2xl" />
      <div className="container-px relative text-center">
        <Compass className="mx-auto h-10 w-10 text-orange-500" />
        <p className="mt-6 font-display text-6xl font-bold tracking-tightest text-navy-900">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-navy-900 sm:text-3xl">This page has sailed off</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          The page you were looking for doesn&apos;t exist. Let&apos;s get you back to the goods.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact#rfq">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
