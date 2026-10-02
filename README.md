export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  sales: number;
  description: string;
  tag: string;
};

export const products: Product[] = [
  {
    id: 'ui-kit-pro',
    name: 'UI Kit Pro',
    category: 'UI Kit',
    price: 89,
    originalPrice: 149,
    rating: 4.9,
    sales: 1240,
    description: 'A premium SaaS dashboard UI kit with 180+ components and responsive layouts.',
    tag: 'Popular',
  },
  {
    id: 'brand-system',
    name: 'Brand System',
    category: 'Branding',
    price: 59,
    originalPrice: 99,
    rating: 4.8,
    sales: 980,
    description: 'Complete brand identity templates including logo, colors, and social assets.',
    tag: 'New',
  },
  {
    id: 'landing-page-bundle',
    name: 'Landing Page Bundle',
    category: 'Templates',
    price: 79,
    originalPrice: 129,
    rating: 5.0,
    sales: 760,
    description: 'Conversion-focused landing page layouts designed for modern startups.',
    tag: 'Best seller',
  },
  {
    id: 'mockup-pack',
    name: 'Mockup Pack',
    category: 'Mockups',
    price: 49,
    originalPrice: 89,
    rating: 4.7,
    sales: 1100,
    description: 'High-end device mockups and product presentation templates for digital showcases.',
    tag: 'Trending',
  },
  {
    id: 'minimal-icons',
    name: 'Minimal Icons',
    category: 'Illustration',
    price: 29,
    originalPrice: 59,
    rating: 4.8,
    sales: 1400,
    description: 'Handcrafted icon sets for apps, websites, and brand materials.',
    tag: 'Editor pick',
  },
  {
    id: 'social-media-kit',
    name: 'Social Media Kit',
    category: 'Templates',
    price: 39,
    originalPrice: 69,
    rating: 4.9,
    sales: 1180,
    description: 'Engaging content templates for promotions, launches, and brand storytelling.',
    tag: 'Hot',
  },
  {
    id: 'startup-board',
    name: 'Startup Board',
    category: 'UI Kit',
    price: 69,
    originalPrice: 119,
    rating: 4.8,
    sales: 890,
    description: 'A premium dashboard UI system for product, revenue, and analytics interfaces.',
    tag: 'Popular',
  },
  {
    id: '3d-product-set',
    name: '3D Product Set',
    category: 'Mockups',
    price: 54,
    originalPrice: 94,
    rating: 4.7,
    sales: 730,
    description: 'Set of realistic 3D product shots for storefronts, packaging, and ecommerce pages.',
    tag: 'Fresh',
  },
];

export const categories = [
  { name: 'UI Kits', icon: '🎨', items: 278 },
  { name: 'Mockups', icon: '🖥️', items: 182 },
  { name: 'Icons', icon: '✨', items: 154 },
  { name: 'Branding', icon: '📦', items: 211 },
  { name: 'Templates', icon: '🧩', items: 329 },
  { name: 'Illustration', icon: '🖼️', items: 90 },
];

export const stats = [
  { value: '50K+', label: 'buyers' },
  { value: '12K+', label: 'digital products' },
  { value: '$2.3M', label: 'creator revenue' },
  { value: '98%', label: 'happy customers' },
];

