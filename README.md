# IZNO Landing Page

A modern landing page for IZNO, an AI-powered solution for profile research in calls for tenders.

## 🚀 Live Demo

Visit the live site: [https://gregcha.github.io/izno-website](https://gregcha.github.io/izno-website)

## 📦 Deployment to GitHub Pages

### Prerequisites

1. A GitHub account
2. Node.js 18+ installed locally

### Step-by-Step Deployment

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `izno-website`
   - Make it public
   - Don't initialize with README (we already have files)

2. **Update configuration:**
   - Configuration is already set for `gregcha/izno-website`
   - No manual updates needed

3. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/gregcha/izno-website.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

5. **Automatic Deployment:**
   - The GitHub Action will automatically run when you push to the main branch
   - Check the "Actions" tab to see the deployment progress
   - Once complete, your site will be available at `https://gregcha.github.io/izno-website`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
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

## 📝 License

This project is open source and available under the MIT License.