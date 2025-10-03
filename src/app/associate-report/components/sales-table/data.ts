import { SalesTableUnit } from "./types";

// Zone Data
export const zoneWiseSalesTable: SalesTableUnit = {
  tableTitle: "Zone wise Sales Data",
  tableKey: "Zone",
  tableData: [
    { key: "West Zone 1", qty: 47.66, rev: 1.58, revPercent: 50.8, arv: 331 },
    { key: "West Zone 2", qty: 18.33, rev: 0.47, revPercent: 15.1, arv: 259 },
    { key: "South Zone", qty: 14.76, rev: 0.64, revPercent: 20.6, arv: 435 },
    { key: "East Zone", qty: 1.69, rev: 0.41, revPercent: 13.5, arv: 2445 },
    { key: "North Zone", qty: 0, rev: 0, revPercent: 0, arv: 0 },
    { key: "Export Zone", qty: 0, rev: 0, revPercent: 0, arv: 0 },
  ],
  tableTotal: {
    qty: 82.45,
    rev: 3.11,
    revPercent: 100,
    arv: 377,
  },
};

// Customer Data

export const customerSalesTable: SalesTableUnit = {
  tableTitle: "Top 15 Customers Wise Sales",
  tableKey: "customer",
  tableData: [
    { key: "Leofil Metals", qty: 5.75, rev: 0.18, revPercent: 10.91, arv: 321 },
    { key: "Shyam Infra", qty: 5.22, rev: 0.12, revPercent: 7.27, arv: 225 },
    {
      key: "Suprita Sura Reddy",
      qty: 4.28,
      rev: 0.25,
      revPercent: 15.15,
      arv: 575,
    },
    {
      key: "Atharva Textile Market",
      qty: 4.27,
      rev: 0.1,
      revPercent: 6.06,
      arv: 225,
    },
    { key: "Iconic Marbles", qty: 3.38, rev: 0.16, revPercent: 9.7, arv: 475 },
    {
      key: "Vaijul Popatbhai Desai",
      qty: 3.31,
      rev: 0.08,
      revPercent: 4.85,
      arv: 239,
    },
    {
      key: "Deepak Kantibhai Chauhan",
      qty: 3.28,
      rev: 0.13,
      revPercent: 7.88,
      arv: 382,
    },
    { key: "Rahul Jain", qty: 3.13, rev: 0.07, revPercent: 4.24, arv: 230 },
    { key: "Octane Fuels", qty: 3.11, rev: 0.08, revPercent: 4.85, arv: 254 },
    {
      key: "Lakshmi Construction",
      qty: 2.81,
      rev: 0.17,
      revPercent: 10.3,
      arv: 591,
    },
    { key: "Payal", qty: 2.73, rev: 0.05, revPercent: 3.03, arv: 200 },
    {
      key: "Dawkar Vilas Gopinath",
      qty: 2.34,
      rev: 0.05,
      revPercent: 3.03,
      arv: 230,
    },
    {
      key: "Nareshkumar Maniklal Shah",
      qty: 2.32,
      rev: 0.06,
      revPercent: 3.64,
      arv: 242,
    },
    {
      key: "Jitendrakumar Maniklal Shah",
      qty: 2.32,
      rev: 0.06,
      revPercent: 3.64,
      arv: 242,
    },
    {
      key: "Vaibhav Enterprises",
      qty: 2.01,
      rev: 0.1,
      revPercent: 6.06,
      arv: 510,
    },
  ],
  tableTotal: {
    qty: 50.25,
    rev: 1.65,
    revPercent: 100,
    arv: 328,
  },
};

// Top 10 Quality Wise data
export const qualitiesSalesTable: SalesTableUnit = {
  tableTitle: "Top 15 Qualities Sales Data",
  tableKey: "Quality",
  tableData: [
    {
      key: "COR.GRY",
      qty: 11.79,
      rev: 0.28,
      revPercent: (0.28 / 1.63) * 100,
      arv: 241,
    },
    {
      key: "ANT.SUP.WHT",
      qty: 5.93,
      rev: 0.19,
      revPercent: (0.19 / 1.63) * 100,
      arv: 320,
    },
    {
      key: "BLSM.PRLA",
      qty: 4.89,
      rev: 0.12,
      revPercent: (0.12 / 1.63) * 100,
      arv: 242,
    },
    {
      key: "APOLLO.GRY",
      qty: 4.55,
      rev: 0.1,
      revPercent: (0.1 / 1.63) * 100,
      arv: 227,
    },
    {
      key: "CARTIER.GRY",
      qty: 3.77,
      rev: 0.22,
      revPercent: (0.22 / 1.63) * 100,
      arv: 585,
    },
    {
      key: "CRM.TRS",
      qty: 3.75,
      rev: 0.12,
      revPercent: (0.12 / 1.63) * 100,
      arv: 311,
    },
    {
      key: "CRSTL.WHT.WARM.1",
      qty: 3.38,
      rev: 0.16,
      revPercent: (0.16 / 1.63) * 100,
      arv: 475,
    },
    {
      key: "BURBERY.GRY",
      qty: 3.04,
      rev: 0.08,
      revPercent: (0.08 / 1.63) * 100,
      arv: 250,
    },
    {
      key: "NEW.ANTIQ.BGE",
      qty: 2.73,
      rev: 0.05,
      revPercent: (0.05 / 1.63) * 100,
      arv: 200,
    },
    {
      key: "GRAFITO",
      qty: 2.17,
      rev: 0.06,
      revPercent: (0.06 / 1.63) * 100,
      arv: 283,
    },
    {
      key: "ASKA.WHT",
      qty: 2.01,
      rev: 0.1,
      revPercent: (0.1 / 1.63) * 100,
      arv: 510,
    },
    { key: "MIX", qty: 2.0, rev: 0.0, revPercent: 0, arv: 10 },
    {
      key: "ULTRA.WHT",
      qty: 1.91,
      rev: 0.06,
      revPercent: (0.06 / 1.63) * 100,
      arv: 300,
    },
    {
      key: "CRM.DVA",
      qty: 1.53,
      rev: 0.04,
      revPercent: (0.04 / 1.63) * 100,
      arv: 290,
    },
    {
      key: "BOTTOCHINO",
      qty: 1.5,
      rev: 0.03,
      revPercent: (0.03 / 1.63) * 100,
      arv: 226,
    },
  ].map((item) => ({
    ...item,
    revPercent: Number(item.revPercent.toFixed(1)),
  })),
  tableTotal: {
    qty: 54.96,
    rev: 1.63,
    revPercent: 100,
    arv: 296,
  },
};

// Classification Wise Sales Summary
//
export const channelWiseSalesTable: SalesTableUnit = {
  tableTitle: "Channel Wise Sales",
  tableKey: "Channel",
  tableData: [
    {
      key: "Project/Institution",
      qty: 1488,
      rev: 57537,
      revPercent: 6.26,
      arv: 39,
    },
    {
      key: "Retail sale",
      qty: 384,
      rev: 191652,
      revPercent: 20.85,
      arv: 499,
    },
    {
      key: "Dealer/Whole sale",
      qty: 247,
      rev: 12606,
      revPercent: 1.37,
      arv: 51,
    },
    { key: "Builder", qty: 567, rev: 192, revPercent: 0.02, arv: 0.34 },
    {
      key: "Export Sale",
      qty: 15191,
      rev: 657219,
      revPercent: 71.5,
      arv: 43.26,
    },
  ],
  tableTotal: {
    qty: 17877,
    rev: 91920,
    revPercent: 100,
    arv: 51.42,
  },
};
