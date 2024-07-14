'use client';

import React from 'react';
import Counter from '@/components/counter';

function Page(): React.ReactElement {
  return (
    <Counter>
      <Counter>
        <Counter />
      </Counter>
    </Counter>
  );
}

export default Page;
