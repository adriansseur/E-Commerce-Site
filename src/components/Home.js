import React from "react"
import "../styles/Home.scss"
import honey from "../media/home/pexels_video_honey.mp4"
import { gsap } from "gsap"
import orangeBee from "../media/home/andy-holmes-wdz-dez94RQ-unsplash.jpg"
import yellowBee from "../media/home/janosch-diggelmann-CQXFPMe1smM-unsplash.jpg"
import grayBee from "../media/home/dejan-zakic-s58GuIVFaaM-unsplash.jpg"
import workerTable from "../media/home/bianca-ackermann-rCfi4ZCcgS4-unsplash.jpg"
import workerPanel from "../media/home/hiveboxx-65icrs88YYs-unsplash.jpg"
import workerVial from "../media/home/bee-naturalles-IRM9qgZdlW0-unsplash.jpg"
import familyPortrait from "../media/home/nathan-dumlao-4_mJ1TbMK8A-unsplash.jpg"

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
        // video animation
        tlHome.fromTo(homeVideo.current, { scale: 1.5 }, { scale: 1, duration: 2})
        tlHome.fromTo(homeVideo.current, { scale: 1 }, { scale: 4, duration: 0.5, delay: 2.5, x: 25})
        tlHome.fromTo(homeVideo.current, { y: 0 }, { y: "-20rem", duration: 0.5, delay: 1.5 })
        // title and subtitle animation
        gsap.set([".home-fresh-honey-title", ".home-fresh-honey-subtitle"], {opacity: 0})
        tlHome.fromTo(q([".home-fresh-honey-title", ".home-fresh-honey-subtitle"]), {x: -10}, {x: 0, opacity: 1, stagger: 0.5})
        
    }, [])

    return (
        <div ref={homeTitle} className="home" style={{opacity: componentOpacity}}>
            <div className="home-video-wrapper">
                <video ref={homeVideo} muted autoPlay loop playsInline><source src={honey}/></video> 
            </div>
            <div className="home-fresh-honey">
                <h1 className="home-fresh-honey-title">Fresh Honey</h1>
                <h3 className="home-fresh-honey-subtitle">The Bee's Knees</h3>
                <div className="bottom">
                    <h3>Local Liquid Sunlight</h3>
                    <p>Pure honey from our farm to you.</p>
                    <p>From 4.99</p>
                    <div className="buttons-container">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
            <div className="home-blossoming-flavor">
                <h1 className="title">Bee-lossoming Flavor</h1>
                <div className="carousel-container">
                    <img src={grayBee} alt="" />
                    <img src={yellowBee} alt="" />
                    <img src={orangeBee} alt="" />
                </div>
                <div className="carousel-dots">
                    <span>.</span><span>.</span><span>.</span>
                </div>
                <h3>Floral Infusion</h3>
                <p>Unique seasonal wildflower hints in each bottle</p>
                <button>View Recipes</button>
            </div>
            <div className="home-our-process">
                <h1 className="title">Our Process</h1>
                <div className="img-container">
                    <img id="worker-table" src={workerTable} alt="" />
                    <img id="worker-panel" src={workerPanel} alt="" />
                    <img id="worker-vial" src={workerVial} alt="" />
                </div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in vel ipsa quas nostrum nesciunt dolores illum laudantium aut. Dolorem beatae id eum dolore fugit quo architecto rem hic nisi.</p>
            </div>
            <div className="home-family-business">
                <h1>Family Business</h1>
                <div className="portrait-wrapper">
                    <img src={familyPortrait} alt="" />
                </div>
                <button>Back to top</button>
            </div>

        </div>
    )
}