import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="139" cy="130" r="130" />
    <rect x="0" y="271" rx="5" ry="5" width="280" height="20" />
    <rect x="0" y="304" rx="5" ry="5" width="280" height="87" />
    <rect x="127" y="396" rx="5" ry="5" width="152" height="30" />
    <rect x="0" y="398" rx="5" ry="5" width="50" height="30" />
  </ContentLoader>
);
