// Single source of truth for all Waffle Hut business data.
export const business = {
  name: 'Waffle Hut',
  locality: 'Punjagutta',
  tagline: 'Premium Waffles, Shakes & Decadent Desserts • Irrum Manzil Mall',
  rating: '4.4',
  reviews: '141+',
  ratingLine: '4.4 ★ (141+ Google Reviews)',
  mall: 'Irrum Manzil Mall / Next Premia Mall',
  addressShort: 'Irrum Manzil Mall, Level 5, Punjagutta, Hyderabad 500082',
  addressLines: [
    'Irrum Manzil Mall / Next Premia Mall, Level 5',
    'Irram Manzil Colony, Punjagutta',
    'Hyderabad, Telangana 500082',
  ],
  hours: 'Open Daily • Closes at 10:30 PM',
  closingLabel: '10:30 PM',
  // Only the closing time is published for this outlet; the opening hour below is
  // used purely to drive the live "Open / Closed" pill.
  opensAt: { hour: 11, minute: 0, label: '11:00 AM' },
  closesAt: { hour: 22, minute: 30 },
  serviceModes: ['Dine-In', 'Takeaway', 'Mall Dining'],
  phoneDisplay: '+91 96762 61472',
  phoneLocal: '096762 61472',
  phoneHref: 'tel:+919676261472',
  whatsappNumber: '919676261472',
  whatsappHref:
    "https://wa.me/919676261472?text=Hi%20Waffle%20Hut%20Punjagutta!%20I'd%20like%20to%20place%20an%20order.",
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Waffle+Hut+Irrum+Manzil+Mall+Punjagutta+Hyderabad',
}

export const categories = ['All', 'Waffles', 'Mini Pancakes', 'Shakes & Treats']

export const menu = [
  {
    id: 'dark-fantasy-mini-pancakes',
    name: 'Dark Fantasy Mini Pancakes',
    category: 'Mini Pancakes',
    price: 199,
    badge: 'Popular',
    description:
      'Fluffy bite-sized chocolate pancakes smothered in dark fudge and choco-chips.',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'triple-chocolate-waffle',
    name: 'Triple Chocolate Waffle',
    category: 'Waffles',
    price: 269,
    badge: 'Bestseller',
    description:
      'Crispy golden waffle layered with dark, milk, and white Belgian chocolate ganache.',
    image:
      'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nutella-overload-waffle',
    name: 'Nutella Overload Waffle',
    category: 'Waffles',
    price: 289,
    badge: 'Customer Favorite',
    description: 'Drenched in authentic Nutella and roasted hazelnut crunch.',
    image:
      'https://images.unsplash.com/photo-1656517092618-0902a2f8b5ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kitkat-crunch-waffle',
    name: 'KitKat Crunch Waffle',
    category: 'Waffles',
    price: 249,
    description: 'Crushed KitKat fingers, milk chocolate syrup, and vanilla bean drizzle.',
    image:
      'https://images.unsplash.com/photo-1701694472041-fc7faca1bdb6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'belgium-chocolate-milkshake',
    name: 'Belgium Chocolate Milkshake',
    category: 'Shakes & Treats',
    price: 189,
    description: 'Thick, velvety milkshake blended with premium cocoa.',
    image:
      'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'classic-butter-honey-waffle',
    name: 'Classic Butter & Honey Waffle',
    category: 'Waffles',
    price: 159,
    description: 'Golden crisp waffle served with pure butter and golden honey.',
    image:
      'https://images.unsplash.com/photo-1659338488967-0fff0c0480aa?auto=format&fit=crop&w=800&q=80',
  },
]

export const reviews = [
  {
    id: 'aakash-r',
    name: 'Aakash R.',
    initials: 'AR',
    stars: 5,
    source: 'Google Review',
    quote:
      'The menu offers a wide variety of options, and everything I tried was delicious. Super crispy waffles and amazing service!',
  },
  {
    id: 'priya-s',
    name: 'Priya S.',
    initials: 'PS',
    stars: 5,
    source: 'Google Review',
    quote:
      'Best dessert spot in Irrum Manzil Mall. The Dark Fantasy mini pancakes and chocolate sandwiches are an absolute must-try!',
  },
  {
    id: 'kiran-kumar',
    name: 'Kiran Kumar',
    initials: 'KK',
    stars: 5,
    source: 'Google Review',
    quote:
      'Great atmosphere, lovely lighting, and amazing service. Perfect spot for a quick sweet treat in Punjagutta.',
  },
]

export const heroImage =
  'https://images.unsplash.com/photo-1562513872-634b8fae6dbe?auto=format&fit=crop&w=1400&q=85'

export const rupees = (n) => `₹${n}`
