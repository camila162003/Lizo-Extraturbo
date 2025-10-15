/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Sistema base
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // PALETA PRINCIPAL ROSA Y BLANCO
        elegant: {
          50: '#ffffff',   // Blanco puro
          100: '#fef7f0',  // Blanco con toque rosa
          200: '#fce7f3',  // Rosa muy suave
          300: '#f9a8d4',  // Rosa claro
          400: '#f472b6',  // Rosa medio
          500: '#ec4899',  // Rosa vibrante
          600: '#db2777',  // Rosa intenso
          700: '#be185d',  // Rosa profundo
          800: '#9d174d',  // Rosa oscuro
          900: '#831843',  // Rosa muy oscuro
        },

        // PALETA PREMIUM ROSA DEGRADADO
        premium: {
          50: '#ffffff',   // Blanco puro
          100: '#fdf2f8',  // Rosa casi blanco
          200: '#fce7f3',  // Rosa muy suave
          300: '#fbcfe8',  // Rosa suave
          400: '#f9a8d4',  // Rosa claro
          500: '#f472b6',  // Rosa medio
          600: '#ec4899',  // Rosa vibrante
          700: '#db2777',  // Rosa intenso
          800: '#be185d',  // Rosa profundo
          900: '#9d174d',  // Rosa oscuro
        },

        // PALETA BLANCO Y GRISES SUAVES
        barber: {
          50: '#ffffff',   // Blanco puro
          100: '#fafafa',  // Gris casi blanco
          200: '#f5f5f5',  // Gris muy claro
          300: '#e5e5e5',  // Gris claro
          400: '#d4d4d4',  // Gris medio claro
          500: '#a3a3a3',  // Gris medio
          600: '#737373',  // Gris oscuro
          700: '#525252',  // Gris carbón
          800: '#404040',  // Casi negro
          900: '#262626',  // Negro suave
        },

        // Acentos dorados y metálicos
        gold: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },

        // Colores de acento suaves
        accent: {
          cream: '#faf7f0',
          champagne: '#f7e7ce',
          pearl: '#f8f6f0',
          silver: '#e5e7eb',
          rose: '#fdf2f8',
        },

        // Colores legacy suavizados
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--foreground))",
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        "loading-spin": "loading-spin 1s linear infinite",
        "loading-pulse": "loading-pulse 1.5s ease-in-out infinite",
        "logo-reveal": "logo-reveal 1.2s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        "loading-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "loading-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "logo-reveal": {
          "0%": { transform: "scale(0.5) rotate(-10deg)", opacity: "0" },
          "50%": { transform: "scale(1.1) rotate(5deg)", opacity: "0.8" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}