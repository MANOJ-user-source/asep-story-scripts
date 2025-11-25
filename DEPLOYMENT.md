# Deployment Guide for ASEP Story Scripts

## GitHub Repository Setup

Your project is ready to deploy! Follow these steps:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `asep-story-scripts`
   - **Description:** "ASEP Game Story Scripts Documentation"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these instead:

```bash
cd game-scripts-blog

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/asep-story-scripts.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
5. The deployment will start automatically!

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

### Your Website URL

After deployment, your website will be available at:

```
https://YOUR_USERNAME.github.io/asep-story-scripts/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Quick Commands Reference

### Push Updates to GitHub

After making changes to your site:

```bash
cd game-scripts-blog

# Stage all changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub (triggers auto-deployment)
git push
```

The site will automatically rebuild and redeploy!

## Alternative: Deploy to Vercel (Easier)

If you prefer a simpler deployment:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `asep-story-scripts` repository
5. Click "Deploy"

Vercel URL will be: `asep-story-scripts.vercel.app`

## Troubleshooting

### GitHub Pages not showing

1. Check Actions tab for errors
2. Ensure repository is public
3. Wait 5-10 minutes for DNS propagation

### 404 Errors on pages

- The site is configured with base path `/asep-story-scripts`
- Always access via the full URL with the repository name

### Build Fails

Check the Actions tab for error messages. Common issues:
- Node version (workflow uses Node 20)
- Missing dependencies (should be in package-lock.json)

## Custom Domain (Optional)

To use your own domain:

1. Go to Settings > Pages
2. Enter your custom domain
3. Follow GitHub's DNS configuration guide

---

**Current Status:** Repository initialized and ready to push

**Next Step:** Create GitHub repository and push!
