import type { ZudokuConfig } from "zudoku";
import MyCustomComponent from "./src/MyCustomComponent";
// import MyCustomPage from "./src/MyCustomPage";

// import React from 'react';


interface RouteConfig {
  path: string;
  element: React.ReactElement;
}

const config: ZudokuConfig = {
  // basePath: "/openapi-project-catalog",
  topNavigation: [
    { id: "docs/introduction", label: "Documentation" },
    { id: "api-operational", label: "Operational" },
    { id: "api-enduser", label: "End-User" },
    { id: "api-auth", label: "Authentication" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Petstore",
        icon: "book", //https://lucide.dev/icons
        items: [
          "docs/introduction",
          "docs/getting-started",
          "docs/installation",
          {
            type: "link",
            label: "Support",
            href: "https://support.example.com"
          }
        ]
      },
      {
        type: "category",
        label: "Ecomerce",
        icon: "shopping-bag",
        items: ["introduction", "example"],
      },
    ],
  },
  redirects: [
    { from: "/", to: "/docs/introduction" },
    { from: "/documentation", "to": "/docs/introduction" },
    { from: "/api", to: "/api-operational" }
  ],
  catalogs: {
    navigationId: "catalog",
    label: "API Catalog",
    // Only show the operational API in the catalog
    items: ["api-operational", "api-enduser", "api-auth"],
  },
  apis: [
    {
      type: "url",
      input: "https://rickandmorty.zuplo.io/openapi.json",
      navigationId: "api-operational",
      categories: [{ label: "General", tags: ["Operational"] }],
    },
    {
      type: "url",
      input: "https://rickandmorty.zuplo.io/openapi.json",
      navigationId: "api-enduser",
      categories: [{ label: "General", tags: ["End-User"] }],
    },
    {
      type: "url",
      input: "https://rickandmorty.zuplo.io/openapi.json",
      navigationId: "api-auth",
      categories: [{ label: "Other", tags: ["Authentication"] }],
    },
  ],
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
  page: {
    pageTitle: "Diki Haryadi",
    logo: {
      src: {
        light: "https://dikiharyadi.com/assets/img/project-catalog.cefbc111.png",
        dark: "https://dikiharyadi.com/assets/img/project-catalog.cefbc111.png"
      },
      width: "99px"
    }
  },
  theme: {
    light: {
      "primary": "316 100% 50%",
      "primaryForeground": "360 100% 100%"
    },
    dark: {
      "primary": "316 100% 50%",
      "primaryForeground": "360 100% 100%"
    },
    // fonts: {
    //   // https://fonts.google.com/
    //   sans: {
    //     fontFamily: "Smooch Sans, serif",
    //     url: "https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100..900&display=swap",
    //   },
    // }
  },
  metadata: {
    "title": "Example Website Title",
    "description": "This is an example description for the website.",
    "logo": "https://example.com/logo.png",
    "favicon": "https://example.com/favicon.ico",
    "generator": "Website Generator 1.0",
    "applicationName": "Example App",
    "referrer": "no-referrer",
    "keywords": ["example", "website", "metadata", "SEO"],
    "authors": ["John Doe", "Jane Smith"],
    "creator": "John Doe",
    "publisher": "Example Publisher Inc."
  },
  "sitemap": {
    // The base url for your site
    // Required
    "siteUrl": "https://example.com",
    // The change frequency for the pages
    // Defaults to daily
    "changefreq": "daily",
    // The priority for the pages
    // Defaults to 0.7
    "priority": 0.7,
    // The output directory for the sitemap
    // Defaults to undefined
    "outDir": "sitemaps/",
    // Whether to include the last modified date
    // Defaults to true
    "autoLastmod": true,
    // The pages to exclude from the sitemap
    // Can also be a function that returns an array of paths
    // () => Promise<string[]>
    "exclude": ["/404", "/private/page"]
  },
  // authentication: {
  //   type: "auth0",
  //   domain: process.env.ZUDOKU_PUBLIC_AUTH_DOMAIN,
  //   clientId: process.env.ZUDOKU_PUBLIC_AUTH_CLIENT_ID,
  // },
  mdx: {
    components: {
      MyCustomComponent,
    },
  },
  // customPages: [
  //   {
  //     path: "/a-custom-page",
  //     element: MyCustomPage,
  //   },
  // ]
};

export default config;
