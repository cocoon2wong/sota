/*
 * @Author: Conghao Wong
 * @Date: 2026-09-28 11:04:44
 * @LastEditors: Conghao Wong
 * @LastEditTime: 2026-11-16 10:57:00
 * @Github: https://cocoon2wong.github.io
 * Copyright 2026 Conghao Wong, All Rights Reserved.
 */


// =============================================================================
// TypeScript Interfaces for Site Configuration
// =============================================================================

/**
 * Navigation item link descriptor for the primary navigation menu.
 */
export interface NavLink {
  /** Display title of the navigation link */
  title: string;
  /** Destination URL or path */
  url: string;
  /** Inline SVG icon markup */
  icon?: string;
  /** Optional full name for footer display (replaces legacy full_names map) */
  footerTitle?: string;
}

/**
 * Related link item descriptor for the footer directory.
 */
export interface FooterRelatedLink {
  /** Display title of the link */
  title: string;
  /** Destination URL or path */
  url: string;
}

/**
 * Global website configuration schema.
 */
export interface SiteConfig {
  // ---------------------------------------------------------------------------
  // Section 1: Site Metadata & Identity
  // ---------------------------------------------------------------------------
  /** Site title shown in header and browser tab */
  title: string;
  /** Secondary subtitle or tagline */
  subtitle?: string;
  /** Meta description for SEO */
  description?: string;
  /** Site author / creator name */
  author: string;
  /** Document language code (e.g. 'en', 'zh') */
  language: string;
  /** Canonical base URL of the website */
  url?: string;
  /** GitHub repository path (e.g. 'username/repo') */
  repository?: string;
  /** Git branch for GitHub source resolution and edit link */
  pageBranch?: string;
  /** Whether to show 'Edit page' button in footer */
  editPageButton?: boolean;

  // ---------------------------------------------------------------------------
  // Section 2: Primary Navigation Menu
  // ---------------------------------------------------------------------------
  /** Top-level navigation items rendered in the main navbar */
  navLinks: NavLink[];

  // ---------------------------------------------------------------------------
  // Section 2.5: Custom Stylesheets
  // ---------------------------------------------------------------------------
  /** Optional custom CSS stylesheets (local paths or CDN URLs) to inject into <head> */
  customCss?: string[];

  // ---------------------------------------------------------------------------
  // Section 2.6: Footer Directory & Related Links
  // ---------------------------------------------------------------------------
  /** Whether to hide footnotes, breadcrumb, and directory (legacy: hide-detailed-footer) */
  hideDetailedFooter?: boolean;
  /** Related links displayed in the second column of footer directory (legacy: footer_related_links) */
  footerRelatedLinks?: FooterRelatedLink[];
  /** Optional dictionary mapping nav link titles to long names for footer display (legacy: full_names) */
  fullNames?: Record<string, string>;

  // ---------------------------------------------------------------------------
  // Section 3: Color Palette & Theming
  // ---------------------------------------------------------------------------
  colors: {
    // 4.1 4-Level General Background System Tokens (Optional overrides, defaults in variables.css)
    level1BgColor?: string;
    level2BgColor?: string;
    level3BgColor?: string;
    level4BgColor?: string;
    level1BgColorDark?: string;
    level2BgColorDark?: string;
    level3BgColorDark?: string;
    level4BgColorDark?: string;

    // 4.1.1 2-Level Liquid Glass Background Tokens (Optional overrides, defaults in variables.css)
    level1GlassBgColor?: string;
    level2GlassBgColor?: string;
    level1GlassBgColorDark?: string;
    level2GlassBgColorDark?: string;

    // 4.2 4-Level Typography System Tokens (Optional overrides, defaults in variables.css)
    level1TextColor?: string;
    level2TextColor?: string;
    level3TextColor?: string;
    level4TextColor?: string;
    level1TextColorDark?: string;
    level2TextColorDark?: string;
    level3TextColorDark?: string;
    level4TextColorDark?: string;

    // 4.3 Brand & Interactive Accents
    themeColor: string;

    // 4.5 Primary Floating Navbar
    navbarBgColor: string;
    navbarBgColorDark: string;
    navbarBorderColor: string;
    navbarTextColor: string;
  };
}

// =============================================================================
// Global Site Configuration Instance
// =============================================================================

export const siteConfig: SiteConfig = {
  // ---------------------------------------------------------------------------
  // Section 1: Site Metadata & Identity
  // ---------------------------------------------------------------------------
  title: "Project Unpredictable: SOTA",
  subtitle: "From State of THE ART to Human Prediction Algorithms",
  description: "Official website for \"From State of THE ART to Human Prediction Algorithms\"",
  author: "Conghao Wong",
  language: "en",
  url: "https://cocoon2wong.github.io",
  repository: "cocoon2wong/sota",
  pageBranch: "page",
  editPageButton: true,

  // ---------------------------------------------------------------------------
  // Section 2: Primary Navigation Menu
  // ---------------------------------------------------------------------------
  navLinks: [
    {
      title: "Home",
      url: "/",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/></svg>',
    },
    {
      title: "Paper",
      url: "/paper",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>',
    },
    {
      title: "Unpredictable",
      url: "https://cocoon2wong.github.io/index",
      icon: '<div style="font-size: 16px">Project</div>',
    },
  ],

  // ---------------------------------------------------------------------------
  // Section 2.5: Custom Stylesheets
  // ---------------------------------------------------------------------------
  customCss: [],

  // ---------------------------------------------------------------------------
  // Section 2.6: Footer Directory & Related Links
  // ---------------------------------------------------------------------------
  hideDetailedFooter: false,
  footerRelatedLinks: [
    {
      title: "SocialCircle",
      url: "https://cocoon2wong.github.io/SocialCircle",
    },
    {
      title: "Resonance",
      url: "https://cocoon2wong.github.io/Re",
    },
    {
      title: "Reverberation",
      url: "https://cocoon2wong.github.io/Rev",
    },
  ],
  fullNames: {
    Home: "SOTA",
    Paper: "Full Paper",
    Unpredictable: "Project Unpredictable",
  },

  // ---------------------------------------------------------------------------
  // Section 3: Color Palette & Theming
  // ---------------------------------------------------------------------------
  colors: {
    // 4.3 Brand & Interactive Accents
    themeColor: "#6a3ce7",

    // 4.5 Primary Floating Navbar
    navbarBgColor: "#291b1a20",
    navbarBgColorDark: "#14141460",
    navbarBorderColor: "#DDDDDD",
    navbarTextColor: "#000000",
  },
};
