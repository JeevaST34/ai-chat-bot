
import { Hero , BrandMarquee, HomeFeature,Journey,PrivacySecurity,Testimonial
,FeaturesSection,ToolsMarquee,VendorComparison  
} from "@/components/home";


export default function Home() {
  return (
    <div>
      <Hero />
      <BrandMarquee />
      <HomeFeature />
      <PrivacySecurity />
      <Journey />
      <Testimonial />
      <FeaturesSection />
      <ToolsMarquee />
      <VendorComparison />
    </div>
  );
}
