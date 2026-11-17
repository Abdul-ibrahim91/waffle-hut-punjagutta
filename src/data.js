// Single source of truth for all Keep Wafflin - Waffle Hut business data.
export const business = {
  name: 'Keep Wafflin - Waffle Hut',
  locality: 'Narayanguda',
  landmark: 'Opp. Deepak Theatre',
  navSubtitle: 'Narayanguda • Opp. Deepak Theatre',
  tagline: 'Premium Waffles, Shakes & Decadent Desserts • Narayanguda',
  rating: '4.7',
  ratingLine: '4.7 ★ Google Reviews',
  addressShort:
    '3-4-627/A, Opp. Deepak Theatre, Chitrapuri Colony, Narayanguda, Hyderabad 500027',
  addressLines: [
    '3-4-627/A, Opp. Deepak Theatre',
    'Chitrapuri Colony, Lingampally, Narayanguda',
    'Hyderabad, Telangana 500027',
  ],
  hours: 'Open Daily • Closes 12:00 AM',
  closingLabel: '12:00 AM',
  // Only the midnight closing time is published for this outlet; the opening hour
  // below is used purely to drive the live "Open / Closed" pill.
  opensAt: { hour: 11, minute: 0, label: '11:00 AM' },
  closesAt: { hour: 24, minute: 0 },
  serviceModes: ['Dine-In', 'Takeaway', 'Late-Night Dining'],
  phoneDisplay: '+91 72070 47700',
  phoneLocal: '072070 47700',
  phoneHref: 'tel:+917207047700',
  whatsappNumber: '917207047700',
  whatsappHref:
    "https://wa.me/917207047700?text=Hi%20Keep%20Wafflin%20-%20Waffle%20Hut%20Narayanguda!%20I'd%20like%20to%20place%20a%20direct%20order.",
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Keep+Wafflin+Waffle+Hut+Narayanguda+Hyderabad',
}

export const categories = ['All', 'Waffles', 'Mini Pancakes', 'Shakes & Treats', 'Savoury']

export const menu = [
  {
    id: 'naughty-nutella-pancake',
    name: 'Naughty Nutella Pancake',
    category: 'Mini Pancakes',
    price: 229,
    badge: 'Signature',
    description:
      'Warm bite-sized pancakes buried under a flood of authentic Nutella and hazelnut crunch.',
    image:
      'https://images.unsplash.com/photo-1664350471028-34a1d2651366?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri Peri Fries',
    category: 'Savoury',
    price: 149,
    badge: 'Most Ordered',
    description:
      'Crispy golden fries tossed in fiery peri peri masala — the savoury break between desserts.',
    image:
      'https://images.unsplash.com/photo-1676566399758-51b0d3927d48?auto=format&fit=crop&w=800&q=80',
  },
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
    id: 'rahul-v',
    name: 'Rahul V.',
    initials: 'RV',
    stars: 5,
    source: 'Google Review',
    quote:
      'Delicious food, super crispy waffles, and great peri peri fries. Easily one of the best hangout spots in Narayanguda!',
  },
  {
    id: 'sneha-m',
    name: 'Sneha M.',
    initials: 'SM',
    stars: 5,
    source: 'Google Review',
    quote:
      'Really good food and an aesthetic ambiance. The Naughty Nutella Pancake is worth every rupee!',
  },
  {
    id: 'karthik-r',
    name: 'Karthik R.',
    initials: 'KR',
    stars: 5,
    source: 'Google Review',
    quote:
      'Great customer service and lovely late-night vibe right opposite Deepak Theatre. Overall a really nice experience.',
  },
]

export const heroImage =
  'https://images.unsplash.com/photo-1562513872-634b8fae6dbe?auto=format&fit=crop&w=1400&q=85'

export const rupees = (n) => `₹${n}`
