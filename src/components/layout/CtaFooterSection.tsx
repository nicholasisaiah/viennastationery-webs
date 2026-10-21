"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export function CtaFooterSection() {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Paper-textured CTA Banner */}
      <PaperTextureBackground variant="gray" className="py-20 md:py-28 text-center border-b border-vienna-lavender/50">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="font-outfit font-extrabold text-vienna-text-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            {t("cta.headline")}
          </h2>
          <p className="handwritten text-vienna-text-muted text-xl sm:text-2xl pt-1">
            {t("cta.sub")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/journal" variant="primary" size="lg" ariaLabel="Jelajahi Jurnal">
              {t("nav.journal")}
            </Button>
            <Button
              href="https://id.shp.ee/JDMuodop"
              variant="secondary"
              size="lg"
              ariaLabel={t("shop.visitShopee")}
            >
              {t("cta.btn")}
            </Button>
          </div>
        </div>
      </PaperTextureBackground>

      {/* Footer */}
      <Footer />
    </div>
  );
}
