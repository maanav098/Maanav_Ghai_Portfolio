# Maanav Ghai - Professional Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Three.js. Features immersive 3D elements while maintaining professional design and accessibility standards.

## 🚀 Features

- **Professional Design**: Clean, minimal aesthetic suitable for Fortune-100 companies
- **3D Interactive Elements**: WebGL-powered animations with progressive enhancement
- **Theme Modes**: Dark baseline with elegant sage-green light mode
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Focused**: Lazy-loaded 3D, optimized rendering, mobile-friendly
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and social media optimization

## 📚 Table of Contents

1. [Features](#-features)
2. [3D Features](#-3d-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Design System](#-design-system)
6. [Getting Started](#-getting-started)
7. [Customization](#-customization)
8. [Key Sections](#-key-sections)
9. [Development](#-development)
10. [Deployment](#-deployment)
11. [Responsive Design](#-responsive-design)
12. [Accessibility](#-accessibility)
13. [SEO Features](#-seo-features)
14. [Analytics](#-analytics-optional)
15. [Contributing](#-contributing)
16. [License](#-license)
17. [Support](#-support)

## ✨ 3D Features

- **Floating Hero Background**: Animated glassmorphic shapes in 3D space
- **Interactive Skill Orbs**: Hoverable 3D visualization of technical skills
- **Scroll-Driven Animations**: Camera and object movements tied to scroll
- **Progressive Enhancement**: Automatic fallback to 2D for unsupported devices
- **Performance Optimized**: Pause on hidden, device detection, adjustable quality

[📖 See 3D Integration Guide](./docs/3D_INTEGRATION.md) | [🖼️ View Examples](./docs/3D_EXAMPLES.md)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Rendering**: React Three Fiber + Three.js
- **Animations**: Framer Motion + GSAP
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page component
│   └── api/               # API routes (contact form)
├── components/            # Reusable UI components
│   ├── 3d/               # 3D components (Scene3D, FloatingShapes, SkillOrbs)
│   ├── Navigation.tsx     # Sticky navigation header
│   ├── Hero.tsx          # Hero section with 3D background
│   ├── About.tsx         # About section with stats
│   ├── Work.tsx          # Experience and projects
│   ├── Skills.tsx        # Skills with 3D toggle
│   ├── Contact.tsx       # Contact information
│   ├── ExperienceCard.tsx # Work experience cards
│   ├── ProjectTile.tsx   # Project grid tiles
│   └── ProjectModal.tsx  # Project detail modals
├── contexts/              # React contexts
│   └── ThemeContext.tsx  # Dark/light mode management
├── lib/                   # Utility functions and data
│   ├── utils.ts          # Helper functions
│   ├── data.ts           # Content data
│   ├── use3DHooks.ts     # 3D animation hooks
│   └── performanceMonitor.tsx # FPS and performance tracking
├── docs/                  # Documentation
│   ├── 3D_INTEGRATION.md # 3D setup and architecture
│   └── 3D_EXAMPLES.md    # Usage examples
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Slate-900 (#0F172A) for text, Slate-600 (#475569) for secondary
- **Accent**: Blue-600 (#2563EB) for links and highlights
- **Success**: Green-500 (#10B981) for positive metrics
- **Borders**: Slate-200 (#E2E8F0) for subtle separators

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Semibold with tight letter-spacing
- **Body**: Regular weight, 16-18px base, 1.6 line-height

### Spacing
- **Scale**: 8-point system (8px, 16px, 24px, 32px, etc.)
- **Layout**: Max-width 1080px with generous whitespace
- **Components**: 12-16px border radius, subtle shadows

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd maanav-ghai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Content Updates
Edit `lib/data.ts` to update:
- Work experience details
- Project information
- Skills and technologies
- Contact information

### Styling Changes
- **Colors**: Modify `tailwind.config.js` color palette
- **Typography**: Update font imports in `globals.css`
- **Layout**: Adjust spacing and sizing in component files

### Adding New Sections
1. Create component in `components/` directory
2. Add to navigation in `Navigation.tsx`
3. Include in main page `app/page.tsx`

## 🎯 Key Sections

### Hero Section
- Professional avatar with subtle glow animation
- Clear value proposition
- Primary CTA (Contact) and secondary CTA (Resume)
- Tech stack badges

### About Section
- Professional summary
- Key metrics and achievements
- Personal approach to work

### Work Section
- **Experience Cards**: Company, role, duration, achievements with metrics
- **Project Grid**: Clickable tiles that open detailed modals
- **Project Modals**: Problem → Solution → Impact → Tech → Links

### Skills Section
- Categorized skill badges
- Clean, professional presentation
- Hover effects for interactivity

### Contact Section
- Direct contact methods
- Professional availability status
- Location and remote work preferences

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Prettier for formatting (recommended)
- Component-based architecture

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Configure custom domain if needed

### Other Platforms
- **Netlify**: Build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Similar to Vercel setup
- **Self-hosted**: Export static files with `npm run export`

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- **Touch Friendly**: 40px+ touch targets
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility

- **WCAG AA**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Focus Management**: Clear focus indicators
- **Reduced Motion**: Respects user preferences

## 🔍 SEO Features

- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD Person schema (ready to add)
- **Performance**: Core Web Vitals optimization

## 📈 Analytics (Optional)

The portfolio is ready for analytics integration:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: Easy to add tracking code
- **Privacy Focused**: No unnecessary tracking by default

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Radix UI** for accessible component primitives

## 📞 Support

For questions or support:
- **Email**: maanavghai1409@gmail.com
- **LinkedIn**: [Maanav Ghai](https://linkedin.com/in/maanavghai)
- **GitHub**: [Maanav Ghai](https://github.com/maanav098)

---

Built with ❤️ by Maanav Ghai.
