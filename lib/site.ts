/**
 * Àmú Lahore — single source of truth for contact + content status.
 * Unverified claims are NEVER rendered as fact; see content-sources.md.
 *
 * Photography: licensed illustrative editorial photos (Unsplash + Wikimedia),
 * verified by viewing each file. They show the *style* of fine dining — never
 * Àmú's own room, dishes, chefs or guests. See content-sources.md.
 */

export const SITE = {
  name: "Àmú Lahore",
  tagline: "A private house with the soul of a French table.",
  address: "6-A Canal Park, Gulberg II, Lahore",
  phoneDisplay: "0300-8180918",
  phoneHref: "tel:+923008180918",
  whatsapp: "923008180918",
  servicePattern: "Friday–Saturday chef's tasting · Saturday–Sunday brunch",
  heroH1: "Less is More. It's All About Food.",
  heroSub:
    "An intimate French table in Gulberg II — a tasting dinner on Friday and Saturday, and brunch on Saturday and Sunday. Limited seats, by enquiry.",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=6-A+Canal+Park+Gulberg+II+Lahore",
  photoNote: "Photography is illustrative of the style — final dishes, room and team confirmed on enquiry.",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type HeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

/** Continuous cinematic crossfade order: service → craft → dessert. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/hero-table.jpg",
    alt: "Candlelit fine-dining table with a plated salmon dish being served and wine glasses",
    width: 1920,
    height: 1280,
    position: "50% 60%",
  },
  {
    src: "/images/hero-plating.jpg",
    alt: "Hands preparing fresh herbs and salmon on a kitchen board",
    width: 1600,
    height: 1067,
    position: "50% 40%",
  },
  {
    src: "/images/dessert.jpg",
    alt: "Layered berry dessert slice on a dark plate",
    width: 800,
    height: 1000,
    position: "50% 45%",
  },
];

export type MenuItem = {
  name: string;
  img: string;
  alt: string;
  desc?: string;
  status: "to-confirm";
};

/**
 * Brunch names supplied in brief; photos illustrative, each verified by viewing.
 * Eggs Royale + Omelet descriptions verified via HuffPost contributor review
 * of Àmú Sunday brunch (Mansour Ahsan, Jan 2018).
 */
export const BRUNCH_ITEMS: MenuItem[] = [
  {
    name: "Eggs Royale",
    img: "/images/brunch-morning.jpg",
    alt: "Eggs Benedict with smoked salmon and hollandaise",
    desc: "Eggs on sourdough with salmon and hollandaise, potatoes and salad leaves — “a slight twist to the traditional Eggs Benedict” (2018 press).",
    status: "to-confirm",
  },
  {
    name: "Omelet",
    img: "/images/brunch-eggs.jpg",
    alt: "Fried egg on avocado toast",
    desc: "Made “fluffy, consistent and utterly appetising” (2018 press). Exact fillings confirmed on enquiry.",
    status: "to-confirm",
  },
  {
    name: "Croque Madame",
    img: "/images/brunch-sandwich.jpg",
    alt: "Grilled toasted sandwich with dips",
    status: "to-confirm",
  },
  {
    name: "Shakshuka",
    img: "/images/brunch-shakshuka.jpg",
    alt: "Tomato shakshuka with za'atar flatbread",
    status: "to-confirm",
  },
  {
    name: "French Toast",
    img: "/images/brunch-frenchtoast.jpg",
    alt: "French toast with banana and blueberries",
    status: "to-confirm",
  },
  {
    name: "Fish Tacos",
    img: "/images/brunch-tacos.jpg",
    alt: "Grilled fish tacos with rice and salsas",
    status: "to-confirm",
  },
  {
    name: "Brisket",
    img: "/images/brunch-meat.jpg",
    alt: "Sliced steak with fries",
    status: "to-confirm",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  large?: boolean;
};

export const GALLERY: GalleryImage[] = [
  {
    src: "/images/hero-table.jpg",
    alt: "Candlelit fine-dining table with plated dish and wine",
    caption: "The table, lit low",
    width: 1920,
    height: 1280,
    large: true,
  },
  {
    src: "/images/interior-2.jpg",
    alt: "Warm restaurant dining room with set tables and open kitchen",
    caption: "The room, set",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/hero-plating.jpg",
    alt: "Hands preparing fresh herbs and salmon",
    caption: "Prep, by hand",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/brunch-morning.jpg",
    alt: "Eggs Benedict with smoked salmon",
    caption: "Slow mornings",
    width: 800,
    height: 1000,
  },
  {
    src: "/images/brunch-frenchtoast.jpg",
    alt: "French toast with banana and blueberries",
    caption: "Something sweet",
    width: 800,
    height: 1000,
  },
  {
    src: "/images/hero-interior.jpg",
    alt: "Modern dining room with set tables",
    caption: "Room study",
    width: 1920,
    height: 1280,
    large: true,
  },
  {
    src: "/images/brunch-tacos.jpg",
    alt: "Grilled fish tacos with rice and salsas",
    caption: "Off the plan",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/dessert.jpg",
    alt: "Layered berry dessert",
    caption: "To finish",
    width: 800,
    height: 1000,
  },
  {
    src: "/images/brunch-pancakes.jpg",
    alt: "Pancake stack with pouring syrup",
    caption: "Weekend stack",
    width: 800,
    height: 1000,
  },
];

export const NAV = [
  { href: "#menus", label: "Tasting & Brunch" },
  { href: "#story", label: "Our Story" },
  { href: "#chef", label: "Chef" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
] as const;
