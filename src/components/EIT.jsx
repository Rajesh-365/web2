// path: src/sections/EIT.jsx
import React, { useMemo } from "react";
import { Target, Heart, BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logo2 from "../images/logo2.png";

const CARD_VARIANTS = [
  { icon: Target, color: "from-sky-400 to-blue-500" },
  { icon: Heart, color: "from-fuchsia-400 to-purple-500" },
  { icon: BookOpen, color: "from-orange-400 to-rose-500" },
];

export default function EIT({ logoSrc = logo2 }) {
  const { t } = useLanguage();

  const items = useMemo(
    () => [
      { ...CARD_VARIANTS[0], title: t("Our Mission"), description: t("eitDesc") },
      { ...CARD_VARIANTS[1], title: t("ourVision"), description: t("visionDesc") },
      { ...CARD_VARIANTS[2], title: t("ourMethod"), description: t("methodDesc") },
    ],
    [t]
  );

  return (
    <section
      id="eit"
      role="region"
      aria-labelledby="eit-heading"
      className="relative overflow-hidden bg-[#0b0d16]"
    >
      {/* Reduced overall width */}
      <div className="mx-auto w-full max-w-[1080px] px-4 py-10 md:py-14">
        {/* ===== top row: logo • content (tight) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-[17rem_1fr] items-stretch gap-3 md:gap-4">
          {/* left: square logo card */}
          <div className="w-full">
            <div className="rounded-2xl bg-white dark:bg-[#0f1426] p-2 ring-1 ring-black/5 dark:ring-white/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,.5)]">
              <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0e1222]">
                <img
                  src={logoSrc}
                  alt={t("eitTitle")}
                  className="block w-full aspect-square object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* right: tight dark panel */}
          <div className="w-full">
            <div className="h-full rounded-xl bg-[#0e1222] ring-1 ring-white/10 shadow-[0_20px_45px_-25px_rgba(0,0,0,.6)] px-5 py-6 md:px-6 md:py-7">
              <h2
                id="eit-heading"
                className="uppercase font-extrabold tracking-wide text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(1.1rem, 2.1vw, 1.55rem)", // compact one line
                }}
                title={t("eitTitle")}
              >
                {t("eitTitle")}
              </h2>
              <div className="mt-2 h-[3px] w-28 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />
              <p className="mt-4 text-[15px] md:text-[17px] leading-7 text-gray-200">
                {t("eitDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* ===== bottom: tray with 3 cards (inherits reduced width) ===== */}
        <div className="mt-8 md:mt-10 rounded-2xl bg-gradient-to-br from-[#0f1631] via-[#0b1227] to-[#0b0f1f] ring-1 ring-white/10 px-4 py-6 md:px-6 md:py-8 shadow-[0_30px_60px_-35px_rgba(0,0,0,.6)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {items.map((it, i) => (
              <article key={i} className="flex">
                <div
                  className="
                    group flex flex-col h-full w-full
                    rounded-2xl bg-[#0e1222]
                    ring-1 ring-white/10
                    shadow-[inset_0_0_0_1px_rgba(255,255,255,.04),0_10px_25px_-20px_rgba(0,0,0,.7)]
                    px-6 py-7 text-center
                    transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-lg
                  "
                >
                  <div
                    className={`mx-auto w-11 h-11 rounded-full grid place-items-center
                                bg-gradient-to-br ${it.color} shadow ring-1 ring-white/40
                                transition-transform duration-300 group-hover:scale-110`}
                  >
                    <it.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="mt-4 text-[15px] font-semibold text-white">
                    {it.title}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-relaxed text-gray-300">
                    {it.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
