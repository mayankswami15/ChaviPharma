"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import type { EnquiryType } from "@/types/product";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultType = (searchParams.get("type") as EnquiryType) || undefined;
  const defaultProduct = searchParams.get("product") || undefined;

  return (
    <EnquiryForm defaultType={defaultType} defaultProduct={defaultProduct} />
  );
}

export function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="py-8 text-center text-sm text-text-muted">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
