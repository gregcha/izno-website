# IZNO Landing Page

A modern landing page for IZNO, an AI-powered solution for profile research in calls for tenders.

## 🚀 Live Demo

Visit the live site: [https://gregcha.github.io/izno-website](https://gregcha.github.io/izno-website)

## 📦 Quick Deployment to GitHub Pages

1. **Upload all files to your `izno-website` repository on GitHub**
2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select "GitHub Actions" as source
3. **Automatic deployment will start** - check the Actions tab

Your site will be live at: `https://gregcha.github.io/izno-website`

## 💻 Local Development

```bash
# Install dependencies (use install, not ci)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Note:** Use `npm install` for local development. The `npm ci` command requires a package-lock.json file and is used by the automated deployment process.

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite 5.2+** - Build tool
- **Tailwind CSS v3** - Styling
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## 📁 Project Structure

```
├── components/          # React components
├── imports/            # Figma imported assets
├── styles/             # Global styles
├── .github/workflows/  # GitHub Actions
└── dist/               # Build output (auto-generated)
```

## 🔧 Customization

- Update content in component files under `/components/`
- Modify styles in `/styles/globals.css`
- Add new sections by creating components and importing them in `App.tsx`

## 🚀 Deployment Details

The project is configured for automatic deployment to GitHub Pages:
- **Repository:** `gregcha/izno-website`
- **Live URL:** `https://gregcha.github.io/izno-website`
- **Automatic builds** on push to main branch
- **No manual configuration needed** - everything is pre-configured

## 📝 License

This project is open source and available under the MIT License.