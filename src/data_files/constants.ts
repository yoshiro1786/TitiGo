import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "ScrewFast",
  tagline: "Top-quality Hardware Tools",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://screwfast.uk",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

export const partnersData = [
    {
      icon: `<img
        src="/partners/AERO.png"
        alt="Aeropuertos Andinos del Perú (plomo)"
        class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
        width="150" height="40"
        loading="lazy" decoding="async"
      />`,
      name: "first",
      href: "#",
    },
    {
      icon: `<img
        src="/partners/30-aniv-logo.png"
        alt="Aeropuertos Andinos del Perú (plomo)"
        class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
        width="150" height="40"
        loading="lazy" decoding="async"
      />`,
      name: "first",
      href: "#",
    },
    {
      icon: `<img
        src="/partners/CA_LOGOVERSIONB.png"
        alt="Aeropuertos Andinos del Perú (plomo)"
        class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
        width="150" height="40"
        loading="lazy" decoding="async"
      />`,
      name: "first",
      href: "#",
    },

    {
      icon: `<img
        src="/partners/sonesta.png"
        alt="Aeropuertos Andinos del Perú (plomo)"
        class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
        width="150" height="40"
        loading="lazy" decoding="async"
      />`,
      name: "first",
      href: "#",
    },

    // {
    //   icon: `<img
    //     src="/partners/hilton.png"
    //     alt="Aeropuertos Andinos del Perú (plomo)"
    //     class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
    //     width="150" height="40"
    //     loading="lazy" decoding="async"
    //   />`,
    //   name: "first",
    //   href: "#",
    // },
]