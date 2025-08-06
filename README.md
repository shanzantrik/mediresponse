# MediResponse Website

A modern, responsive Next.js website for MediResponse - a global medical assistance and evacuation services company. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized with Next.js 14 and modern web technologies
- **SEO Optimized**: Built-in SEO features and meta tags
- **Contact Forms**: Integrated contact forms with Supabase backend
- **Animations**: Smooth animations and transitions using Framer Motion
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd mediresponse-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
```

### 4. Set up Supabase

1. Create a new Supabase project
2. Create the following tables in your Supabase database:

#### Contact Forms Table
```sql
CREATE TABLE contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  service TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Newsletter Subscriptions Table (Optional)
```sql
CREATE TABLE newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
mediresponse-website/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   ├── global-assistance/ # Global assistance page
│   ├── aeromedical-evacuation/ # Aeromedical evacuation page
│   └── remote-medical/    # Remote medical page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Home page hero
│   ├── ContactForm.tsx   # Contact form component
│   └── ...               # Other components
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Dark/light mode context
├── lib/                  # Utility functions
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
- Update content in the respective page components
- Modify images by replacing URLs in the components
- Update contact information in the Header and Footer components

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom CSS can be added to the global styles file

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Services overview
- Features and benefits
- Testimonials
- Contact form

### Global Assistance (`/global-assistance`)
- Detailed service information
- Features and benefits
- Process explanation

### Aeromedical Evacuation (`/aeromedical-evacuation`)
- Air medical transport services
- Equipment and capabilities
- Safety standards

### Remote Medical Solutions (`/remote-medical`)
- Telemedicine services
- Digital health platforms
- Remote monitoring capabilities

### Contact (`/contact`)
- Contact form
- Office information
- Emergency contact details
- FAQ section

## 🔧 Configuration

### Supabase Setup
1. Create a Supabase project
2. Get your project URL and anon key
3. Add them to your `.env.local` file
4. Create the required database tables

### Image Optimization
The website uses Next.js Image component for optimization. Update image URLs in components to use your own images.

### SEO
Update metadata in `app/layout.tsx` and individual pages for better SEO.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

The website is optimized for performance with:
- Next.js 14 optimizations
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size

## 🔒 Security

- Environment variables for sensitive data
- Supabase Row Level Security (RLS) for database
- Input validation on forms
- XSS protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: info@mediresponse.co.za
- Phone: +27 11 234 5678

## 🎯 Roadmap

- [ ] Blog section
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app integration
- [ ] Live chat support
- [ ] Payment integration
- [ ] User dashboard
- [ ] API documentation

---

Built with ❤️ for MediResponse 