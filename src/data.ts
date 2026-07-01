import { Service, Project, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "oryn-web",
    title: "Oryn Web",
    iconName: "Globe",
    description: "A professional online storefront, connected to Core.",
    benefits: [
      "A mobile-responsive business website with custom branding, logo integration, and a rich product catalog designed to drive sales.",
      "Browse products, view pricing, add products to an interactive shopping cart, and submit orders directly.",
      "Real-time product and stock synchronization with Oryn Core, with a professional storefront URL (e.g. businessname.oryn.in)."
    ],
    duration: "",
    priceEstimate: ""
  },
  {
    id: "oryn-chat",
    title: "Oryn Chat",
    iconName: "MessageSquare",
    description: "WhatsApp, automated and synchronized.",
    benefits: [
      "Most customer conversations in these markets already happen on WhatsApp. Oryn Chat turns that into a highly structured, automated channel.",
      "Automated order confirmation messages, custom product sharing with pricing, and live order status notifications over WhatsApp.",
      "Centralized team inbox allowing your staff to view customer messages and reply manually without breaking synchronization."
    ],
    duration: "",
    priceEstimate: ""
  },
  {
    id: "oryn-core",
    title: "Oryn Core",
    iconName: "Database",
    description: "The complete business management system underneath it all.",
    benefits: [
      "A central business operating system with dedicated user roles (Admin and Staff) to run operations digitally.",
      "Inventory tracking (stock levels, adjustments, and low stock alerts), customer databases, vendor/supplier profiles, and purchase orders.",
      "Frictionless invoicing, sales tracking, dynamic PDF invoice generation, and a real-time analytics dashboard with key metrics (Today's Sales, Total Orders, Pending Payments)."
    ],
    duration: "",
    priceEstimate: ""
  }
];

export const projects: Project[] = [
  {
    id: "grocer-sync",
    title: "Local Groceries ERP & Delivery Portal",
    category: "ERP & POS Synchronization",
    description: "Unified paper inventory with a live responsive catalog. Enabled direct customer orders via automated WhatsApp chats.",
    image: "/src/assets/images/local_street_market_1782211925954.jpg",
    metric: "45%",
    metricLabel: "Inventory Loss Reduced",
    clientName: "Imperial Grocery Store",
    year: "2025"
  },
  {
    id: "boutique-builder",
    title: "Apparel Showroom Digital Cataloging",
    category: "WhatsApp Commerce Integration",
    description: "Automated customized catalog sharing on WhatsApp, turning incoming direct chats into a fast digital checkout experience.",
    image: "",
    metric: "12 Days",
    metricLabel: "Average Setup Speed",
    clientName: "Classic Clothing Hub",
    year: "2025"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Dr. Ananya Nair",
    role: "Lead Director",
    company: "Well Woman Clinic",
    text: "Before Oryn, we had a Facebook page and handled WhatsApp bookings manually. Now, patients book directly via our lovely Web storefront, our assistants get notifications, and everything updates on our simple clinic management dashboard. It has saved us hours of overhead daily.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "t2",
    author: "Rajesh K. Mehta",
    role: "Owner",
    company: "K. Mehta Electronics",
    text: "Getting a website constructed, WhatsApp automated, and tracking stock used to require three different software subscriptions that never spoke to one another. Oryn gives us one unified dashboard in real time. Absolute masterclass in local business software.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];
