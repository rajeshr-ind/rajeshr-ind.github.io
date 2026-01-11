// import React, {type ReactNode} from 'react';
// import Logo from '@theme/Logo';

// export default function NavbarLogo(): ReactNode {
//   return (
//     <Logo
//       className="navbar__brand"
//       imageClassName="navbar__logo"
//       titleClassName="navbar__title text--truncate"
//     />
//   );
// }

// src/theme/NavbarLogo/index.tsx
import React, { JSX } from 'react';
import {useThemeConfig} from '@docusaurus/theme-common'; // optional - for reading config
import Link from '@docusaurus/Link';
import InitialsAvatar from '@site/src/components/InitialsAvatar'; // ← adjust path!

const randomBgColor = (() => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
})();

// Optional: if you still want to read alt text / href from config
export default function NavbarLogo(): JSX.Element {
  const {
    navbar: {title, logo},
  } = useThemeConfig();

  // You can keep using config values if you want hybrid approach
  const alt = logo?.alt ?? title ?? 'Home';

  return (
    <Link
      to="/"
      className="navbar__brand"
      title={alt}
      style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}
    >
      {/* Your dynamic SVG avatar */}
      <InitialsAvatar 
        name="Rajesh Ramesh"   // ← change to your name or dynamic value
        size={36}              // smaller for navbar
        forceColor={randomBgColor}
      />

      {/* Optional: keep the title text next to avatar */}
      {title && (
        <b className="navbar__title text--truncate">{title}</b>
      )}
    </Link>
  );
}