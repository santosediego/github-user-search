import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader
    speed={2}
    width={840}
    height={270}
    viewBox="0 0 890 280"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="-3" y="3" rx="0" ry="0" width="730" height="600" />
  </ContentLoader>
)

export default InfoLoader;



