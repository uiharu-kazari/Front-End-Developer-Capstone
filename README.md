# Little Lemon Restaurant - Table Booking Web Application

A modern, accessible web application for the Little Lemon Mediterranean restaurant, featuring an online table reservation system built with React and React Router.

![Little Lemon](public/og-image.jpg)

## 🍋 About Little Lemon

Little Lemon is a charming neighborhood bistro in Chicago that serves simple Mediterranean food and classic cocktails in a lively but casual environment. This web application allows customers to:

- Browse the restaurant menu and weekly specials
- Read customer testimonials
- Learn about the restaurant's history
- **Reserve tables online** with real-time availability

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Table Booking System**: Complete reservation form with date, time, guest count, and occasion selection
- **Form Validation**: Both HTML5 and JavaScript validation for data integrity
- **Accessibility**: WCAG-compliant with ARIA attributes, semantic HTML, and keyboard navigation
- **SEO Optimized**: Meta tags and Open Graph Protocol for social sharing
- **Unit Tested**: Comprehensive test suite using Vitest and React Testing Library

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fdc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run start` | Serve the production build |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
fdc/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Site header with navigation
│   │   ├── Nav.tsx          # Navigation menu component
│   │   ├── Footer.tsx       # Site footer
│   │   ├── CallToAction.tsx # Hero section component
│   │   ├── Specials.tsx     # Weekly specials display
│   │   ├── Testimonials.tsx # Customer reviews section
│   │   ├── About.tsx        # About section component
│   │   ├── BookingForm.tsx  # Table reservation form
│   │   └── ConfirmedBooking.tsx # Booking confirmation
│   ├── routes/              # Page components
│   │   ├── home.tsx         # Homepage
│   │   ├── booking.tsx      # Booking page with form
│   │   ├── booking-confirmed.tsx # Confirmation page
│   │   ├── about.tsx        # About page
│   │   ├── menu.tsx         # Menu page
│   │   ├── order.tsx        # Online ordering page
│   │   └── login.tsx        # User login page
│   ├── tests/               # Unit tests
│   │   ├── BookingForm.test.tsx
│   │   ├── booking.test.ts
│   │   ├── api.test.ts
│   │   ├── components.test.tsx
│   │   └── setup.ts
│   ├── utils/               # Utility functions
│   │   └── api.ts           # API functions for bookings
│   ├── app.css              # Global styles
│   ├── root.tsx             # Root layout component
│   └── routes.ts            # Route configuration
├── public/                  # Static assets
│   ├── logo.svg
│   ├── favicon.ico
│   └── [images]
├── package.json
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Brand Colors
- **Primary Green**: `#495E57`
- **Primary Yellow**: `#F4CE14`
- **Secondary Salmon**: `#EE9972`
- **Secondary Peach**: `#FBDABB`
- **Highlight Light**: `#EDEFEE`
- **Highlight Dark**: `#333333`

### Typography
- **Primary Font**: Markazi Text (headings)
- **Secondary Font**: Karla (body text)

## 🧪 Testing

The application includes comprehensive unit tests covering:

- Component rendering
- Form validation (HTML5 attributes and React validation)
- State management (useReducer)
- API functions (fetchAPI, submitAPI)
- Accessibility attributes

Run the tests:
```bash
# Watch mode
npm run test

# Single run
npm run test:run

# With coverage
npm run test:coverage
```

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`
- **ARIA Labels**: Descriptive labels for interactive elements
- **Form Accessibility**: Labels linked to inputs, error messages with `role="alert"`
- **Keyboard Navigation**: Skip links, focus management
- **Color Contrast**: WCAG AA compliant color combinations
- **Screen Reader Support**: Hidden text for icons and visual elements

## 🔧 Technologies Used

- **React 19** - UI library
- **React Router 7** - Routing
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Vitest** - Testing framework
- **React Testing Library** - Component testing
- **CSS3** - Styling (with CSS custom properties)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👏 Acknowledgments

- Meta Front-End Developer Professional Certificate
- Little Lemon Restaurant (fictional)
- React and React Router teams

---

Made with 🍋 by Little Lemon
