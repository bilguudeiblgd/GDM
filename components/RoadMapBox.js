import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "../styles/RoadMapBox.module.css";
import dynamic from "next/dynamic";
import bulktexts from "./RoadMapText";
import { gsap } from "gsap";
import useHover from "../hooks/useHover";
import PacmanLoader from 'react-spinners/PacmanLoader';


const RoadMapBox = ({ roadMapRef }) => {
  let boxRef = useRef();
  let containerBoxRef = useRef();
  let tl = useRef();
  useEffect(() => {
    const q = gsap.utils.selector(containerBoxRef);

    const ScrollTrigger = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    q(".timeline").forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: -300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: q(`#container-box${index + 1}`),
            start: "top 65%",
          },
        }
      );
    });
    gsap.fromTo(
      q(".border1"),
      { height: "74px" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: q("#container-box1"),
          start: "top 67%",
        },
      }
    );
    gsap.fromTo(
      q(".border2"),
      { height: "74px" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: q("#container-box2"),
          start: "top 67%",
        },
      }
    );
    gsap.fromTo(
      q(".border3"),
      { height: "74px" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: q("#container-box3"),
          start: "top 67%",
        },
      }
    );
  }, []);
  return (
    <>
      <div
        ref={containerBoxRef}
        className={
          "container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mx-auto px-4 mt-20"
        }
      >
        <div id="container-box1" className={"flex justify-center"}>
          <div className={`${styles.box} border1 border-prim-purple relative`}>
            <div
              className={
                "small-dot absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-purple"
              }
            ></div>
            <div
              className={
                "small-dot absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-purple"
              }
            ></div>
            <div
              className={
                "small-dot absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-purple"
              }
            ></div>
            <div
              className={
                "small-dot absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-purple"
              }
            ></div>
            {/* content */}
            <div>
              <p
                id="title-server"
                className={"font-title text-4xl text-center py-4 text-white"}
              >
                <span className={`${styles.outlined_text_white}`}>LEARN</span>
                LEARN
                <span className={`${styles.outlined_text_white}`}>LEARN</span>
              </p>
              <div className={"overflow-hidden w-full h-full"}>
                <div className={"border-b border-prim-purple mx-3"}></div>

                <div className={"timeline w-full"}>
                  <div className={"mt-6 mx-10 relative"}>
                    <InnerBox
                      bigRef={containerBoxRef}
                      title={"GAME DEV WORKSHOP"}
                      bulktext={bulktexts[0]}
                      color={"prim-purple"}
                    />
                  </div>
                  <div className={"mt-8 mx-10 relative"}>
                    <InnerBox
                      bigRef={containerBoxRef}
                      title={"DESIGN SEMINAR"}
                      bulktext={bulktexts[1]}
                      color={"prim-purple"}
                    />
                  </div>
                  <div className={"mt-8 mb-8 mx-10 relative"}>
                    <InnerBox
                      bigRef={containerBoxRef}
                      title={"INSPIRATION SERIES"}
                      color={"prim-purple"}
                      bulktext={bulktexts[2]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          id="container-box2"
          className={"flex flex-col justify-start items-center"}
        >
          <div className={`${styles.box} border2 border-prim-blue relative`}>
            <div
              className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-blue"}
            ></div>
            <div
              className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-blue"}
            ></div>
            <div
              className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-blue"}
            ></div>
            <div
              className={"absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-blue"}
            ></div>
            {/* content */}
            <div>
              <p className={"font-title text-4xl text-center py-4 text-white"}>
                <span className={`${styles.outlined_text_white}`}>NET</span>
                NETWORK
                <span className={`${styles.outlined_text_white}`}>WORK</span>
              </p>
              <div className={"w-full"}>
                <div className={"overflow-hidden"}>
                  <div className={"border-b border-prim-blue mx-3"}></div>
                  <div className={"timeline w-full"}>
                    <div className={"mt-6 mx-10 relative"}>
                      <InnerBox
                        bigRef={containerBoxRef}
                        title={"GAME DEV SERVER"}
                        color={"prim-blue"}
                        bulktext={bulktexts[3]}
                      />
                    </div>
                    <div className={"mt-8 mb-8 mx-10 relative"}>
                      <InnerBox
                        bigRef={containerBoxRef}
                        title={"GAME DEV CONFERENCE"}
                        color={"prim-blue"}
                        bulktext={bulktexts[4]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"mt-12"}>
           
            <PacmanLoader color="#167CE2" />
          </div>
        </div>

        <div id="container-box3" className={"flex justify-center"}>
          <div className={`${styles.box} border3 border-prim-green relative`}>
            <div
              className={"absolute -top-1 -left-1 w-1.5 h-1.5 bg-prim-green"}
            ></div>
            <div
              className={"absolute -top-1 -right-1 w-1.5 h-1.5 bg-prim-green"}
            ></div>
            <div
              className={"absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-prim-green"}
            ></div>
            <div
              className={
                "absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-prim-green"
              }
            ></div>
            {/* content */}
            <div>
              <p className={"font-title text-4xl text-center py-4 text-white"}>
                <span className={`${styles.outlined_text_white}`}>DEV</span>
                DEVELOP
                <span className={`${styles.outlined_text_white}`}>ELOP</span>
              </p>
              <div className={"overflow-hidden w-full"}>
                <div className={"border-b border-prim-green mx-3"}></div>
                <div className={"timeline"}>
                  <div className={"mt-6 mx-10 relative"}>
                    <InnerBox
                      bigRef={containerBoxRef}
                      title={"PLAYTESTING"}
                      color={"prim-green"}
                      bulktext={bulktexts[5]}
                    />
                  </div>
                  <div className={"mt-8 mx-10 relative"}>
                    <InnerBox
                      bigRef={containerBoxRef}
                      title={"GDM GAME JAM"}
                      color={"prim-green"}
                      bulktext={bulktexts[6]}
                    />
                  </div>
                  <div className={"mt-8 mb-8 mx-10 relative"}>
                    <InnerBox
                      bigRef={containerBoxRef}
                      title={"GAME SHOWCASE"}
                      color={"prim-green"}
                      bulktext={bulktexts[7]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const InnerBox = ({ bigRef, title, bulktext, color }) => {
  const boxRef = useRef(null);
  const [hoverRef, isHovered] = useHover();
  const Device = dynamic(() => import("../components/Device", { ssr: false }));

  const startAnimation = () => {
    gsap.to(boxRef.current, { x: -250, ease: "circ.out" });
  };
  const revertAnimation = () => {
    gsap.to(boxRef.current, { x: 0 });
  };
  useEffect(() => {
    const ScrollTrigger = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component
      gsap.fromTo(
        boxRef.current,
        { x: -250 },
        {
          x: 0,
          ease: "power.out",
          scrollTrigger: { trigger: bigRef.current, start: "top 30%" },
        }
      );
    }); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  const [revealed, setRevealed] = useState(true);
  const handleTouch =() => {
    setRevealed(!revealed);
  }
  return (
    <>
      <Device>
        {({ isMobile }) => {
          if (isMobile)
            return (
              <>
                <div
                  onTouchStart={handleTouch}
                  ref={hoverRef}
                  className={`border-b border-l border-r z-0 h-32 border-${color} relative `}
                >
                  <div
                    className={`absolute -top-0 w-full border-t border-${color}`}
                  ></div>
                  <div className={`${styles.top_left_dot} bg-${color}`}></div>
                  <div className={`${styles.top_right_dot}  bg-${color}`}></div>
                  <div className={`${styles.bot_left_dot} bg-${color}`}></div>
                  <div className={`${styles.bot_right_dot} bg-${color}`}></div>
                  {/* inside content */}
                  <div className={"overflow-hidden relative w-full h-full"}>
                    <div
                      className={
                        "px-2 py-2 flex w-full h-full justify-center items-center"
                      }
                    >
                      <p className={"text-white text-center"}>{bulktext}</p>
                    </div>
                    {revealed && 
                    <div
                      ref={boxRef}
                      className={"absolute top-0 left-0 right-0 bottom-0 "}
                    >
                      <div
                        className={`flex justify-center items-center px-6 bg-${color} ${styles.paralel} h-full`}
                      >
                        <p
                          className={`text-gray-200 text-lg font-medium text-center py-4`}
                        >
                          {title}
                        </p>
                      </div>
                    </div>
                    }
                  </div>
                </div>
              </>
            );
          else
            return (
              <>
                <div
                  onMouseEnter={startAnimation}
                  onMouseLeave={revertAnimation}
                  ref={hoverRef}
                  className={`border-b border-l border-r z-0 h-32 border-${color} relative `}
                >
                  <div
                    className={`absolute -top-0 w-full border-t border-${color}`}
                  ></div>
                  <div className={`${styles.top_left_dot} bg-${color}`}></div>
                  <div className={`${styles.top_right_dot}  bg-${color}`}></div>
                  <div className={`${styles.bot_left_dot} bg-${color}`}></div>
                  <div className={`${styles.bot_right_dot} bg-${color}`}></div>
                  {/* inside content */}
                  <div className={"overflow-hidden relative w-full h-full"}>
                    <div
                      className={
                        "px-2 py-2 flex w-full h-full justify-center items-center"
                      }
                    >
                      <p className={"text-white text-center"}>{bulktext}</p>
                    </div>
                    <div
                      ref={boxRef}
                      className={"absolute top-0 left-0 right-0 bottom-0 "}
                    >
                      <div
                        className={`flex justify-center items-center px-6 bg-${color} ${styles.paralel} h-full`}
                      >
                        <p
                          className={`text-gray-200 text-lg font-medium text-center py-4`}
                        >
                          {title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
        }}
      </Device>
    </>
  );
};

export default RoadMapBox;
