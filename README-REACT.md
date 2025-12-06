# Roben Alam Portfolio - React Version

A modern, responsive portfolio website built with React and Vite featuring smooth animations, interactive components, and a professional design.

## 🚀 Features

- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with functional components and hooks
- 🎨 Modern gradient design with dark theme
- 📱 Fully responsive layout (mobile, tablet, desktop)
- ✨ Smooth scroll animations and transitions
- 🎯 Interactive project cards with hover effects
- 📧 Contact form with state management
- 🎭 Animated floating background shapes
- 🍔 Mobile-friendly hamburger navigation
- 🔥 Hot Module Replacement (HMR) for instant updates

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables, Grid, Flexbox
- **Font Awesome** - Icons
- **JavaScript ES6+** - Modern JavaScript features

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📜 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

### Updating Content

Each section is a separate component in `src/components/`:

- **Navbar.jsx** - Navigation menu and logo
- **Hero.jsx** - Landing section with introduction
- **About.jsx** - About section with stats
- **Skills.jsx** - Skills categories and tags
- **Projects.jsx** - Project showcase cards
- **Contact.jsx** - Contact form and information
- **Footer.jsx** - Footer with social links

### Adding Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description goes here.',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  // ... more projects
];
```

## 🔧 Component Features

### Navbar Component
- Fixed position with scroll effect
- Mobile responsive hamburger menu
- Active link highlighting
- Smooth scroll navigation

### Hero Component
- Animated text entrance
- Social media links
- Call-to-action buttons
- Animated background shapes

### About Component
- Dynamic stats display
- Responsive grid layout
- Hover animations

### Skills Component
- Categorized skill sets
- Icon integration
- Interactive tags
- Grid layout

### Projects Component
- Project cards with gradients
- Hover overlay effects
- Technology tags
- External and GitHub links

### Contact Component
- Form state management with useState
- Form validation
- Contact information display
- Responsive layout

### Footer Component
- Dynamic year display
- Social media links
- Hover animations

## 🎯 React Hooks Used

- `useState` - Form data management, menu toggle
- `useEffect` - Scroll event listeners, component lifecycle

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔍 Performance Optimizations

- Component-based architecture for code splitting
- CSS variables for efficient styling
- Smooth scroll with CSS `scroll-behavior`
- Optimized animations with CSS transforms
- Lazy loading ready (add `React.lazy()` as needed)

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Font Awesome React](https://fontawesome.com/docs/web/use-with/react/)

## 📝 Future Enhancements

- [ ] Add React Router for multi-page support
- [ ] Implement dark/light theme toggle with context
- [ ] Add framer-motion for advanced animations
- [ ] Integrate with a backend API for contact form
- [ ] Add blog section with Markdown support
- [ ] Implement lazy loading for images
- [ ] Add unit tests with Vitest
- [ ] Add analytics tracking
- [ ] Convert to TypeScript
- [ ] Implement PWA features

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- Email: contact@robenalam.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Made with ❤️ using React and Vite
