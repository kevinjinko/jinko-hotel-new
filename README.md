# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/de260e56-752a-4187-bc7c-47e569021164

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/de260e56-752a-4187-bc7c-47e569021164) and start prompting.

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

Simply open [Lovable](https://lovable.dev/projects/de260e56-752a-4187-bc7c-47e569021164) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Edge Tracking Middleware

This project includes Vercel Edge Middleware for server-side visit tracking that captures real HTTP requests (initial loads, hard refreshes, direct URL hits).

### How it works

- `middleware.ts` runs on Vercel's Edge Runtime for every incoming request
- Sends visit metadata to `https://api.smalk.ai/api/v1/tracking/visit`
- Uses the `SMALK_API_KEY` environment variable for authentication
- Non-blocking design with ≤ 5ms latency impact

### Environment Variables

Add the following environment variable in your Vercel project settings:

- **Key**: `SMALK_API_KEY`
- **Value**: Your Smalk API key
- **Environment**: Production (and Preview if needed)

### Testing

1. Deploy to Vercel with the environment variable set
2. Visit your site in incognito mode or hard refresh
3. Check Vercel → Functions → Edge Middleware Logs
4. Verify tracking data appears in your Smalk dashboard

### Disabling

To disable edge tracking, simply delete or rename `middleware.ts` and redeploy.
