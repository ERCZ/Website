import React from 'react'

const BilibiliVideo: React.FC<{ bv: string }> = ({ bv }) => {
  return (
    <div className="bilibili-video">
      <iframe
        width="100%"
        style={{ aspectRatio: '16/9' }}
        src={`//player.bilibili.com/player.html?bvid=${bv}&autoplay=false`}
      ></iframe>
    </div>
  )
}

export default BilibiliVideo
