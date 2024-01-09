'use client'

import CareerProgress from '@/components/business-page/CareerProgress';
import Consulting from '@/components/business-page/Consulting';
import EngineeringAndConstruction from '@/components/business-page/EngineeringAndConstruction';
import OperationAndMaintenance from '@/components/business-page/OperationAndMaintenance';
import Banner2 from '@/components/general/Banner2';
import React, { useEffect } from 'react'
import { isDataView } from 'util/types';

const BusinessPage = () => {

  useEffect(() => {
    console.log('business page has rendered.' + new Date());
  }, [])
  
  return (
    <div className='paragraph-font-setting-1'>
      <Banner2 src='/business-page/businessPageBanner.png' alt='' bannerText='Businesses' />
      <EngineeringAndConstruction />
      <OperationAndMaintenance />
      <CareerProgress />
      <Consulting />
    </div>

  )
}

export default BusinessPage;