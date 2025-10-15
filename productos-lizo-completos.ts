// 🎯 TODOS LOS PRODUCTOS REALES DE LIZO BELLEZA
// Base de datos completa actualizada

export interface ProductoLizo {
  nombre: string
  categoria: string
  precio: number
  imagen?: string
  descripcion?: string
  enStock: boolean
  destacado: boolean
  bestseller: boolean
}

export const productosLizoCompletos: ProductoLizo[] = [
  // ==================== SECADORES ====================
  {
    nombre: 'Secador Peso Pluma',
    categoria: 'Secadores',
    precio: 850000,
    imagen: '/imagenes lizo/PNG secadores/secador peso pluma.png',
    descripcion: 'Secador profesional ultra ligero con tecnología de peso pluma',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Repolarizador con Argán',
    categoria: 'Secadores',
    precio: 650000,
    imagen: '/imagenes lizo/PNG secadores/repolarizador argan.png',
    descripcion: 'Secador repolarizador con aceite de argán integrado',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Secador KF5877',
    categoria: 'Secadores',
    precio: 350000,
    imagen: '/imagenes lizo/PNG secadores/KF5877.png',
    descripcion: 'Secador profesional modelo KF5877',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF8946',
    categoria: 'Secadores',
    precio: 350000,
    imagen: '/imagenes lizo/PNG secadores/KF8946.png',
    descripcion: 'Secador profesional modelo KF8946',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF9853',
    categoria: 'Secadores',
    precio: 320000,
    imagen: '/imagenes lizo/PNG secadores/KF9853.png',
    descripcion: 'Secador profesional modelo KF9853',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF8948',
    categoria: 'Secadores',
    precio: 420000,
    imagen: '/imagenes lizo/PNG secadores/KF8948.png',
    descripcion: 'Secador profesional modelo KF8948',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF9853 Dorada',
    categoria: 'Secadores',
    precio: 350000,
    imagen: '/imagenes lizo/PNG secadores/KF9853 dorada.png',
    descripcion: 'Secador profesional modelo KF9853 acabado dorado',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Secador KF9897',
    categoria: 'Secadores',
    precio: 420000,
    imagen: '/imagenes lizo/PNG secadores/KF9897.png',
    descripcion: 'Secador profesional modelo KF9897',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF9897 Dorada',
    categoria: 'Secadores',
    precio: 380000,
    imagen: '/imagenes lizo/PNG secadores/KF9897 dorada.png',
    descripcion: 'Secador profesional modelo KF9897 acabado dorado',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF5913',
    categoria: 'Secadores',
    precio: 420000,
    imagen: '/imagenes lizo/PNG secadores/KF5913.png',
    descripcion: 'Secador profesional modelo KF5913',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador KF3071',
    categoria: 'Secadores',
    precio: 290000,
    imagen: '/imagenes lizo/PNG secadores/KF3071.png',
    descripcion: 'Secador profesional modelo KF3071',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Secador EXT-2401',
    categoria: 'Secadores',
    precio: 260000,
    imagen: '/imagenes lizo/PNG secadores/EXT-2401.png',
    descripcion: 'Secador profesional modelo EXT-2401',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Leafless Hair Dryer',
    categoria: 'Secadores',
    precio: 380000,
    imagen: '/imagenes lizo/PNG secadores/leafless hair dryer A.png',
    descripcion: 'Secador sin aspas de diseño futurista',
    enStock: true,
    destacado: true,
    bestseller: true
  },

  // ==================== PLANCHAS ====================
  {
    nombre: 'Plancha MD 60',
    categoria: 'Planchas',
    precio: 580000,
    imagen: '/imagenes lizo/PNG planchas/MD 60.png',
    descripcion: 'Plancha profesional MD 60 con tecnología avanzada',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Plancha Mini EXT',
    categoria: 'Planchas',
    precio: 85000,
    imagen: '/imagenes lizo/PNG planchas/miniplancha.png',
    descripcion: 'Mini plancha portátil perfecta para viajes',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'SteamLiner',
    categoria: 'Planchas',
    precio: 950000,
    imagen: '/imagenes lizo/PNG planchas/steam liner con vapor.png',
    descripcion: 'Plancha con vapor profesional de alta gama',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Plancha Keratina',
    categoria: 'Planchas',
    precio: 490000,
    imagen: '/imagenes lizo/PNG planchas/plancha keratina.png',
    descripcion: 'Plancha con infusión de keratina',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Plancha Eleganza',
    categoria: 'Planchas',
    precio: 480000,
    imagen: '/imagenes lizo/PNG planchas/plancha Eleganza EXT485.png',
    descripcion: 'Plancha Eleganza con control digital de temperatura',
    enStock: true,
    destacado: true,
    bestseller: false
  },

  // ==================== PINZAS ====================
  {
    nombre: 'Pinza Tridente',
    categoria: 'Pinzas',
    precio: 360000,
    imagen: '/imagenes lizo/PNG pinzas/pinza tridente.png',
    descripcion: 'Pinza triple para ondas perfectas',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Quita Horquillas',
    categoria: 'Pinzas',
    precio: 440000,
    imagen: '/imagenes lizo/PNG pinzas/quita horquillas.png',
    descripcion: 'Herramienta profesional para eliminar horquillas',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Trio Clipless',
    categoria: 'Pinzas',
    precio: 550000,
    imagen: '/imagenes lizo/PNG pinzas/trio clipless.png',
    descripcion: 'Pinza onduladora sin clip para ondas naturales',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Pinza Di Curling',
    categoria: 'Pinzas',
    precio: 380000,
    imagen: '/imagenes lizo/PNG pinzas/pinza di curling.png',
    descripcion: 'Pinza rizadora profesional Di Curling',
    enStock: true,
    destacado: false,
    bestseller: false
  },

  // ==================== PATILLERAS Y CORTADORAS ====================
  {
    nombre: 'Cortadora 2 en 1',
    categoria: 'Patilleras y Cortadoras',
    precio: 45000,
    imagen: '/imagenes lizo/PNG cortadoras/2 en 1.png',
    descripcion: 'Cortadora multifuncional 2 en 1',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cortadora 3 en 1',
    categoria: 'Patilleras y Cortadoras',
    precio: 85000,
    imagen: '/imagenes lizo/PNG cortadoras/3 en 1.png',
    descripcion: 'Cortadora multifuncional 3 en 1',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cortadora 5 en 1',
    categoria: 'Patilleras y Cortadoras',
    precio: 280000,
    imagen: '/imagenes lizo/PNG cortadoras/5 en 1.png',
    descripcion: 'Cortadora multifuncional profesional 5 en 1',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Afeitadora Hypersonic',
    categoria: 'Patilleras y Cortadoras',
    precio: 460000,
    imagen: '/imagenes lizo/PNG cortadoras/afeitadora hypersonic.png',
    descripcion: 'Afeitadora profesional de alta velocidad',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Cortadora EXT-002 Hypersonic',
    categoria: 'Patilleras y Cortadoras',
    precio: 480000,
    imagen: '/imagenes lizo/PNG cortadoras/cortadora EXT-002 hypersonic.png',
    descripcion: 'Cortadora profesional Hypersonic modelo EXT-002',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Cortadora EXT-001 Hypersonic',
    categoria: 'Patilleras y Cortadoras',
    precio: 650000,
    imagen: '/imagenes lizo/PNG cortadoras/cortadora EXT-001 hypersonic.png',
    descripcion: 'Cortadora premium Hypersonic modelo EXT-001',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Patillera Blackbird EXT-200',
    categoria: 'Patilleras y Cortadoras',
    precio: 220000,
    imagen: '/imagenes lizo/PNG cortadoras/patillera blackbird EXT-200.png',
    descripcion: 'Patillera profesional Blackbird',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cortadora Blackbird EXT-100',
    categoria: 'Patilleras y Cortadoras',
    precio: 380000,
    imagen: '/imagenes lizo/PNG cortadoras/cortadora blackbird EXT-100.png',
    descripcion: 'Cortadora profesional Blackbird',
    enStock: true,
    destacado: true,
    bestseller: false
  },

  // ==================== CEPILLOS ====================
  {
    nombre: 'Cepillo 5 en 1',
    categoria: 'Cepillos',
    precio: 85000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo 5 en 1.png',
    descripcion: 'Cepillo multifuncional 5 en 1',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Nanno Technology',
    categoria: 'Cepillos',
    precio: 260000,
    imagen: '/imagenes lizo/PNG cepillos/nanno technology.png',
    descripcion: 'Cepillo con nanotecnología avanzada',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Cepillo Cerámica',
    categoria: 'Cepillos',
    precio: 180000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo ceramica.png',
    descripcion: 'Cepillo térmico de cerámica',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Cepillo Profesional',
    categoria: 'Cepillos',
    precio: 280000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo profesional.png',
    descripcion: 'Cepillo profesional de alta calidad',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Cepillo Cerda Nylon',
    categoria: 'Cepillos',
    precio: 280000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo cerda nylon.png',
    descripcion: 'Cepillo con cerdas de nylon profesional',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Básico',
    categoria: 'Cepillos',
    precio: 160000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo basico.png',
    descripcion: 'Cepillo básico de uso diario',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Kit Cepillo Mixto',
    categoria: 'Cepillos',
    precio: 160000,
    imagen: '/imagenes lizo/PNG cepillos/kit cepillo mixto.png',
    descripcion: 'Kit de cepillos mixtos profesionales',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Colores (Rosa/Azul/Morado)',
    categoria: 'Cepillos',
    precio: 18000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo colores.png',
    descripcion: 'Cepillo desenredante en varios colores',
    enStock: true,
    destacado: false,
    bestseller: true
  },
  {
    nombre: 'Cepillo Esqueleto Dorado',
    categoria: 'Cepillos',
    precio: 35000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo esqueleto dorado.png',
    descripcion: 'Cepillo esqueleto acabado dorado',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Pinza',
    categoria: 'Cepillos',
    precio: 38000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo pinza.png',
    descripcion: 'Cepillo con pinza integrada',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Desenredo',
    categoria: 'Cepillos',
    precio: 18000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo desenredo.png',
    descripcion: 'Cepillo especial para desenredar',
    enStock: true,
    destacado: false,
    bestseller: true
  },
  {
    nombre: 'Cepillo Bambú',
    categoria: 'Cepillos',
    precio: 18000,
    imagen: '/imagenes lizo/PNG cepillos/cepillo bambu.png',
    descripcion: 'Cepillo ecológico de bambú',
    enStock: true,
    destacado: false,
    bestseller: false
  },

  // ==================== TIJERAS ====================
  {
    nombre: 'Set Tijeras Azul x3',
    categoria: 'Tijeras',
    precio: 180000,
    imagen: '/imagenes lizo/PNG tijeras/tijera 1 set azul.png',
    descripcion: 'Set de 3 tijeras profesionales acabado azul',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Set Tijeras Dorado x3',
    categoria: 'Tijeras',
    precio: 180000,
    imagen: '/imagenes lizo/PNG tijeras/tijera 1 set dorado.png',
    descripcion: 'Set de 3 tijeras profesionales acabado dorado',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Set Tijeras Iris x3',
    categoria: 'Tijeras',
    precio: 180000,
    imagen: '/imagenes lizo/PNG tijeras/tijera 1 set iris.png',
    descripcion: 'Set de 3 tijeras profesionales acabado iris',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Tijeras Azules',
    categoria: 'Tijeras',
    precio: 95000,
    imagen: '/imagenes lizo/PNG tijeras/tij lisa azul.png',
    descripcion: 'Tijeras profesionales acabado azul',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Tijeras Doradas',
    categoria: 'Tijeras',
    precio: 120000,
    imagen: '/imagenes lizo/PNG tijeras/tij lisa dorada.png',
    descripcion: 'Tijeras profesionales acabado dorado',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Tijeras Profesionales Premium',
    categoria: 'Tijeras',
    precio: 350000,
    imagen: '/imagenes lizo/PNG tijeras/tijeras premium.png',
    descripcion: 'Tijeras profesionales de alta gama',
    enStock: true,
    destacado: true,
    bestseller: false
  },

  // ==================== BARBERÍA ====================
  {
    nombre: 'Barberas',
    categoria: 'Barbería',
    precio: 35000,
    imagen: '/imagenes lizo/PNG barberas/barberas.png',
    descripcion: 'Barberas profesionales para barbería',
    enStock: true,
    destacado: false,
    bestseller: true
  },
  {
    nombre: 'Brochas de Afeitar',
    categoria: 'Barbería',
    precio: 28000,
    imagen: '/imagenes lizo/PNG barberas/brocha afeitar.png',
    descripcion: 'Brocha profesional para afeitar',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Capas de Barbería',
    categoria: 'Barbería',
    precio: 35000,
    imagen: '/imagenes lizo/PNG barberas/capas.png',
    descripcion: 'Capas profesionales para barbería',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Talco Barbería',
    categoria: 'Barbería',
    precio: 22000,
    imagen: '/imagenes lizo/PNG barberas/talco barberia.png',
    descripcion: 'Talco profesional para barbería',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Atomizadores',
    categoria: 'Barbería',
    precio: 18000,
    imagen: '/imagenes lizo/PNG barberas/atomizador.png',
    descripcion: 'Atomizadores profesionales',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Barber Brush',
    categoria: 'Barbería',
    precio: 25000,
    imagen: '/imagenes lizo/PNG barberas/barber brush.png',
    descripcion: 'Cepillo profesional para barbería',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Loción After Shave',
    categoria: 'Barbería',
    precio: 26000,
    imagen: '/imagenes lizo/PNG barberas/locion after shave.png',
    descripcion: 'Loción after shave profesional',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Loción After Shave 300ml',
    categoria: 'Barbería',
    precio: 18000,
    imagen: '/imagenes lizo/PNG barberas/locion after shave 300ml.png',
    descripcion: 'Loción after shave 300ml',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Shaving Gel',
    categoria: 'Barbería',
    precio: 18000,
    imagen: '/imagenes lizo/PNG barberas/shaving gel.png',
    descripcion: 'Gel de afeitar profesional',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo de Limpieza',
    categoria: 'Barbería',
    precio: 25000,
    imagen: '/imagenes lizo/PNG barberas/cepillo limpieza.png',
    descripcion: 'Cepillo de limpieza para herramientas',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Barbería Pequeño',
    categoria: 'Barbería',
    precio: 15000,
    imagen: '/imagenes lizo/PNG barberas/cepillo barberia pequeno.png',
    descripcion: 'Cepillo pequeño para barbería',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cepillo Barbería Grande',
    categoria: 'Barbería',
    precio: 25000,
    imagen: '/imagenes lizo/PNG barberas/cepillo barberia grande.png',
    descripcion: 'Cepillo grande para barbería',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Barber Pole Modelo 1',
    categoria: 'Barbería',
    precio: 350000,
    imagen: '/imagenes lizo/PNG barberas/barber pole 1.png',
    descripcion: 'Poste de barbería iluminado modelo 1',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Barber Pole Modelo 2',
    categoria: 'Barbería',
    precio: 350000,
    imagen: '/imagenes lizo/PNG barberas/barber pole 2.png',
    descripcion: 'Poste de barbería iluminado modelo 2',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Barber Pole Modelo 3',
    categoria: 'Barbería',
    precio: 160000,
    imagen: '/imagenes lizo/PNG barberas/barber pole 3.png',
    descripcion: 'Poste de barbería iluminado modelo 3',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Barber Pole Modelo 4',
    categoria: 'Barbería',
    precio: 380000,
    imagen: '/imagenes lizo/PNG barberas/barber pole 4.png',
    descripcion: 'Poste de barbería iluminado modelo 4',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Barber Pole Modelo 5',
    categoria: 'Barbería',
    precio: 360000,
    imagen: '/imagenes lizo/PNG barberas/barber pole 5.png',
    descripcion: 'Poste de barbería iluminado modelo 5',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Barber Pole Modelo 6',
    categoria: 'Barbería',
    precio: 160000,
    imagen: '/imagenes lizo/PNG barberas/barber pole 6.png',
    descripcion: 'Poste de barbería iluminado modelo 6',
    enStock: true,
    destacado: false,
    bestseller: false
  },

  // ==================== SPA Y BELLEZA ====================
  {
    nombre: 'Nail Drill',
    categoria: 'Spa y Belleza',
    precio: 260000,
    imagen: '/imagenes lizo/PNG spa/nail drill.png',
    descripcion: 'Torno profesional para uñas',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Pulidor de Uñas',
    categoria: 'Spa y Belleza',
    precio: 280000,
    imagen: '/imagenes lizo/PNG spa/pulidor unas.png',
    descripcion: 'Pulidor eléctrico de uñas',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Blue Light',
    categoria: 'Spa y Belleza',
    precio: 260000,
    imagen: '/imagenes lizo/PNG spa/blue light.png',
    descripcion: 'Lámpara de luz azul para tratamientos',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Olla de Cera',
    categoria: 'Spa y Belleza',
    precio: 85000,
    imagen: '/imagenes lizo/PNG spa/olla cera.png',
    descripcion: 'Calentador de cera profesional',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'UV LED Nail Lamp',
    categoria: 'Spa y Belleza',
    precio: 120000,
    imagen: '/imagenes lizo/PNG spa/uv led nail lamp.png',
    descripcion: 'Lámpara UV LED para uñas',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Lámpara de Uñas',
    categoria: 'Spa y Belleza',
    precio: 280000,
    imagen: '/imagenes lizo/PNG spa/lampara unas.png',
    descripcion: 'Lámpara profesional para uñas',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Parafinero',
    categoria: 'Spa y Belleza',
    precio: 240000,
    imagen: '/imagenes lizo/PNG spa/parafinero.png',
    descripcion: 'Parafinero profesional para tratamientos',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Thermal Spa Para Pies #1',
    categoria: 'Spa y Belleza',
    precio: 220000,
    imagen: '/imagenes lizo/PNG spa/thermal spa pies 1.png',
    descripcion: 'Spa térmico para pies modelo 1',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Thermal Spa Para Pies #2',
    categoria: 'Spa y Belleza',
    precio: 380000,
    imagen: '/imagenes lizo/PNG spa/thermal spa pies 2.png',
    descripcion: 'Spa térmico para pies modelo 2 premium',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Pro Wax Heater',
    categoria: 'Spa y Belleza',
    precio: 160000,
    imagen: '/imagenes lizo/PNG spa/pro wax heater.png',
    descripcion: 'Calentador profesional de cera',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Heater Depilatory',
    categoria: 'Spa y Belleza',
    precio: 160000,
    imagen: '/imagenes lizo/PNG spa/heater depilatory.png',
    descripcion: 'Calentador depilatorio profesional',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Razuradora Damas 3 en 1',
    categoria: 'Spa y Belleza',
    precio: 280000,
    imagen: '/imagenes lizo/PNG spa/razuradora damas 3en1.png',
    descripcion: 'Razuradora multifuncional para damas',
    enStock: true,
    destacado: true,
    bestseller: false
  },
  {
    nombre: 'Vaporizador Brazo Doble',
    categoria: 'Spa y Belleza',
    precio: 560000,
    imagen: '/imagenes lizo/PNG spa/vaporizador brazo doble.png',
    descripcion: 'Vaporizador facial profesional de brazo doble',
    enStock: true,
    destacado: true,
    bestseller: true
  },
  {
    nombre: 'Difusor de Aroma Modelo 1',
    categoria: 'Spa y Belleza',
    precio: 120000,
    imagen: '/imagenes lizo/PNG spa/difusor aroma 1.png',
    descripcion: 'Difusor de aromas para spa modelo 1',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Difusor de Aroma Modelo 2',
    categoria: 'Spa y Belleza',
    precio: 55000,
    imagen: '/imagenes lizo/PNG spa/difusor aroma 2.png',
    descripcion: 'Difusor de aromas para spa modelo 2',
    enStock: true,
    destacado: false,
    bestseller: false
  },

  // ==================== OTROS ====================
  {
    nombre: 'Peine Pinza Rosado',
    categoria: 'Otros',
    precio: 10000,
    imagen: '/imagenes lizo/PNG otros/peine pinza rosado.png',
    descripcion: 'Peine con pinza integrada color rosado',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Peine Pinza Rojo',
    categoria: 'Otros',
    precio: 32000,
    imagen: '/imagenes lizo/PNG otros/peine pinza rojo.png',
    descripcion: 'Peine con pinza integrada color rojo',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Pinzas de Pelo',
    categoria: 'Otros',
    precio: 35000,
    imagen: '/imagenes lizo/PNG otros/pinzas pelo.png',
    descripcion: 'Set de pinzas profesionales para el cabello',
    enStock: true,
    destacado: false,
    bestseller: false
  },
  {
    nombre: 'Cubrecuellos',
    categoria: 'Otros',
    precio: 18000,
    imagen: '/imagenes lizo/PNG otros/cubrecuellos.png',
    descripcion: 'Cubrecuellos desechables profesionales',
    enStock: true,
    destacado: false,
    bestseller: false
  }
]

// Funciones helper
export const getCategoriasLizo = () => {
  const categorias = Array.from(new Set(productosLizoCompletos.map(p => p.categoria)))
  return categorias.sort()
}

export const getProductosPorCategoria = (categoria: string) => {
  return productosLizoCompletos.filter(p => p.categoria === categoria)
}

export const getProductosDestacados = () => {
  return productosLizoCompletos.filter(p => p.destacado)
}

export const getBestsellers = () => {
  return productosLizoCompletos.filter(p => p.bestseller)
}

export const getTotalProductos = () => productosLizoCompletos.length

// Estadísticas
export const getEstadisticasLizo = () => {
  const categorias = getCategoriasLizo()
  const stats = categorias.map(cat => ({
    categoria: cat,
    total: getProductosPorCategoria(cat).length,
    destacados: getProductosPorCategoria(cat).filter(p => p.destacado).length,
    bestsellers: getProductosPorCategoria(cat).filter(p => p.bestseller).length,
    precioMin: Math.min(...getProductosPorCategoria(cat).map(p => p.precio)),
    precioMax: Math.max(...getProductosPorCategoria(cat).map(p => p.precio))
  }))
  
  return {
    totalProductos: getTotalProductos(),
    totalCategorias: categorias.length,
    totalDestacados: getProductosDestacados().length,
    totalBestsellers: getBestsellers().length,
    porCategoria: stats
  }
}
