"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Award, CheckCircle, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="GDS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Garage Door Systems: 24/7 Expert Repairs"
      description="Family-owned and trusted for both residential and commercial garage door solutions. We're here for you anytime, day or night."
      testimonials={[
        {
          name: "Mark R.",
          handle: "@mark_r",
          testimonial: "Fast, professional, and they came out in the middle of the night! Excellent service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-man-with-wireless-bluetooth-looking-window_23-2147859752.jpg",
        },
        {
          name: "Susan L.",
          handle: "@susan_l",
          testimonial: "Family owned and it shows in their work. Very happy with my new commercial door.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-crazy-man-happy-expression_1194-1930.jpg",
        },
        {
          name: "David T.",
          handle: "@david_t",
          testimonial: "Great pricing and very knowledgeable. Highly recommend GDS.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-if-older-couple-holding-hands-city_23-2148645470.jpg",
        },
        {
          name: "Linda P.",
          handle: "@linda_p",
          testimonial: "They fixed our garage door on a Sunday morning. Lifesavers!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg",
        },
        {
          name: "James K.",
          handle: "@james_k",
          testimonial: "Expert repairs at a fair price. Will definitely call again.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13624.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-man-with-wireless-bluetooth-looking-window_23-2147859752.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-crazy-man-happy-expression_1194-1930.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-if-older-couple-holding-hands-city_23-2148645470.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-man-with-wireless-bluetooth-looking-window_23-2147859752.jpg",
          alt: "Customer",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "24/7 Availability",
        },
        {
          type: "text",
          text: "Family Owned",
        },
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "Commercial & Residential",
        },
        {
          type: "text",
          text: "Quality Guaranteed",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Choose GDS?"
      metrics={[
        {
          label: "Years Served",
          value: "20+",
          icon: Award,
        },
        {
          label: "Emergency Calls",
          value: "24/7",
          icon: Zap,
        },
        {
          label: "Happy Clients",
          value: "5000+",
          icon: CheckCircle,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Commercial Doors",
          description: "High-durability doors for warehouses and businesses.",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-factory-expert-using-digital-device-app-test-automated-systems-closeup_482257-120554.jpg",
        },
        {
          id: 2,
          title: "Residential Solutions",
          description: "Custom designs to fit your home's aesthetic.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-deliverer-with-packages-ringing-intercom-gate-house_637285-1280.jpg",
        },
        {
          id: 3,
          title: "Emergency Repairs",
          description: "Round-the-clock service for sudden breakdowns.",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13531.jpg",
        },
      ]}
      title="Our Professional Services"
      description="Comprehensive garage solutions for any size of need."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you really work 24/7?",
          content: "Yes, we have technicians on call all day and night.",
        },
        {
          id: "q2",
          title: "Can you handle commercial buildings?",
          content: "Absolutely, we specialize in both residential and industrial garage door systems.",
        },
        {
          id: "q3",
          title: "Are you a local business?",
          content: "Yes, GDS is a family-owned business serving our local community for over 20 years.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Get quick answers about our garage door services."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Need Emergency Service?"
      description="Contact us right away, and we'll be there to help you fix your garage door problems."
      imageSrc="http://img.b2bpic.net/free-photo/monochrome-portrait-retro-man-doing-housework-household-chores_23-2151448462.jpg"
      mediaAnimation="slide-up"
      tag="Contact Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13624.jpg"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | GDS Garage Door Systems"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
