# 🚀 3D Electrical Engineering Portfolio

A modern, interactive 3D portfolio website showcasing electrical engineering projects and expertise. Built with React, Three.js, and Vite for optimal performance.

**Live Demo:** [View Portfolio](https://your-site-name.netlify.app)

---

## ✨ Features

- 🎨 **Interactive 3D Visualizations** - Rotating 3D Earth and PC components
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for instant load times
- 🎯 **Smooth Animations** - Framer Motion animations throughout
- 🌐 **3D Graphics** - Three.js powered 3D rendering
- 📧 **Contact Form** - Integrated email functionality with EmailJS
- 🔗 **Social Links** - Easy connection via LinkedIn, GitHub, Email, Phone, Location
- 🎭 **Modern UI** - Clean, professional design with Tailwind CSS

---

## 🎮 3D Components Explained

### **1. Hero Section - 3D Computer (ComputersCanvas)**
**File:** `src/components/canvas/Computers.tsx`

**What it does:**
- Displays an animated 3D desktop computer with a custom PCB circuit board image on the monitor
- The PC rotates automatically as you scroll
- Shows your technical expertise through the 3D visualization

**How it works:**
```typescript
// Loads 3D model
const computer = useGLTF("./desktop_pc/scene.gltf");

// Applies PCB image texture to monitor
const newMaterial = new THREE.MeshBasicMaterial({
  map: pcbTexture, // PCB circuit board image
});
```

**Key Features:**
- Scale: 0.75 (adjustable)
- Responsive sizing for mobile devices
- Custom PCB image display on monitor
- Lighting with hemisphere and spot lights

**Location on Site:** Hero section (top of page)

---

### **2. Contact Section - 3D Rotating Earth (EarthCanvas)**
**File:** `src/components/canvas/Earth.tsx`

**What it does:**
- Renders a rotating 3D planet Earth
- Continuously rotates to grab attention
- Appears alongside the contact form

**How it works:**
```typescript
// Loads Earth 3D model
const earth = useGLTF("./planet/scene.gltf");

// Configuration
scale={2.3}              // Size of Earth
position={[-4, 3, 6]}   // Camera position
fov={45}                 // Field of view
```

**Key Features:**
- Auto-rotating animation
- Orbit controls (no user pan/zoom)
- Responsive camera settings
- Scale: 2.3 (for optimal visibility)
- Fixed camera angle

**Location on Site:** Contact section (bottom-right)

---

### **3. Background - Animated Stars (StarsCanvas)**
**File:** `src/components/canvas/Stars.tsx`

**What it does:**
- Creates a particle system of floating stars
- Provides ambient background animation
- Enhances the sci-fi/tech aesthetic

**Key Features:**
- Randomly positioned 3D points
- Smooth floating motion
- Low performance impact
- Creates immersive backdrop

**Location on Site:** Contact section background

---

### **4. Ball Canvas - Technology Icons**
**File:** `src/components/canvas/Ball.tsx`

**What it does:**
- Renders 3D rotating spheres with technology icons
- Used to display skills and tools
- Originally used in Tech section

**Note:** Currently removed from main display but available for future use

---

## 🛠️ Technologies Used

### **Frontend Framework**
- **React 18.2** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Vite 5.0** - Lightning-fast build tool

### **3D Graphics**
- **Three.js 0.161** - 3D graphics library
- **@react-three/fiber 8.15** - React renderer for Three.js
- **@react-three/drei 9.99** - Useful 3D utilities
- **GLTF Models** - 3D model format for scenes

### **Styling & Animation**
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation
- **Framer Motion 9.0** - React animation library

### **UI Components**
- **React Router DOM 6.22** - Client-side routing
- **React Parallax Tilt** - 3D tilt effect
- **React Vertical Timeline** - Timeline component

### **Email & Forms**
- **EmailJS** - Email service integration
- **@emailjs/browser** - EmailJS browser SDK

### **Development Tools**
- **ESLint** - Code quality & style checking
- **Tailwind Config** - Tailwind CSS configuration
- **TypeScript Compiler** - Type checking

---

## 📦 Installation

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### **Steps**

1. **Clone the repository:**
```bash
git clone https://github.com/ItsDarker/Portfolio.git
cd Portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```
The site opens at `http://localhost:5176`

4. **Build for production:**
```bash
npm run build
```
Creates optimized files in the `dist/` folder

---

## ⚙️ Configuration & Customization

### **Personal Information**
**File:** `src/constants/config.ts`

Update your details:
```typescript
export const config: TConfig = {
  html: {
    title: "Your Name",
    fullName: "Your Full Name",
    email: "your.email@gmail.com",
  },
  hero: {
    name: "Your Name",
    p: ["Your title line 1", "Your title line 2"],
  },
  // ... more configs
};
```

### **Projects**
**File:** `src/constants/index.ts`

Add/edit projects:
```typescript
const projects: TProject[] = [
  {
    name: "Project Title",
    description: "Project description...",
    tags: [
      { name: "technology", color: "blue-text-gradient" },
    ],
    image: projectImage,
    sourceCodeLink: "https://github.com/...",
  },
  // Add more projects
];
```

### **Education & Experience**
**File:** `src/constants/index.ts`

Update education timeline:
```typescript
const experiences: TExperience[] = [
  {
    title: "Degree Title",
    companyName: "University Name",
    icon: universityLogo,
    date: "Start Date - End Date",
    points: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
];
```

### **Technologies/Skills**
**File:** `src/constants/index.ts`

Update technology stack:
```typescript
const technologies: TTechnology[] = [
  {
    name: "Technology Name",
    icon: technologyIcon,
  },
];
```

### **3D Objects Scale**

**Adjust Earth size:**
```typescript
// File: src/components/canvas/Earth.tsx
scale={2.3}  // Change this value (default: 2.3)
```

**Adjust Computer size:**
```typescript
// File: src/components/canvas/Computers.tsx
scale={isMobile ? 0.7 : 0.75}  // Change these values
```

### **Monitor Display Image**
**File:** `src/components/canvas/Computers.tsx`

Replace with your own image:
1. Add image to `public/` folder
2. Update the texture path:
```typescript
const pcbTexture = useTexture("/your-image.png");
```

---

## 🚀 Deployment

### **Deploy to Netlify (Recommended)**

1. **Push to GitHub:**
```bash
git add .
git commit -m "Your message"
git push origin main
```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and your Portfolio repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain:**
   - In Netlify dashboard → Domain settings
   - Add your custom domain

### **Deploy to Vercel**
```bash
npm i -g vercel
vercel
```

### **Deploy to GitHub Pages**
1. Update `vite.config.js`:
```javascript
export default {
  base: '/Portfolio/',
  // ...
}
```
2. Push to GitHub
3. Go to Settings → Pages
4. Select `dist` folder as source

---

## 📁 Project Structure

```
Portfolio/
├── public/                    # Static assets
│   ├── desktop_pc/           # 3D PC model
│   ├── pcb_img.png          # Monitor display image
│   └── logo.svg             # Site logo
│
├── src/
│   ├── components/
│   │   ├── canvas/          # 3D components
│   │   │   ├── Computers.tsx    # 3D PC with PCB display
│   │   │   ├── Earth.tsx        # Rotating Earth
│   │   │   ├── Stars.tsx        # Background stars
│   │   │   └── Ball.tsx         # Tech icon spheres
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Works.tsx
│   │   │   └── Contact.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Loader.tsx
│   │   └── atoms/           # Small components
│   │
│   ├── constants/           # Configuration
│   │   ├── config.ts        # Personal info & text
│   │   ├── styles.ts        # Tailwind styles
│   │   └── index.ts         # Projects, skills, etc.
│   │
│   ├── assets/              # Images & icons
│   │   ├── company/         # Education logos
│   │   ├── tech/            # Technology icons
│   │   └── index.ts         # Asset exports
│   │
│   ├── hoc/                 # Higher-order components
│   │   └── SectionWrapper.tsx
│   │
│   ├── utils/               # Utility functions
│   │   └── motion.ts        # Animation utilities
│   │
│   ├── App.tsx              # Main app component
│   ├── globals.css          # Global styles
│   └── main.tsx             # Entry point
│
├── package.json             # Dependencies
├── tailwind.config.cjs       # Tailwind config
├── postcss.config.cjs        # PostCSS config
├── tsconfig.json            # TypeScript config
├── vite.config.js           # Vite config
└── index.html               # HTML entry point
```

---

## 🎨 Customization Guide

### **Change Colors**
**File:** `tailwind.config.cjs`

```javascript
theme: {
  extend: {
    colors: {
      primary: "#050816",      // Background
      secondary: "#aaa6c3",    // Text
      tertiary: "#151030",     // Cards
    },
  },
}
```

### **Change Fonts**
**File:** `src/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap");
```

### **Add New Sections**
1. Create component in `src/components/sections/`
2. Import in `src/App.tsx`
3. Add to render tree

### **Update Social Links**
**File:** `src/components/sections/Contact.tsx`

Update URLs:
```typescript
href="https://www.linkedin.com/in/your-profile"
href="mailto:your.email@gmail.com"
href="tel:+1234567890"
```

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript type check
npm run ts:check

# Lint code
npm run lint
```

---

## 📧 Email Setup (Optional)

To enable the contact form:

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create account and service
3. Create email template
4. Get your credentials
5. Add to `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_token
```

---

## 🎯 Key Features Explained

### **Responsive Design**
- Mobile-first approach
- Breakpoints: xs (450px), sm, md, lg, xl
- 3D objects hide on mobile for performance

### **Performance Optimization**
- Lazy loading of 3D models
- Optimized images
- Code splitting with Vite
- GLTF model compression

### **Animation Effects**
- Framer Motion for smooth transitions
- 3D model auto-rotation
- Parallax tilt effects
- Scroll-triggered animations

### **Accessibility**
- Semantic HTML
- Proper contrast ratios
- Keyboard navigation
- Screen reader friendly

---

## 🐛 Troubleshooting

### **3D Objects Not Loading**
- Check GLTF model files in `public/` folder
- Verify camera positions and FOV
- Check browser console for errors

### **Email Form Not Working**
- Verify EmailJS credentials
- Check environment variables
- Test with EmailJS dashboard

### **Build Errors**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Port Already in Use**
```bash
# Use different port
npm run dev -- --port 3000
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is open source. Feel free to fork and customize for your own portfolio!

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📞 Contact & Social

- **Email:** kumaran2962@gmail.com
- **LinkedIn:** [Your LinkedIn](https://linkedin.com/in/kumaransankar)
- **GitHub:** [ItsDarker](https://github.com/ItsDarker)
- **Location:** Chicago, Illinois

---

## 🎓 Credits

Built with:
- React & Three.js
- Tailwind CSS
- Framer Motion
- And ❤️

---

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Last Updated:** March 2024

**Made with ❤️ by Kumaran Sankar**
