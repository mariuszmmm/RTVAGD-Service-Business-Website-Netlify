// import styled from "styled-components";

// export const Photo = styled.img`
//   width: 59vw;
//   height: auto;
//   max-width: 520px;
// `;


import React from 'react';
import styled from 'styled-components';

// bazowy wrapper <img>, który dokleja fetchpriority do DOM
const BaseImg = React.forwardRef(({ $fetchPriority, alt, ...rest }, ref) => {
  const extra = $fetchPriority ? { fetchpriority: $fetchPriority } : {};
  // allow using a native <img> while silencing the Next.js warning and ensure alt is always present
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} alt={alt ?? ''} {...rest} {...extra} />;
});
BaseImg.displayName = 'BaseImg';

export const Photo = styled(BaseImg)`
  // ...existing styles...
  width: 59vw;
  height: auto;
  max-width: 520px;
`;