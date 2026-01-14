import React from 'react'
import HeroIntegration from '@/components/integration/HeroIntegration'
import WebsiteBuilders from '@/components/integration/WebsiteBuilders'
import NativeIntegration from '@/components/integration/NativeIntegration'
export default function IntegrationPage() {
  return (
    <div>
      <HeroIntegration />
      <NativeIntegration /> 
      <WebsiteBuilders />
    </div>
  )
}


