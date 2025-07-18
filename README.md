# Shopify App Template – Theme Extension Only

This is a template for building a [Shopify app that uses only app extensions](https://shopify.dev/docs/apps/build/app-extensions/build-extension-only-app). It contains everything needed to manage a **theme app extension** without requiring a backend or embedded admin UI.

If you want an app with a full admin interface or embedded pages, consider using the [Remix app template](https://github.com/Shopify/shopify-app-template-remix) instead.

---

## 🚀 Features

- Deploys a **Shopify theme app extension** (no backend)
- Injects assets like CSS or JS into theme via App Blocks
- Uses [Shopify CLI](https://shopify.dev/docs/apps/tools/cli) for all dev tasks
- Easy to redeploy on new machines

---

## 🧩 Requirements

Before you start:

1. [Node.js](https://nodejs.org/en/download/) installed
2. [Shopify Partner account](https://partners.shopify.com/signup)
3. A [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store)

---

## 🛠 Local Development

To begin development:

```bash
shopify login
shopify app connect
npm install            # or yarn / pnpm
npm run dev            # or yarn dev / pnpm run dev
shopify app deploy     # when finished
