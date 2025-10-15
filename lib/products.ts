export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  rating: number
  reviews: number
  isNew?: boolean
  isPopular?: boolean
  discount?: number
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  icon: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: 'secadores',
    name: 'Secadores',
    description: 'Secadores profesionales de alta potencia',
    image: '/imagenes lizo/PNG secadores/extraturbo 5500.png',
    icon: '💨',
    productCount: 13
  },
  {
    id: 'planchas',
    name: 'Planchas',
    description: 'Planchas de cerámica y titanio premium',
    image: '/imagenes lizo/PNG planchas/plancha Eleganza EXT485.png',
    icon: '🔥',
    productCount: 5
  },
  {
    id: 'pinzas',
    name: 'Pinzas',
    description: 'Pinzas rizadoras y moldeadoras profesionales',
    image: '/imagenes lizo/PNG planchas/quita horquillas A.png',
    icon: '💫',
    productCount: 4
  },
  {
    id: 'cortadoras',
    name: 'Patilleras & Cortadoras',
    description: 'Cortadoras y patilleras de precisión',
    image: '/imagenes lizo/PNG barberas/barb metal militar.png',
    icon: '✂️',
    productCount: 8
  },
  {
    id: 'cepillos',
    name: 'Cepillos',
    description: 'Cepillos especializados para todo tipo de cabello',
    image: '/imagenes lizo/PNG barberas/cuchilla dorada.png',
    icon: '🪥',
    productCount: 12
  },
  {
    id: 'tijeras',
    name: 'Tijeras',
    description: 'Tijeras profesionales de corte preciso',
    image: '/imagenes lizo/PNG barberas/cuchilla lila rosado.png',
    icon: '✂️',
    productCount: 6
  },
  {
    id: 'barberia',
    name: 'Barbería',
    description: 'Equipamiento completo para barbería profesional',
    image: '/imagenes lizo/PNG barberas/barb 100 dolares.png',
    icon: '💈',
    productCount: 18
  },
  {
    id: 'spa',
    name: 'Spa & Belleza',
    description: 'Equipos para spa y tratamientos de belleza',
    image: '/imagenes lizo/PNG otros/Spa pies LIZO.png',
    icon: '💅',
    productCount: 15
  }
]

export const products: Product[] = [
  // SECADORES
  {
    id: 'sec-001',
    name: 'Secador ExtraTurbo 5500W',
    price: 850000,
    image: '/imagenes lizo/PNG secadores/extraturbo 5500.png',
    category: 'secadores',
    description: 'Secador profesional de alta potencia con tecnología turbo avanzada',
    rating: 4.9,
    reviews: 156,
    isPopular: true
  },
  {
    id: 'sec-002',
    name: 'Leafless Hair Dryer',
    price: 950000,
    image: '/imagenes lizo/PNG secadores/leafless hair dryer.png',
    category: 'secadores',
    description: 'Secador sin aspas revolucionario con control de temperatura inteligente',
    rating: 4.9,
    reviews: 89,
    isNew: true
  },
  {
    id: 'sec-003',
    name: 'Secador Turbo 6200W con Vapor',
    price: 750000,
    image: '/imagenes lizo/PNG secadores/secador turbo 6200w con vapor.png',
    category: 'secadores',
    description: 'Potencia extrema con sistema de vapor profesional integrado',
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'sec-004',
    name: 'Secador KF8946',
    price: 350000,
    image: '/imagenes lizo/PNG secadores/secd KF8946.png',
    category: 'secadores',
    description: 'Secador compacto profesional con múltiples velocidades',
    rating: 4.5,
    reviews: 178
  },
  {
    id: 'sec-005',
    name: 'Secador EXT2401',
    price: 420000,
    image: '/imagenes lizo/PNG secadores/Secador EXT2401.png',
    category: 'secadores',
    description: 'Modelo profesional con disipador de calor avanzado',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'sec-006',
    name: 'Secador KF5877',
    price: 320000,
    image: '/imagenes lizo/PNG secadores/secador kf 5877-1.png',
    category: 'secadores',
    description: 'Secador ergonómico con difusor incluido ideal para uso diario',
    rating: 4.6,
    reviews: 92
  },
  {
    id: 'sec-007',
    name: 'Secador KF9853',
    price: 380000,
    image: '/imagenes lizo/PNG secadores/secd KF9853.png',
    category: 'secadores',
    description: 'Secador de alta calidad con tecnología de protección térmica',
    rating: 4.7,
    reviews: 67
  },
  {
    id: 'sec-008',
    name: 'Aceite Argán Lizo',
    price: 180000,
    image: '/imagenes lizo/PNG secadores/aceite argan lizo.png',
    category: 'secadores',
    description: 'Aceite de argán premium para tratamientos capilares profesionales',
    rating: 4.8,
    reviews: 203,
    isNew: true
  },

  // PLANCHAS
  {
    id: 'pla-001',
    name: 'Plancha Eleganza EXT485',
    price: 950000,
    originalPrice: 1200000,
    image: '/imagenes lizo/PNG planchas/plancha Eleganza EXT485.png',
    category: 'planchas',
    description: 'Plancha de cerámica premium con control de temperatura digital',
    rating: 4.9,
    reviews: 78,
    isPopular: true,
    discount: 21
  },
  {
    id: 'pla-002',
    name: 'Steam Liner con Vapor',
    price: 850000,
    image: '/imagenes lizo/PNG planchas/steam liner con vapor.png',
    category: 'planchas',
    description: 'Plancha profesional con sistema de vapor continuo',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'pla-003',
    name: 'Plancha Infrared 2023',
    price: 780000,
    image: '/imagenes lizo/PNG planchas/plancha infrared 2023.png',
    category: 'planchas',
    description: 'Tecnología infrarroja para alisado perfecto sin daño',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'pla-004',
    name: 'Plancha Cerámica Gold',
    price: 480000,
    image: '/imagenes lizo/PNG planchas/plancha ceramica gold.png',
    category: 'planchas',
    description: 'Plancha dorada con placas de cerámica de alta calidad',
    rating: 4.6,
    reviews: 134
  },
  {
    id: 'pla-005',
    name: 'Mini Plancha Portátil',
    price: 85000,
    image: '/imagenes lizo/PNG planchas/miniplancha.png',
    category: 'planchas',
    description: 'Plancha compacta perfecta para viajes y retoques',
    rating: 4.5,
    reviews: 267
  },

  // PINZAS
  {
    id: 'pin-001',
    name: 'Trio Clipless',
    price: 550000,
    image: '/imagenes lizo/PNG pinzas/trio clipless.png',
    category: 'pinzas',
    description: 'Set de 3 pinzas sin clip para rizos naturales',
    rating: 4.8,
    reviews: 45,
    isPopular: true
  },
  {
    id: 'pin-002',
    name: 'Quita Horquillas Professional',
    price: 440000,
    image: '/imagenes lizo/PNG planchas/quita horquillas A.png',
    category: 'pinzas',
    description: 'Herramienta especializada para retirar horquillas sin daño',
    rating: 4.7,
    reviews: 67
  },

  // BARBERÍA (productos destacados)
  {
    id: 'bar-001',
    name: 'Barbera Premium 100 Dólares',
    price: 1200000,
    image: '/imagenes lizo/PNG barberas/barb 100 dolares.png',
    category: 'barberia',
    description: 'Máquina profesional de barbería de lujo con acabado premium',
    rating: 4.9,
    reviews: 23,
    isPopular: true
  },
  {
    id: 'bar-002',
    name: 'Barbera Esqueleto Design',
    price: 850000,
    image: '/imagenes lizo/PNG barberas/barbera esqueleto.png',
    category: 'barberia',
    description: 'Diseño único con estampado de esqueleto para barberos audaces',
    rating: 4.8,
    reviews: 67,
    isNew: true
  },
  {
    id: 'bar-003',
    name: 'Barbera Metal Militar',
    price: 780000,
    image: '/imagenes lizo/PNG barberas/barb metal militar.png',
    category: 'barberia',
    description: 'Resistente máquina con acabado militar profesional',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'bar-004',
    name: 'Cuchilla Dorada Premium',
    price: 180000,
    image: '/imagenes lizo/PNG barberas/cuchilla dorada.png',
    category: 'barberia',
    description: 'Cuchilla profesional con acabado dorado de lujo',
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'bar-005',
    name: 'Barbera Colores Barbería',
    price: 650000,
    image: '/imagenes lizo/PNG barberas/barb colores barberia.png',
    category: 'barberia',
    description: 'Máquina colorida con diseño vibrante para barbería moderna',
    rating: 4.5,
    reviews: 156
  },
  {
    id: 'bar-006',
    name: 'Cuchilla Lila Rosado',
    price: 160000,
    image: '/imagenes lizo/PNG barberas/cuchilla lila rosado.png',
    category: 'barberia',
    description: 'Cuchilla de precisión con diseño lila y rosado',
    rating: 4.7,
    reviews: 89
  },

  // SPA & BELLEZA
  {
    id: 'spa-001',
    name: 'Thermal Spa para Pies #2',
    price: 380000,
    image: '/imagenes lizo/PNG otros/Spa pies LIZO.png',
    category: 'spa',
    description: 'Spa térmico profesional para tratamientos de pedicura',
    rating: 4.8,
    reviews: 45,
    isPopular: true
  }
]

export const featuredProducts = products.filter(p => p.isPopular || p.isNew).slice(0, 8)
export const bestSellers = products.sort((a, b) => b.reviews - a.reviews).slice(0, 6)