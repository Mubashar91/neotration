# Welcome to your Lovable project

## Articles and search metadata

Run `npm run build` to create the client bundle and prerender every registered route. The build also regenerates `public/sitemap.xml` and `public/feed.xml` from the article catalog. Run `npm run check:content` after building to verify article coverage, metadata, internal links, discovery files, and unknown-article handling.

The November 2026 research topics are registered in `src/data/researchArticles.ts`, with text under `src/content/blog/`. The existing `high-protein-breakfast-meal-prep` URL was expanded rather than duplicated. Recipe cards live in `src/data/articleRecipes.ts`; their content is printable and visible without JavaScript in production output.

Add a representative finished-dish photo to a recipe's optional `image` field to enable its Recipe JSON-LD. Stock cover images are illustrative and do not enable recipe rich-result markup. Nutrition estimates, illustrative grocery prices, and general meal-planning education do not claim clinical review or kitchen testing.

Vercel serves the generated HTML directly, including `404.html`. No crawler-specific middleware or SPA rewrite is needed. The output contains the same article content for readers and crawlers.

## Project info

**URL**: https://lovable.dev/projects/0694879e-5b1b-4df0-99b3-41ac66b13b7c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0694879e-5b1b-4df0-99b3-41ac66b13b7c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0694879e-5b1b-4df0-99b3-41ac66b13b7c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
