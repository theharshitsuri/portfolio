# 🚀 Harshit Suri - Portfolio

A premium, dark-themed portfolio website designed to stand out. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎯 Interactive Problem Selector
- **Choose Your Own Adventure** filtering system
- Visitors select what problem they're solving
- Portfolio dynamically filters to show relevant work
- Categories: Product, Technical, Leadership, or Browse All

### 🎫 JIRA-Style Ticket Cards
Each project is presented as a styled ticket with:
- **Ticket IDs**: HARSH-001, HARSH-002, etc.
- **Honest Status Badges**:
  - ✅ SHIPPED
  - ⚠️ SHIPPED (mostly)
  - 💀 FAILED (learned tons)
  - 📦 ARCHIVED
- **Priority Indicators**: P0, P1, P2, P3 with color coding
- **Type Icons**: 🚀 Product, ✨ Feature, 🔧 Tool, 📊 Research
- **Real Metrics**: Impact numbers and timelines
- **Expandable Learnings**: Click to reveal lessons learned

### 🔍 Meta Analytics Widget
Live engagement tracking widget showing:
- Real-time time-on-page counter
- Scroll depth percentage
- PM-style analysis framing
- Minimizable design
- Working feedback button

### 🎨 Premium Dark Theme Design
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Animated Background**: Pulsing gradient orbs
- **Smooth Animations**: Framer Motion powered transitions
- **Gradient Text**: Eye-catching title effects
- **Hover Effects**: Interactive card animations
- **Custom Scrollbar**: Blue-themed scrollbar

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── TicketCard.tsx    # Project ticket cards
│   ├── ProblemSelector.tsx # Interactive filter
│   ├── MetaAnalytics.tsx # Analytics widget
│   └── GlassCard.tsx     # Reusable glass card
├── lib/
│   └── data.ts           # Portfolio content data
└── public/               # Static assets
```

## 🎨 Customization

### Update Content
Edit `/lib/data.ts` to update:
- Personal information
- Projects and tickets
- Experience
- Skills
- Links

### Modify Colors
The color scheme uses Tailwind's color palette. Main colors:
- **Primary**: Blue (600-400)
- **Secondary**: Purple (600-400)
- **Accent**: Pink, Emerald, Orange
- **Background**: Black with gradient overlays

### Add Projects
Add new tickets to the `tickets` array in `/lib/data.ts`:

```typescript
{
  id: "HARSH-XXX",
  title: "Project Name",
  description: "Brief description",
  status: "SHIPPED",
  priority: "P0",
  type: "PRODUCT",
  tags: ["React", "Firebase"],
  metrics: "Impact metric",
  timeline: "Duration",
  category: "product",
  learnings: "What you learned"
}
```

## 🌟 Key Design Decisions

1. **Dark Theme**: Professional, modern, reduces eye strain
2. **Glassmorphism**: Premium feel, depth, visual hierarchy
3. **Honest Statuses**: Shows authenticity and self-awareness
4. **Interactive Filtering**: Increases engagement vs. passive scrolling
5. **Meta Widget**: Demonstrates PM thinking in real-time
6. **Ticket Aesthetic**: Signals product/engineering workflow thinking

## 📱 Responsive Design

Fully responsive across:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🚀 Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🤝 Contact

**Harshit Suri**
- Email: harshitsinghsuri@usf.edu
- GitHub: [@theharshitsuri](https://github.com/theharshitsuri)
- LinkedIn: [harshitsuri](https://linkedin.com/in/harshitsuri)

---

Built with ❤️ to stand out from the crowd
