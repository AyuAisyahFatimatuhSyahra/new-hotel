import React from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAcces';
import ContainerDetailBooking from '@/components/Containers/Booking/DetailBooking';

const DetailBooking = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerDetailBooking />;
};

export default DetailBooking;
