export type Exchange = {
  id: string;
  name: string;
  domain: string;
  score: number;
  security: number;
  proofOfReserves: number;
  compliance: number;
  liquidity: number;
  trackRecord: number;
  tags: string[];
  affiliateUrl: string;
  featured?: boolean;
  // CSG-V8 extension: needed by /find-my-exchange match engine
  micarLicensed?: boolean;
  hasCryptoCard?: boolean;
  hasFutures?: boolean;
  hasStaking?: boolean;
};

export const EXCHANGES: Exchange[] = [
  {
    id: "bybit",
    name: "Bybit",
    domain: "bybit.com",
    score: 94,
    security: 95,
    proofOfReserves: 92,
    compliance: 90,
    liquidity: 97,
    trackRecord: 96,
    tags: ["MiCAR Licensed", "Crypto Card", "Futures", "Spot"],
    affiliateUrl: "https://bybit.com", // TODO: https://partner.bybit.com/b/[referral_code]
    featured: true,
    micarLicensed: true,
    hasCryptoCard: true,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "binance",
    name: "Binance",
    domain: "binance.com",
    score: 88,
    security: 90,
    proofOfReserves: 88,
    compliance: 82,
    liquidity: 98,
    trackRecord: 85,
    tags: ["Futures", "Spot"],
    affiliateUrl: "https://binance.com", // TODO: real affiliate URL
    micarLicensed: false,
    hasCryptoCard: false,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "kraken",
    name: "Kraken",
    domain: "kraken.com",
    score: 84,
    security: 88,
    proofOfReserves: 85,
    compliance: 88,
    liquidity: 78,
    trackRecord: 82,
    tags: ["MiCAR Licensed", "Spot", "Futures"],
    affiliateUrl: "https://kraken.com", // TODO: real affiliate URL
    micarLicensed: true,
    hasCryptoCard: false,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "okx",
    name: "OKX",
    domain: "okx.com",
    score: 82,
    security: 84,
    proofOfReserves: 85,
    compliance: 78,
    liquidity: 88,
    trackRecord: 76,
    tags: ["Crypto Card", "Futures", "Spot"],
    affiliateUrl: "https://okx.com", // TODO: real affiliate URL
    micarLicensed: false,
    hasCryptoCard: true,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "coinbase",
    name: "Coinbase",
    domain: "coinbase.com",
    score: 80,
    security: 86,
    proofOfReserves: 72,
    compliance: 95,
    liquidity: 72,
    trackRecord: 80,
    tags: ["MiCAR Licensed", "Crypto Card", "Spot"],
    affiliateUrl: "https://coinbase.com", // TODO: real affiliate URL
    micarLicensed: true,
    hasCryptoCard: true,
    hasFutures: false,
    hasStaking: true,
  },
  {
    id: "kucoin",
    name: "KuCoin",
    domain: "kucoin.com",
    score: 74,
    security: 72,
    proofOfReserves: 78,
    compliance: 65,
    liquidity: 80,
    trackRecord: 72,
    tags: ["Futures", "Spot"],
    affiliateUrl: "https://kucoin.com", // TODO: real affiliate URL
    micarLicensed: false,
    hasCryptoCard: false,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "bitfinex",
    name: "Bitfinex",
    domain: "bitfinex.com",
    score: 67,
    security: 68,
    proofOfReserves: 60,
    compliance: 62,
    liquidity: 74,
    trackRecord: 70,
    tags: ["Spot", "Futures"],
    affiliateUrl: "https://bitfinex.com", // TODO: real affiliate URL
    micarLicensed: false,
    hasCryptoCard: false,
    hasFutures: true,
    hasStaking: false,
  },
  // CSG-V8 additions — MiCAR-relevant EU exchanges
  {
    id: "bitstamp",
    name: "Bitstamp",
    domain: "bitstamp.net",
    score: 80,
    security: 88,
    proofOfReserves: 80,
    compliance: 92,
    liquidity: 65,
    trackRecord: 90,
    tags: ["MiCAR Licensed", "Spot"],
    affiliateUrl: "https://bitstamp.net",
    micarLicensed: true,
    hasCryptoCard: false,
    hasFutures: false,
    hasStaking: true,
  },
  {
    id: "bitpanda",
    name: "Bitpanda",
    domain: "bitpanda.com",
    score: 78,
    security: 84,
    proofOfReserves: 75,
    compliance: 95,
    liquidity: 60,
    trackRecord: 80,
    tags: ["MiCAR Licensed", "Crypto Card", "Spot"],
    affiliateUrl: "https://bitpanda.com",
    micarLicensed: true,
    hasCryptoCard: true,
    hasFutures: false,
    hasStaking: true,
  },
  {
    id: "cryptocom",
    name: "Crypto.com",
    domain: "crypto.com",
    score: 79,
    security: 82,
    proofOfReserves: 78,
    compliance: 88,
    liquidity: 75,
    trackRecord: 70,
    tags: ["MiCAR Licensed", "Crypto Card", "Futures", "Spot"],
    affiliateUrl: "https://crypto.com",
    micarLicensed: true,
    hasCryptoCard: true,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    domain: "gemini.com",
    score: 76,
    security: 88,
    proofOfReserves: 70,
    compliance: 85,
    liquidity: 55,
    trackRecord: 78,
    tags: ["MiCAR Licensed", "Crypto Card", "Spot"],
    affiliateUrl: "https://gemini.com",
    micarLicensed: true,
    hasCryptoCard: true,
    hasFutures: false,
    hasStaking: false,
  },
  {
    id: "bitget",
    name: "Bitget",
    domain: "bitget.com",
    score: 73,
    security: 76,
    proofOfReserves: 72,
    compliance: 55,
    liquidity: 82,
    trackRecord: 65,
    tags: ["Crypto Card", "Futures", "Spot"],
    affiliateUrl: "https://bitget.com",
    micarLicensed: false,
    hasCryptoCard: true,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "mexc",
    name: "MEXC",
    domain: "mexc.com",
    score: 67,
    security: 70,
    proofOfReserves: 60,
    compliance: 45,
    liquidity: 80,
    trackRecord: 68,
    tags: ["Futures", "Spot"],
    affiliateUrl: "https://mexc.com",
    micarLicensed: false,
    hasCryptoCard: false,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "gateio",
    name: "Gate.io",
    domain: "gate.io",
    score: 68,
    security: 73,
    proofOfReserves: 62,
    compliance: 48,
    liquidity: 78,
    trackRecord: 72,
    tags: ["Crypto Card", "Futures", "Spot"],
    affiliateUrl: "https://gate.io",
    micarLicensed: false,
    hasCryptoCard: true,
    hasFutures: true,
    hasStaking: true,
  },
  {
    id: "htx",
    name: "HTX",
    domain: "htx.com",
    score: 65,
    security: 65,
    proofOfReserves: 58,
    compliance: 42,
    liquidity: 80,
    trackRecord: 75,
    tags: ["Futures", "Spot"],
    affiliateUrl: "https://htx.com",
    micarLicensed: false,
    hasCryptoCard: false,
    hasFutures: true,
    hasStaking: true,
  },
];

export const TAG_COLORS: Record<string, { fg: string; bg: string; bd: string }> = {
  "MiCAR Licensed": { fg: "#0dbe82", bg: "rgba(13,190,130,0.08)", bd: "rgba(13,190,130,0.20)" },
  "Crypto Card": { fg: "#18b4d4", bg: "rgba(24,180,212,0.08)", bd: "rgba(24,180,212,0.20)" },
  Futures: { fg: "#70a848", bg: "rgba(112,168,72,0.08)", bd: "rgba(112,168,72,0.20)" },
  Spot: { fg: "#a1a1aa", bg: "rgba(255,255,255,0.04)", bd: "rgba(255,255,255,0.10)" },
};

// Score → color threshold
export function scoreColor(value: number): string {
  if (value >= 85) return "#0dbe82";
  if (value >= 75) return "#18b4d4";
  if (value >= 65) return "#70a848";
  return "#71717a";
}

// CSG-V8 additions for /find-my-exchange quiz
export function calcScore(s: {
  security: number;
  proofOfReserves: number;
  compliance: number;
  liquidity: number;
  trackRecord: number;
}): number {
  return Math.round(
    s.security * 0.3 +
      s.proofOfReserves * 0.25 +
      s.compliance * 0.2 +
      s.liquidity * 0.15 +
      s.trackRecord * 0.1,
  );
}

// EU MiCAR jurisdictions — used by /find-my-exchange to auto-infer compliance filter
export const MICAR_COUNTRIES = new Set([
  "Romania",
  "Bulgaria",
  "Germany",
  "France",
  "Netherlands",
  "Spain",
  "Italy",
  "Portugal",
  "Austria",
  "Belgium",
  "Czech Republic",
  "Sweden",
  "Denmark",
  "Finland",
  "Ireland",
  "Greece",
  "Poland",
  "Hungary",
  "Slovakia",
  "Slovenia",
  "Croatia",
  "Lithuania",
  "Latvia",
  "Estonia",
  "Luxembourg",
  "Malta",
  "Cyprus",
]);

export const COUNTRIES = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Singapore",
  "United Arab Emirates",
  "Brazil",
  "Argentina",
  "Mexico",
  "Japan",
  "South Korea",
  "Hong Kong",
  "India",
  "Turkey",
  "South Africa",
  "Nigeria",
];
