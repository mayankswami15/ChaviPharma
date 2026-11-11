import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 bg-background">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-8xl font-display font-bold text-navy/10 mb-4">
          404
        </div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-text-muted text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all group"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border-2 border-border text-navy font-semibold rounded-xl hover:border-teal hover:text-teal transition-all group"
          >
            View Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
