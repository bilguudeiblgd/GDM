import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'next/image';


const ContactSection = () => {
  return (
    <div id="contacts" className={"flex flex-col items-center justify-center mt-20"}>
      <div className={"flex flex-row justify-center items-center"}>
        <a href={"https://discord.gg/Jbs7GF9x9W"} target="_blank" rel="noreferrer" className={"p-2 sm:p-3 mr-8 border border-white relative"}>
          <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -top-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -top-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -bottom-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -bottom-1"}></div>
          <FaDiscord size={48} color={'#ffffff'} />
        </a>
        <a className={"p-2 sm:p-3 mr-8 border border-white relative"}>
          <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -top-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -top-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -bottom-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -bottom-1"}></div>
          <GrFacebookOption size={48} color={'#ffffff'} />
        </a>
        <a className={"p-2 sm:p-3 border border-white relative"}>
          <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -top-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -top-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -bottom-1"}></div>
          <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -bottom-1"}></div>
          <IoLogoInstagram size={48} color={'#ffffff'} />
        </a>
      </div>

      <div>
        <div className={"mt-4"}>
          <p className={"text-white text-center font-semibold"}>@GAMEDEVMONGOLIA</p>
        </div>
        <div className={"flex justify-center mt-8"}>
          <a href="mailto:info@gamedev.mn" className={"p-2 sm:p-3 border border-white relative"}>
            <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -top-1"}></div>
            <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -top-1"}></div>
            <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -bottom-1"}></div>
            <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -bottom-1"}></div>
            <HiOutlineMail size={48} color={'#ffffff'}/>
          </a>
        </div>
        <div className={"mt-4 text-center"}>
          <a href="mailto:info@gamedev.mn">
            <p className={"text-white font-semibold"}>INFO@GAMEDEV.MN</p>
          </a>
        </div>
        <div className={"mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12"}>
          <div className={"text-center"}>
            <Image src="/ghosts/purple.png" alt={"an illustration from a game character in purple"} width={70} height={70} />
            <h3 className={"text-white uppercase font-bold text-2xl"}>Cyberio</h3>
            <h5 className={"text-white font-extralight text-xl"}>President</h5>

            <a href="mailto:cyberio@gamedev.mn">
              <h6 className={"text-gray-300 text-sm mt-1 italic"}>cyberio@gamedev.mn</h6>
            </a>
          </div>
          <div className={"text-center"}>
            <Image src="/ghosts/blue.png" alt={"an illustration from a game character in blue"}  width={70} height={70} />
            <h3 className={"text-white uppercase font-bold text-2xl"}>Bilguudei</h3>
            <h5 className={"text-white font-extralight text-xl"}>Technical Director</h5>
            <a href="mailto:bel@gamedev.mn">
              <h6 className={"text-gray-300 text-sm mt-1 italic"}>bel@gamedev.mn</h6>
            </a>
          </div>
          <div className={"text-center"}>
            <Image src="/ghosts/green.png" alt={"an illustration from a game character in green"}  width={70} height={70} />
            <h3 className={"text-white uppercase font-bold text-2xl"}>Akoreyu</h3>
            <h5 className={"text-white font-extralight text-xl"}>Content Director</h5>
            <a href="mailto:akoreyu@gamedev.mn">
              <h6 className={"text-gray-300 text-sm mt-1 italic"}>akoreyu@gamedev.mn</h6>
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ContactSection