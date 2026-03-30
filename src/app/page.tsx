"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
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
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "Reviews", id: "reviews" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="GDS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "gradient-bars" }}
      title="Garage Door Systems: 24/7 Expert Repairs"
      description="Family-owned and trusted for both residential and commercial garage door solutions. We're here for you anytime, day or night."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774833195437-t1312722.jpg?_wi=1"
      marqueeItems={[{ type: "text", text: "24/7 Availability" }, { type: "text", text: "Family Owned" }, { type: "text", text: "Licensed & Insured" }]} 
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Choose GDS?"
      metrics={[
        { label: "Years Served", value: "20+", icon: Award },
        { label: "Emergency Calls", value: "24/7", icon: Zap },
        { label: "Happy Clients", value: "5000+", icon: CheckCircle },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      title="Our Key Benefits"
      description="Reliable, efficient, and always available when you need us most."
      animationType="blur-reveal"
      useInvertedBackground={false}
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      features={[
        {
           title: "24/7 Availability", 
           description: "Available around the clock for any garage door emergency.", 
           imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774837185071-19im2rf8.jpg"
        },
        {
           title: "Certified Reliability", 
           description: "Our technicians are fully licensed, insured, and highly trained.", 
           imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774837185072-g707nrzx.jpg"
        },
        {
           title: "Expert Repairs", 
           description: "Comprehensive diagnostic and repair services for any system.", 
           imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774837185072-leswhcxg.jpg"
        }
      ]}
    />
  </div>

  <div id="reviews" data-section="reviews">
    <TestimonialCardOne
      title="Customer Reviews"
      description="Hear from our valued customers about their experience with our services."
      animationType="blur-reveal"
      textboxLayout="split"
      useInvertedBackground={false}
      gridVariant="four-items-2x2-equal-grid"
      cardClassName="shadow-lg"
      imageClassName="object-contain"
      testimonials={[
        { id: "r1", name: "Residential Garage", role: "Project Completed", company: "Custom Install", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774833195438-8d4pu4r9.jpg?_wi=2" },
        { id: "r2", name: "Commercial Bay", role: "Project Completed", company: "Steel System", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774833195437-neavrjbq.png" },
        { id: "r3", name: "Custom Design", role: "Project Completed", company: "Specialty Build", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774833195438-sfwmnm6m.jpg" },
        { id: "r4", name: "Emergency Repair", role: "Service Done", company: "Quick Response", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774833195437-t1312722.jpg?_wi=2" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      sideTitle="Common Garage Door Questions"
      sideDescription="Find quick answers to the most frequently asked questions about our garage services."
      faqsAnimation="blur-reveal"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "What makes your 24/7 service different?", content: "We keep fully stocked trucks and on-call technicians to ensure minimal wait times even at night." },
        { id: "q2", title: "Do you offer free estimates?", content: "Yes, we provide transparent, no-obligation quotes for all repair and installation projects." },
        { id: "q3", title: "Can you work on custom door designs?", content: "Absolutely, our team has extensive experience with custom-built and specialty garage door systems." }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      title="Get Your Quote Today"
      description="Fill out the form below and our team will reach out promptly to assist with your garage door needs."
      inputs={[
        { name: "name", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true }
      ]}
      textarea={{ name: "message", placeholder: "Describe your issue...", rows: 4, required: true }}
      buttonText="Submit Request"
      useInvertedBackground={false}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bb7l7rkW38JGikWwEhHpA3VVcU/uploaded-1774834379467-eqrvb32j.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",          items: [
            { label: "About GDS" },
            { label: "Careers" }
          ]
        },
        {
          title: "Services",          items: [
            { label: "Residential Repairs" },
            { label: "Commercial Install" }
          ]
        },
        {
          title: "Support",          items: [
            { label: "FAQ" },
            { label: "Contact Us" }
          ]
        }
      ]}
      bottomLeftText="© 2025 GDS Garage Door Systems"
      bottomRightText="Serving the community for over 20 years"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}