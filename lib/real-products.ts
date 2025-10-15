// 🎯 PRODUCTOS REALES DE LIZO CON IMÁGENES VERDADERAS

export interface RealProduct {
  id: string
  name: string
  category: 'Planchas' | 'Secadores' | 'Tijeras' | 'Cortadoras' | 'Pinzas' | 'Cepillos' | 'Cabezotes' | 'Barberas'
  price: number
  originalPrice: number
  image: string
  images: string[]
  description: string
  features: string[]
  inStock: boolean
  featured: boolean
  bestseller: boolean
  rating: number
  reviews: number
}

export const realProducts: RealProduct[] = [
  // 🔥 PLANCHAS
  {
    id: 'plancha-infrared-2023',
    name: 'Plancha Infrared 2023',
    category: 'Planchas',
    price: 89900,
    originalPrice: 120000,
    image: '/imagenes lizo/PNG planchas/plancha infrared 2023.png',
    images: [
      '/imagenes lizo/PNG planchas/plancha infrared 2023.png',
      '/imagenes lizo/PNG planchas/plancha infrared ancha.png'
    ],
    description: 'Plancha profesional con tecnología infrarroja que protege tu cabello mientras lo alisa perfectamente.',
    features: [
      'Tecnología infrarroja',
      'Placas de cerámica turmalina',
      'Temperatura ajustable hasta 230°C',
      'Calentamiento rápido 60 segundos',
      'Cable giratorio 360°'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviews: 342
  },
  {
    id: 'plancha-eleganza-ext485',
    name: 'Plancha Eleganza EXT485',
    category: 'Planchas',
    price: 79900,
    originalPrice: 95000,
    image: '/imagenes lizo/PNG planchas/plancha Eleganza EXT485.png',
    images: [
      '/imagenes lizo/PNG planchas/plancha Eleganza EXT485.png',
      '/imagenes lizo/PNG planchas/plancha Eleganza EXT485 caja.png'
    ],
    description: 'Plancha de diseño elegante con control digital de temperatura para resultados profesionales.',
    features: [
      'Pantalla LCD digital',
      'Placas flotantes de titanio',
      'Iónica para menos frizz',
      'Apagado automático',
      'Estuche térmico incluido'
    ],
    inStock: true,
    featured: true,
    bestseller: false,
    rating: 4.8,
    reviews: 218
  },
  {
    id: 'steam-liner',
    name: 'Steam Liner con Vapor',
    category: 'Planchas',
    price: 95900,
    originalPrice: 125000,
    image: '/imagenes lizo/PNG planchas/steam liner con vapor.png',
    images: [
      '/imagenes lizo/PNG planchas/steam liner con vapor.png',
      '/imagenes lizo/PNG planchas/steam liner A.png',
      '/imagenes lizo/PNG planchas/steam liner B.png'
    ],
    description: 'Plancha innovadora con vapor para hidratación profunda mientras alisas tu cabello.',
    features: [
      'Sistema de vapor profesional',
      'Tanque de agua integrado',
      'Placas de cerámica nano titanio',
      'Doble voltaje 110V-220V',
      'Bloqueo de temperatura'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviews: 456
  },
  {
    id: 'plancha-ceramica-gold',
    name: 'Plancha Cerámica Gold',
    category: 'Planchas',
    price: 69900,
    originalPrice: 85000,
    image: '/imagenes lizo/PNG planchas/plancha ceramica gold.png',
    images: ['/imagenes lizo/PNG planchas/plancha ceramica gold.png'],
    description: 'Plancha con recubrimiento de cerámica dorada para máxima suavidad y brillo.',
    features: [
      'Cerámica 100% pura',
      'Temperatura regulable',
      'Calentamiento 30 segundos',
      'Placas anchas 3cm',
      'Uso profesional y doméstico'
    ],
    inStock: true,
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'miniplancha',
    name: 'Mini Plancha Portátil',
    category: 'Planchas',
    price: 45900,
    originalPrice: 58000,
    image: '/imagenes lizo/PNG planchas/miniplancha.png',
    images: ['/imagenes lizo/PNG planchas/miniplancha.png'],
    description: 'Plancha compacta perfecta para viajes y retoques rápidos en cualquier lugar.',
    features: [
      'Tamaño mini portátil',
      'Doble voltaje',
      'Calentamiento rápido',
      'Bolsa de viaje incluida',
      'Ideal para flequillo y retoques'
    ],
    inStock: true,
    featured: false,
    bestseller: false,
    rating: 4.6,
    reviews: 156
  },

  // 💨 SECADORES
  {
    id: 'extraturbo-5500',
    name: 'Secador ExtraTurbo 5500',
    category: 'Secadores',
    price: 119900,
    originalPrice: 150000,
    image: '/imagenes lizo/PNG secadores/extraturbo 5500.png',
    images: [
      '/imagenes lizo/PNG secadores/extraturbo 5500.png',
      '/imagenes lizo/PNG secadores/extraturbo 5500 B.png',
      '/imagenes lizo/PNG secadores/extraturbo 5500 C.png',
      '/imagenes lizo/PNG secadores/extraturbo 5500 boquilla1.png',
      '/imagenes lizo/PNG secadores/extraturbo 5500 disipador.png'
    ],
    description: 'Secador profesional de 5500W con motor AC de larga duración y tecnología iónica.',
    features: [
      'Motor AC profesional 5500W',
      'Tecnología iónica anti-frizz',
      '3 velocidades + 3 temperaturas',
      '2 boquillas concentradoras',
      'Botón de aire frío',
      'Cable de 3 metros',
      'Rejilla trasera desmontable'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 5.0,
    reviews: 567
  },
  {
    id: 'leafless-hair-dryer',
    name: 'Leafless Hair Dryer',
    category: 'Secadores',
    price: 135900,
    originalPrice: 180000,
    image: '/imagenes lizo/PNG secadores/leafless hair dryer A.png',
    images: [
      '/imagenes lizo/PNG secadores/leafless hair dryer A.png',
      '/imagenes lizo/PNG secadores/leafless hair dryer accesorios.png'
    ],
    description: 'Secador sin aspas de diseño futurista con múltiples accesorios profesionales.',
    features: [
      'Diseño sin aspas innovador',
      'Motor digital inteligente',
      '5 accesorios intercambiables',
      'Control magnético de accesorios',
      'Ultra silencioso',
      'Sensor de temperatura',
      'Estuche premium incluido'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviews: 423
  },

  // ✂️ TIJERAS PROFESIONALES
  {
    id: 'tijera-set-iris',
    name: 'Set Tijeras Profesional Iris',
    category: 'Tijeras',
    price: 89900,
    originalPrice: 110000,
    image: '/imagenes lizo/PNG tijeras/tijera 1 set iris.png',
    images: ['/imagenes lizo/PNG tijeras/tijera 1 set iris.png'],
    description: 'Set completo de tijeras profesionales con acabado iris para barberos y estilistas.',
    features: [
      'Acero japonés 440C',
      'Tijera de corte 6.5 pulgadas',
      'Tijera de entresacar 6 pulgadas',
      'Filo convexo ultra afilado',
      'Tornillo ajustable',
      'Estuche de lujo incluido'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'tijera-set-dorado',
    name: 'Set Tijeras Gold Edition',
    category: 'Tijeras',
    price: 95900,
    originalPrice: 120000,
    image: '/imagenes lizo/PNG tijeras/tijera 1 set dorado.png',
    images: [
      '/imagenes lizo/PNG tijeras/tijera 1 set dorado.png',
      '/imagenes lizo/PNG tijeras/tij lisa dorada.png',
      '/imagenes lizo/PNG tijeras/tij microd dorada.png'
    ],
    description: 'Set premium de tijeras con acabado dorado elegante para profesionales exigentes.',
    features: [
      'Acabado gold titanium',
      'Acero inoxidable 440C',
      'Set 2 piezas profesional',
      'Ergonomía offset',
      'Silenciador de ruido',
      'Garantía de por vida'
    ],
    inStock: true,
    featured: true,
    bestseller: false,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 'tijera-set-azul',
    name: 'Set Tijeras Blue Professional',
    category: 'Tijeras',
    price: 89900,
    originalPrice: 110000,
    image: '/imagenes lizo/PNG tijeras/tijera 1 set azul.png',
    images: [
      '/imagenes lizo/PNG tijeras/tijera 1 set azul.png',
      '/imagenes lizo/PNG tijeras/tij lisa azul.png',
      '/imagenes lizo/PNG tijeras/tij microd azul.png'
    ],
    description: 'Set de tijeras con acabado azul metálico, diseño ergonómico y filo perfecto.',
    features: [
      'Coating azul antialérgico',
      'Acero japonés premium',
      'Diseño ergonómico',
      'Filo duradero',
      'Incluye estuche rígido',
      'Ideal para uso intensivo'
    ],
    inStock: true,
    featured: false,
    bestseller: false,
    rating: 4.8,
    reviews: 145
  },

  // 🎨 PINZAS Y ACCESORIOS
  {
    id: 'triple-barril',
    name: 'Pinza Triple Barril LZ-1968',
    category: 'Pinzas',
    price: 65900,
    originalPrice: 82000,
    image: '/imagenes lizo/PNG pinzas/triple-barril-LZ-1968.png',
    images: [
      '/imagenes lizo/PNG pinzas/triple-barril-LZ-1968.png',
      '/imagenes lizo/PNG pinzas/caja-pinza-triple.png'
    ],
    description: 'Pinza triple para crear ondas perfectas estilo sirena en minutos.',
    features: [
      'Triple barril cerámico',
      'Temperatura ajustable hasta 210°C',
      'Calentamiento rápido',
      'Guante térmico incluido',
      'Cable giratorio',
      'Resultados profesionales'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.8,
    reviews: 267
  },
  {
    id: 'trio-clipless',
    name: 'Trio Clipless Waver',
    category: 'Pinzas',
    price: 69900,
    originalPrice: 88000,
    image: '/imagenes lizo/PNG pinzas/trio clipless.png',
    images: ['/imagenes lizo/PNG pinzas/trio clipless.png'],
    description: 'Pinza onduladora sin clip para ondas naturales y voluminosas sin marcas.',
    features: [
      'Diseño sin clip',
      'Barriles de turmalina',
      'Control digital de temperatura',
      'Ondas sin marcas',
      'Apagado automático',
      'Profesional y doméstico'
    ],
    inStock: true,
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'pinza-lizo',
    name: 'Pinza Rizadora Lizo',
    category: 'Pinzas',
    price: 49900,
    originalPrice: 65000,
    image: '/imagenes lizo/PNG pinzas/pinza Lizo.png',
    images: ['/imagenes lizo/PNG pinzas/pinza Lizo.png'],
    description: 'Pinza clásica de 1 pulgada perfecta para rizos definidos y duraderos.',
    features: [
      'Barril cerámico 1 pulgada',
      'Temperatura variable',
      'Punta fría aislada',
      'Soporte de seguridad',
      'Cable giratorio 360°',
      'Ligera y ergonómica'
    ],
    inStock: true,
    featured: false,
    bestseller: false,
    rating: 4.6,
    reviews: 134
  },

  // 🎯 PRODUCTOS ADICIONALES
  {
    id: 'aceite-argan',
    name: 'Aceite de Argán Lizo',
    category: 'Cepillos',
    price: 35900,
    originalPrice: 45000,
    image: '/imagenes lizo/PNG secadores/aceite argan lizo.png',
    images: ['/imagenes lizo/PNG secadores/aceite argan lizo.png'],
    description: 'Aceite 100% puro de argán marroquí para nutrición profunda y brillo extremo.',
    features: [
      '100% aceite de argán puro',
      'Protección térmica',
      'Brillo instantáneo',
      'Anti-frizz',
      'Sin parabenos',
      'Aplicador gotero'
    ],
    inStock: true,
    featured: true,
    bestseller: true,
    rating: 4.9,
    reviews: 389
  },
  {
    id: 'boquilla-titanium',
    name: 'Boquilla Titanium Concentradora',
    category: 'Secadores',
    price: 25900,
    originalPrice: 35000,
    image: '/imagenes lizo/PNG secadores/boquilla titanium Lizo.png',
    images: [
      '/imagenes lizo/PNG secadores/boquilla titanium Lizo.png',
      '/imagenes lizo/PNG secadores/boquilla secador.png'
    ],
    description: 'Boquilla profesional de titanio para secado preciso y acabados perfectos.',
    features: [
      'Material titanium resistente',
      'Concentra el aire 70%',
      'Compatible universal',
      'Resistente al calor extremo',
      'Acabados profesionales',
      'Fácil instalación'
    ],
    inStock: true,
    featured: false,
    bestseller: false,
    rating: 4.7,
    reviews: 89
  }
]

// Filtros útiles
export const getFeaturedProducts = () => realProducts.filter(p => p.featured)
export const getBestsellers = () => realProducts.filter(p => p.bestseller)
export const getProductsByCategory = (category: RealProduct['category']) => 
  realProducts.filter(p => p.category === category)
export const getInStockProducts = () => realProducts.filter(p => p.inStock)
