# Modern Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS. This project features a clean, professional design with smooth animations and a mobile-first approach.

## 🚀 Features

- **Modern Design**: Clean and professional UI with attention to typography and spacing
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Component-Based Architecture**: Well-organized and maintainable code structure
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Type Checking**: TypeScript
- **Code Quality**: ESLint
- **Fonts**: Days One, Gilroy-Medium

## 📦 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section with main CTA
│   │   ├── AboutUs.tsx        # About section
│   │   ├── Stats.tsx          # Statistics section
│   │   ├── BlogSection.tsx    # Blog posts grid
│   │   └── ContactForm.tsx    # Contact form with validation
│   ├── ui/                    # Reusable UI components
│   ├── Navbar.tsx            # Navigation with smooth scroll
│   └── Footer.tsx            # Footer with social links
├── pages/                    # Page components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
└── App.tsx                   # Main application component
```

## 🎯 Key Components

### Navbar
- Fixed position with glass morphism effect
- Smooth scroll navigation
- Mobile-responsive menu
- Custom styling with backdrop blur

### Hero Section
- Full-screen design
- Custom typography with Days One font
- Responsive image handling
- Engaging call-to-action

### Stats Section
- Clean number presentation
- Animated counters
- Responsive grid layout
- Custom background effects

### Blog Section
- Modern card design
- Image optimization
- Grid layout with proper spacing
- Hover effects

### Contact Form
- Form validation
- Success notifications
- Clean input styling
- Responsive layout

### Footer
- Three-column layout
- Social media integration
- Company information
- Navigation links
- Copyright information

## 🎨 Design Features

### Colors
- Primary Background: #2A323B
- Text Colors: 
  - Primary: White
  - Secondary: rgba(255, 255, 255, 0.6)
- Accent Colors: Custom for each section

### Typography
- Headings: Days One
- Body: Gilroy-Medium
- Various sizes for different sections:
  - Hero Title: 64px
  - Section Headings: 40px
  - Body Text: 22px

### Spacing
- Consistent padding and margins
- Responsive gaps between elements
- Section-specific spacing

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone [repository-url]
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Adaptive layouts for each section
- Touch-friendly interactions

## 🔧 Configuration

### Tailwind Configuration
- Custom colors
- Extended theme
- Custom plugins
- Responsive breakpoints

### TypeScript Configuration
- Strict mode enabled
- Path aliases
- Type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Credits

- Design: Mahdie Heshmati
- Development: [Your Team/Company]
- Icons: Lucide React
- Fonts: Days One, Gilroy-Medium
