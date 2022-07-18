import * as THREE from 'three'
import React, { useRef,  Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import Navbar from './components/Nav/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="/1.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/3.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="/4.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="/5.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="/6.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="/7.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="/8.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )
}

let artworks_VS = {
  zg1: {
    id: 1,
    name: 'zombie girl 1',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592950176/kpl_feat_syrik/001-pgankpl-preset-v2-1gpu-fp16-network-snapshot-004631-000019_rlt_rlt_le37fp.png'
  },
  zg2: {
    id: 2,
    name: 'zombie girl 2',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949913/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000137_rlt_rlt_yi5xgq.png'
  },
  zg3: {
    id: 3,
    name: 'zombie girl 3',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592950175/kpl_feat_syrik/001-pgankpl-preset-v2-1gpu-fp16-network-snapshot-004631-000023_rlt_rlt_azgyn2.png'
  },
  zg4: {
    id: 4,
    name: 'zombie girl 4',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592950174/kpl_feat_syrik/87_lwhuwa.png'
  },
  zg5: {
    id: 5,
    name: 'zombie girl 5',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592950174/kpl_feat_syrik/Woman_rlt_tzbsxj.png'
  },
  zg6: {
    id: 6,
    name: 'zombie girl 6',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592950171/kpl_feat_syrik/001-pgankpl-preset-v2-1gpu-fp16-network-snapshot-004631-000093_rlt_rlt_hsvact.png'
  },
  zg7: {
    id: 7,
    name: 'zombie girl 7',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592950171/kpl_feat_syrik/45_blslhb.png'
  },
  zg8: {
    id: 8,
    name: 'zombie girl 8',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949922/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000370_rlt_rlt_ppq6if.png'
  },
  zg9: {
    id: 9,
    name: 'zombie girl 9',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949921/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000377_rlt_rlt_e9giaj.png'
  },
  zg10: {
    id: 10,
    name: 'zombie girl 10',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949921/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000334_rlt_rlt_wskpeu.png'
  },
  zg11: {
    id: 11,
    name: 'zombie girl 11',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949920/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000300_rlt_rlt_deieuu.png'
  },
  zg12: {
    id: 12,
    name: 'zombie girl 12',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949911/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000016_rlt_rlt_cwfzqc.png'
  },
  zg13: {
    id: 13,
    name: 'zombie girl 13',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949910/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000124_rlt_rlt_sksoa4.png'
  },
  zg14: {
    id: 14,
    name: 'zombie girl 14',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1592949909/kpl_feat_syrik/043-pgansyrik_vs-preset-v2-1gpu-fp16-network-snapshot-005381-000097_rlt_rlt_kjqnav.png'
  },
  dn1: {
    id: 1,
    name: 'dancers 1',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455702/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000012_rlt_rlt_akqu2q.png'
  },
  dn2: {
    id: 2,
    name: 'dancers 2',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455696/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000005_rlt_rlt_e0mzut.png'
  },
  dn3: {
    id: 3,
    name: 'dancers 3',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455684/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000093_rlt_rlt_m5h4xu.png'
  },
  dn4: {
    id: 4,
    name: 'dancers 4',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455682/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000098_rlt_rlt_w4f8iu.png'
  },
  dn5: {
    id: 5,
    name: 'dancers 5',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455677/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000092_rlt_rlt_qa49ab.png'
  },
  dn6: {
    id: 6,
    name: 'dancers 6',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455671/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000076_rlt_rlt_qxs4uz.png'
  },
  dn7: {
    id: 7,
    name: 'dancers 7',
    materials: 'acrylic on canvas',
    size: '100x100 cm',
    year: 2020,
    url: 'https://res.cloudinary.com/dahnjhzzu/image/upload/v1589455666/kpl_dancers/021-pgankpl-preset-v2-1gpu-fp16-network-snapshot-002254-000077_rlt_rlt_vjvppa.png'
  }
}

class Paintings extends React.Component {
  constructor(props) {
    super(props)
    this.state = { artworksSubArray: artworks_VS }
  }

  render() {
    const Data = Object.values(this.state.artworksSubArray).map((p) => {
      return (
        <div key={p.id}>
          <img src={p.url} alt="vs_gen" />
          <div className="artwork_title">
            <h4>{p.name}</h4>
            <div>{p.materials}</div>
            <div>{p.size}</div>
            <div>{p.year}</div>
          </div>
        </div>
      )
    })

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    }

    // var history = require('browser-history')

    return (
      <div>
        {/* <Menu /> */}
        <Navbar />
        <Basic />
        <BaseAudio />
        <Footer />

        <div className="container">
          <Slider {...settings}>{Data}</Slider>
        </div>
      </div>
    )
  }
}

const CoolScroll = () => (
<Suspense fallback={null}>
    <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
      <color attach="background" args={['#f0f0f0']} />
      <ScrollControls damping={6} pages={5}>
        <Items />
        <Scroll html style={{ width: '100%' }}>
          <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
          <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
          <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
          <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
          <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
            her
            <br />
            mes.
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
    </Suspense>

)

export const App = () => (
  <>
    <Navbar />

    <CoolScroll />
  </>
)
