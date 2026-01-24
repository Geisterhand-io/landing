# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for Geisterhand, an AI-powered Mac app testing tool. It's a static site built with Astro 4.x and Tailwind CSS.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (static output)
- `npm run preview` - Preview production build locally

## Architecture

- **Framework**: Astro with static output mode
- **Styling**: Tailwind CSS with custom theme colors defined in `tailwind.config.mjs`
- **Site URL**: https://geisterhand.dev

### Custom Theme

The Tailwind config extends the default theme with:
- Colors: `bg-primary`, `bg-secondary`, `text-primary`, `text-secondary`, `accent-blue`
- Custom font stacks for `sans` (SF Pro) and `mono` (SF Mono)

### Reusable CSS Classes

Global styles in `src/styles/global.css` define component classes:
- `.btn-primary`, `.btn-secondary` - Button styles
- `.card`, `.card-hover` - Card containers
- `.code-block` - Code snippet styling
- `.gradient-text` - Blue-to-purple gradient text
- `.section-heading`, `.section-subheading` - Section typography

### Structure

- `src/pages/index.astro` - Single page that composes all sections
- `src/layouts/BaseLayout.astro` - HTML shell with meta tags, Open Graph, and JSON-LD
- `src/components/` - Section components (Hero, Features, QuickStart, etc.)
