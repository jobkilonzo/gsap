import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import Porotofolio from "./component/Porotofolio";
import Home from "./component/Home";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orange from "./component/Orange";
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: "none", duration: 2 })
function App() {
  const container = useRef()

  const portofolio = useRef();
  const contact = useRef()

  useGSAP(() => {
    // use selectors...
    //gsap.to(".home", { rotation: "+=360" });

    const t1 = gsap.timeline()
    
    t1.from(".portofolio", { xPercent: -100 })
    t1.from(".contact", { xPercent: 100 })

    ScrollTrigger.create({
      animation: t1,
      trigger: ".container",
      start: "top top",
      end: "+=1200px",
      pinSpacing: false,
      scrub: true,
      pin: true,
      anticipatePin: 1
    })



    // or refs...
    //gsap.to(portofolio.current, { rotation: "-=360" });

  }, { scope: container }); // <-- scope for selector text (optional)

  return (
    <div ref={container} className="App">
      <div  className="home"><Home /></div>
      <div ref={portofolio} className=" portofolio bg-white text-black"><Porotofolio /></div>
      <div ref={contact} className="contact bg-orange-500"><Orange /></div>
    </div>
  );
}

export default App;
