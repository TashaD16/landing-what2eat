"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { CTA_DOWNLOAD } from "@/lib/constants";

const APP_BASE = "https://what2eat-zeta.vercel.app";

const productHrefs = ["#features", "#how-it-works", "#pricing", CTA_DOWNLOAD];
const legalHrefs = [
  `${APP_BASE}/privacy`,
  `${APP_BASE}/terms`,
  `${APP_BASE}/cookies`,
];

export default function Footer() {
  const { t } = useLang();
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;
    window.location.href = `mailto:${t.footer.support.email}?subject=what2eat support&body=${encodeURIComponent(message)}`;
    setMessage("");
  }

  const productGroup = t.footer.groups[0];
  const legalGroup = t.footer.groups[1];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-nunito)] text-white text-xl font-extrabold mb-3">
              what2eat
            </p>
            <p className="text-sm leading-relaxed">{t.footer.brandTagline}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-[family-name:var(--font-nunito)] text-white font-bold mb-4">{productGroup.heading}</h4>
            <ul className="space-y-2">
              {productGroup.links.map((link, li) => (
                <li key={li}>
                  <a href={productHrefs[li]} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-[family-name:var(--font-nunito)] text-white font-bold mb-4">{t.footer.support.heading}</h4>
            <a
              href={`mailto:${t.footer.support.email}`}
              className="text-sm text-primary hover:text-white transition-colors block mb-4"
            >
              {t.footer.support.email}
            </a>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.footer.support.placeholder}
              rows={3}
              className="w-full bg-gray-800 text-gray-200 text-sm rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-primary mb-2"
            />
            <button
              onClick={handleSend}
              className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg py-2 transition-colors"
            >
              {t.footer.support.send}
            </button>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-[family-name:var(--font-nunito)] text-white font-bold mb-4">{legalGroup.heading}</h4>
            <ul className="space-y-2">
              {legalGroup.links.map((link, li) => (
                <li key={li}>
                  <a href={legalHrefs[li]} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} what2eat. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
