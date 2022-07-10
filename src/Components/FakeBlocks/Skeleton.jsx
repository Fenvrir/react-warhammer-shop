import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="272" rx="3" ry="3" width="239" height="24" />
    <rect x="3" y="309" rx="3" ry="3" width="268" height="72" />
    <rect x="4" y="403" rx="3" ry="3" width="103" height="27" />
    <rect x="7" y="-10" rx="0" ry="0" width="260" height="268" />
    <rect x="121" y="395" rx="13" ry="13" width="151" height="44" />
  </ContentLoader>
);

export default Skeleton;
