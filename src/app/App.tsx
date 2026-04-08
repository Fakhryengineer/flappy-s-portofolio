import { useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrapbookHero } from "./components/ScrapbookHero";
import { PersonalBrandingSection } from "./components/PersonalBrandingSection";
import { ScrapbookAbout } from "./components/ScrapbookAbout";
import { EducationSection } from "./components/EducationSection";
import { SoftwareToolsSection } from "./components/SoftwareToolsSection";
import { ScrapbookCertifications } from "./components/ScrapbookCertifications";
import { ScrapbookProjects } from "./components/ScrapbookProjects";
import { ScrapbookCTA } from "./components/ScrapbookCTA";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Preload critical images
    const preloadImages = [
      "figma:asset/7240f4391cc1c7e743b569fac747c964024239b6.png"
    ];

    preloadImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative bg-amber-50 overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Scrapbook Portfolio */}
      <ScrapbookHero />
      
      <PersonalBrandingSection />
      
      <ScrapbookAbout />
      
      <PersonalBrandingSection />
      
      <EducationSection />
      
      <PersonalBrandingSection />
      
      <SoftwareToolsSection />
      
      <PersonalBrandingSection />
      
      <ScrapbookCertifications />
      
      <PersonalBrandingSection />
      
      <ScrapbookProjects />
      
      <PersonalBrandingSection />
      
      <ScrapbookCTA />
    </div>
  );
}