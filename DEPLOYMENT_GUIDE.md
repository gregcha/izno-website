# 🚀 Deploy IZNO Landing Page to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository settings:
   - **Repository name**: `izno-landing-page` (or `izno-website` if you prefer)
   - **Description**: "IZNO - AI-powered profile research landing page"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** check "Add a README file" (we already have one)
5. Click "Create repository"

## Step 2: Download Your Project from Figma Make

Since you can't directly git push from Figma Make, you need to:

1. **Copy all your files locally:**
   - Create a new folder on your computer called `izno-landing-page`
   - Copy ALL files from your Figma Make project to this folder
   - Make sure you get the entire folder structure including:
     - All `.tsx` files (App.tsx, components, etc.)
     - All config files (package.json, vite.config.ts, etc.)
     - The `.github/workflows/` folder
     - The `imports/` folder with Figma assets
     - All other files shown in your file structure

## Step 3: Important Files Check

Make sure these critical files are included:
- ✅ `package.json` - Contains project dependencies (UPDATED - fixed version conflicts)
- ✅ `vite.config.ts` - Build configuration 
- ✅ `tailwind.config.js` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration for CSS processing
- ✅ `.github/workflows/deploy.yml` - GitHub Actions deployment script (UPDATED - auto-generates lock file)

**Note**: You do NOT need to include `package-lock.json` - it will be generated automatically during deployment.

## Step 4: Update Configuration Files

Before uploading, you MUST update these files with your actual GitHub username:

### In `package.json`:
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_ACTUAL_USERNAME.github.io/izno-landing-page"
```

### In `vite.config.ts`:
The base path should match your repository name. If your repo is named `izno-website`, change:
```typescript
base: process.env.NODE_ENV === 'production' ? '/izno-website/' : '/',
```

## Step 5: Upload to GitHub

### Option A: Using GitHub Web Interface (Easier)

1. Go to your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop ALL your project files/folders into the upload area
4. **IMPORTANT**: Make sure the folder structure is preserved, especially:
   - `.github/workflows/deploy.yml`
   - `tailwind.config.js`
   - `postcss.config.js`
   - All component files
5. Scroll down and add commit message: "Initial commit - IZNO landing page"
6. Click "Commit changes"

### Option B: Using Git Commands (If you have Git installed)

1. Open terminal/command prompt in your project folder
2. Run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git init
git add .
git commit -m "Initial commit - IZNO landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/izno-landing-page.git
git push -u origin main
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click the "Settings" tab (at the top of the repo)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click "Save"

## Step 7: Monitor Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Click on the workflow to see the progress
4. **The deployment will automatically install dependencies and generate package-lock.json**
5. Once it shows a green checkmark, your site is live!

## Step 8: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/izno-landing-page
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔧 Troubleshooting

### ✅ FIXED: Package Lock Sync Issues
The previous npm ci sync errors have been resolved by:
- **Removing problematic package-lock.json** - Let npm generate it fresh
- **Using npm install instead of npm ci** - More flexible dependency resolution
- **Added caching** - Speeds up subsequent builds
- **Better error handling** - More informative build logs

### ✅ FIXED: Dependency Version Conflicts
Dependency conflicts have been resolved by:
- **Upgrading Vite** from v4 to v5.2+ to match dependency requirements
- **Using Tailwind CSS v3** (stable) instead of v4 (alpha)
- **Adding legacy-peer-deps flag** for better compatibility

### If the deployment still fails:
1. Check the "Actions" tab for error messages
2. Make sure ALL files were uploaded correctly, especially:
   - `tailwind.config.js`
   - `postcss.config.js`
   - `.github/workflows/deploy.yml`
   - `package.json`
3. Verify that your `package.json` and `vite.config.ts` have the correct paths

### If styles don't load:
- Make sure the `base` path in `vite.config.ts` matches your repository name
- The path should be `/izno-landing-page/` (with trailing slash)
- Check that `tailwind.config.js` and `postcss.config.js` are included

### Common issues:
- **404 Error**: Check that GitHub Pages is enabled with "GitHub Actions" as source
- **Blank page**: Check browser console for errors, usually path-related
- **Build fails**: Check that all imports in your components are correct
- **Style issues**: Ensure Tailwind config files are properly uploaded

## 🎉 Success!

Once deployed, your IZNO landing page will be live and automatically update whenever you push changes to the main branch!

To make changes:
1. Edit files locally
2. Upload/push changes to GitHub
3. GitHub Actions will automatically rebuild and deploy

## 📝 What Changed to Fix the Build

**Key Updates Made:**
- **Removed package-lock.json**: Let GitHub Actions generate it automatically during build
- **Updated workflow**: Uses npm install instead of npm ci for more flexibility
- **Added caching**: Improves build performance
- **Better logging**: More detailed build process information

These changes ensure reliable deployment without sync issues.

## 📝 Repository Name Flexibility

If you named your repository something different (like `izno-website`), make sure to:
1. Update the `homepage` in `package.json`
2. Update the `base` path in `vite.config.ts`
3. Use the correct URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`