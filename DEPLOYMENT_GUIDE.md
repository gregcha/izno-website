# 🚀 Deploy IZNO Landing Page to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository settings:
   - **Repository name**: `izno-landing-page`
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

## Step 3: Update Configuration Files

Before uploading, you MUST update these files with your actual GitHub username:

### In `package.json`:
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_ACTUAL_USERNAME.github.io/izno-landing-page"
```

### In `vite.config.ts`:
The base path is already set to `/izno-landing-page/` which matches your repo name.

## Step 4: Upload to GitHub

### Option A: Using GitHub Web Interface (Easier)

1. Go to your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop ALL your project files/folders into the upload area
4. Make sure the folder structure is preserved
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

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click the "Settings" tab (at the top of the repo)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click "Save"

## Step 6: Monitor Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Click on the workflow to see the progress
4. Once it shows a green checkmark, your site is live!

## Step 7: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/izno-landing-page
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔧 Troubleshooting

### If the deployment fails:
1. Check the "Actions" tab for error messages
2. Make sure all files were uploaded correctly
3. Verify that your `package.json` and `vite.config.ts` have the correct paths

### If styles don't load:
- Make sure the `base` path in `vite.config.ts` matches your repository name
- The path should be `/izno-landing-page/` (with trailing slash)

### Common issues:
- **404 Error**: Check that GitHub Pages is enabled with "GitHub Actions" as source
- **Blank page**: Check browser console for errors, usually path-related
- **Build fails**: Check that all imports in your components are correct

## 🎉 Success!

Once deployed, your IZNO landing page will be live and automatically update whenever you push changes to the main branch!

To make changes:
1. Edit files locally
2. Upload/push changes to GitHub
3. GitHub Actions will automatically rebuild and deploy