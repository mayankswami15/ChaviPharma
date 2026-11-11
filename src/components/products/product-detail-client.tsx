"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Package,
  Pill,
  Ruler,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Thermometer,
  Syringe,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
} from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductDetailClientProps {
  slug: string;
}

export function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const product = getProductBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lightbox & Zoom States
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!product) {
    notFound();
  }

  // Build gallery: main image + slideshow images
  const galleryImages: { src: string; alt: string }[] = [
    { src: product.image, alt: `${product.name} - Product` },
  ];
  if (product.slideImages) {
    product.slideImages.forEach((img, i) =>
      galleryImages.push({
        src: img,
        alt: `${product.name} - View ${i + 2}`,
      })
    );
  }

  const prevImage = () =>
    setActiveImageIndex((i) =>
      i === 0 ? galleryImages.length - 1 : i - 1
    );
  const nextImage = () =>
    setActiveImageIndex((i) =>
      i === galleryImages.length - 1 ? 0 : i + 1
    );

  const resetZoom = () => {
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleOpenLightbox = () => {
    resetZoom();
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    resetZoom();
  };

  const handlePrevImage = () => {
    resetZoom();
    prevImage();
  };

  const handleNextImage = () => {
    resetZoom();
    nextImage();
  };

  const zoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.5, 4));
  };

  const zoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const toggleZoom = () => {
    if (zoomScale > 1) {
      resetZoom();
    } else {
      setZoomScale(2.5);
    }
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isLightboxOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  // Mouse wheel zoom in lightbox
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      setZoomScale((prev) => Math.min(prev + 0.25, 4));
    } else {
      setZoomScale((prev) => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPanPosition({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Drag / pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomScale <= 1) return;
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomScale <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - panPosition.x,
      y: e.touches[0].clientY - panPosition.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || zoomScale <= 1 || e.touches.length !== 1) return;
    setPanPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-background border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-teal transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-navy font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-text-muted hover:text-teal transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="relative">
              {/* Main Image with Zoom Trigger */}
              <div
                onClick={handleOpenLightbox}
                className="group aspect-square rounded-2xl bg-gradient-to-br from-background to-teal/5 border border-border-light overflow-hidden relative cursor-zoom-in"
                title="Click to view full image and zoom"
              >
                <Image
                  src={galleryImages[activeImageIndex].src}
                  alt={galleryImages[activeImageIndex].alt}
                  fill
                  className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-300"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Click to Zoom Pill */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5 text-teal" />
                  <span>Click to zoom</span>
                </div>

                {/* Navigation arrows (e.stopPropagation to keep on page) */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-navy" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-navy" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={cn(
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 overflow-hidden relative shrink-0 transition-all",
                        i === activeImageIndex
                          ? "border-teal ring-2 ring-teal/20"
                          : "border-border-light hover:border-teal/40"
                      )}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain p-1"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal text-xs font-semibold rounded-full mb-4 capitalize">
                {product.category}
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
                {product.name}
              </h1>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Product Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-background border border-border-light">
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className="w-4 h-4 text-teal" />
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Composition
                    </span>
                  </div>
                  <p className="text-sm font-medium text-navy">
                    {product.composition}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border-light">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-teal" />
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Dosage Form
                    </span>
                  </div>
                  <p className="text-sm font-medium text-navy">
                    {product.dosageForm}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border-light">
                  <div className="flex items-center gap-2 mb-2">
                    <Ruler className="w-4 h-4 text-teal" />
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Pack Size
                    </span>
                  </div>
                  <p className="text-sm font-medium text-navy">
                    {product.packSize}
                  </p>
                </div>
                {product.dosage && (
                  <div className="p-4 rounded-xl bg-background border border-border-light">
                    <div className="flex items-center gap-2 mb-2">
                      <Syringe className="w-4 h-4 text-teal" />
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Dosage
                      </span>
                    </div>
                    <p className="text-sm font-medium text-navy">
                      {product.dosage}
                    </p>
                  </div>
                )}
              </div>

              {/* Uses */}
              {product.uses && product.uses.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Stethoscope className="w-4 h-4 text-teal" />
                    <h2 className="font-display font-semibold text-sm text-navy uppercase tracking-wider">
                      Uses / Indications
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <span
                        key={use}
                        className="px-3 py-1.5 bg-teal/8 text-teal text-xs font-medium rounded-lg"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage */}
              {product.storage && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Thermometer className="w-4 h-4 text-teal" />
                    <h2 className="font-display font-semibold text-sm text-navy uppercase tracking-wider">
                      Storage
                    </h2>
                  </div>
                  <p className="text-sm text-text-muted">
                    {product.storage}
                  </p>
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-display font-semibold text-lg text-navy mb-3">
                  Product Information
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?product=${product.slug}`}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 group"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Enquire About This Product
                </Link>
                <a
                  href={`https://wa.me/918000516545?text=${encodeURIComponent(`Hi I want to enquire for medicines - ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5A] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between animate-fade-in select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget && zoomScale === 1) {
              handleCloseLightbox();
            }
          }}
        >
          {/* Top Bar: Title & Controls */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-20">
            <div className="text-white">
              <h3 className="font-semibold text-sm sm:text-base">
                {product.name}
              </h3>
              <p className="text-xs text-white/60">
                Image {activeImageIndex + 1} of {galleryImages.length}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                disabled={zoomScale <= 1}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-white/10 transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-xs text-white font-mono min-w-[45px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={zoomScale >= 4}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-white/10 transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              {zoomScale > 1 && (
                <button
                  onClick={resetZoom}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Reset Zoom"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              )}
              <div className="w-px h-6 bg-white/20 mx-1" />
              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors"
                title="Close (Esc)"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Canvas */}
          <div
            className="flex-1 relative overflow-hidden flex items-center justify-center p-4"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={toggleZoom}
          >
            <div
              className="relative max-w-full max-h-full transition-transform duration-100 ease-out flex items-center justify-center"
              style={{
                transform: `scale(${zoomScale}) translate(${panPosition.x / zoomScale}px, ${panPosition.y / zoomScale}px)`,
                cursor:
                  zoomScale > 1
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "zoom-in",
              }}
            >
              <img
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                className="max-h-[75vh] max-w-[85vw] object-contain drop-shadow-2xl pointer-events-none select-none"
                draggable={false}
              />
            </div>

            {/* Prev / Next buttons in modal */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-all z-20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-all z-20"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Hint overlay at the bottom of the canvas */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur text-white/70 text-xs pointer-events-none z-10 hidden sm:block">
              {zoomScale > 1
                ? "Drag to pan • Double-click or click Reset to fit"
                : "Double-click or scroll mouse wheel to zoom"}
            </div>
          </div>

          {/* Bottom Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-3 z-20 overflow-x-auto">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    resetZoom();
                    setActiveImageIndex(i);
                  }}
                  className={cn(
                    "w-16 h-16 rounded-xl border-2 overflow-hidden relative shrink-0 transition-all bg-white/5",
                    i === activeImageIndex
                      ? "border-teal ring-2 ring-teal/50 scale-105"
                      : "border-white/20 hover:border-white/50 opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
