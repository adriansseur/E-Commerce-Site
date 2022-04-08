import React from "react"
import "../styles/Home.scss"
import honey from "../media/home/pexels_video_honey.mp4"
import {gsap} from "gsap"

export default function Home({ componentOpacity }) {
    
    
    const homeVideo = React.useRef(null)
    const homeTitle = React.useRef()
    const q = gsap.utils.selector(homeTitle)
    React.useEffect(() => {
        const tlHome = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "Power3.easeOut"
            }
        })
        // video
        tlHome.fromTo(homeVideo.current, { scale: 1.5 }, { scale: 1, duration: 2})
        tlHome.fromTo(homeVideo.current, { scale: 1 }, { scale: 4, duration: 0.5, delay: 2.5, x: 25})
        tlHome.fromTo(homeVideo.current, { y: 0 }, { y: "-20rem", duration: 0.5, delay: 1.5 })
        // titles
        tlHome.fromTo(q(".home-title"), {x: -10}, {x: 0, opacity: 1, stagger: 0.5})
        
    }, [])

    return (
        <div ref={homeTitle} className="home-container" style={{opacity: componentOpacity}}>
            <h1 className="home-title">Fresh Honey</h1>
            <h1 className="home-title">The Bee's Knees</h1>
            <div className="home-video-wrapper">
                <video ref={homeVideo} className="home-video" muted autoPlay loop playsInline><source src={honey}/></video> 
            </div>
        </div>
    )
}