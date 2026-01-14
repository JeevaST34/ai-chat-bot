

import { Breadcrumb } from "@/components/common";

import HeroSection from "@/components/knowledgeBase/HeroSection";
import StatsSection from "@/components/knowledgeBase/StatsSection";
import UploadSection from "@/components/knowledgeBase/UploadSection";
import VersionControlSection from "@/components/knowledgeBase/VersionControlSection";
import BenefitsSection from "@/components/knowledgeBase/BenefitsSection";
import SmartTagging from "@/components/knowledgeBase/SmartTagging";


export default function PricingPage() {
 
    return (
    <>
      <Breadcrumb />
      <HeroSection />
      <StatsSection />
      <UploadSection />
      <VersionControlSection />
      <BenefitsSection />
      <SmartTagging />

    </>
  );
}
