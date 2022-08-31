import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'next/image';


const ContactSection = () => {
  return (
    <div className={"flex flex-col items-center justify-center mt-20"}>
      <div className={"flex flex-row justify-center items-center"}>
        <a href={"https://discord.gg/Jbs7GF9x9W"} target="_blank" className={"p-2 sm:p-3 mr-8 border border-white relative"}>
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
          <a className={"p-2 sm:p-3 border border-white relative"}>
            <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -top-1"}></div>
            <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -top-1"}></div>
            <div className={"absolute w-1.5 h-1.5 bg-white -left-1 -bottom-1"}></div>
            <div className={"absolute w-1.5 h-1.5 bg-white -right-1 -bottom-1"}></div>
            <HiOutlineMail size={48} color={'#ffffff'} />
          </a>
        </div>
        <div className={"mt-4 text-center"}>
          <p className={"text-white font-semibold"}>INFO@GAMEDEV.MN</p>
        </div>
        <div className={"mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12"}>
          <div className={"text-center"}>
            <Image src="/ghosts/purple.png" width={70} height={70} />
            <h3 className={"text-white uppercase font-bold text-2xl"}>Cyberio</h3>
            <h5 className={"text-white font-extralight text-xl"}>President</h5>
            <h6 className={"text-gray-300 text-sm mt-1 italic"}>cyberio@gamedev.mn</h6>
          </div>
          <div className={"text-center"}>
            <Image src="/ghosts/blue.png" width={70} height={70} />
            <h3 className={"text-white uppercase font-bold text-2xl"}>Bilguudei</h3>
            <h5 className={"text-white font-extralight text-xl"}>Technical Director</h5>
            <h6 className={"text-gray-300 text-sm mt-1 italic"}>bel@gamedev.mn</h6>
          </div>
          <div className={"text-center"}>
            <Image src="/ghosts/green.png" width={70} height={70} />
            <h3 className={"text-white uppercase font-bold text-2xl"}>Akoreyu</h3>
            <h5 className={"text-white font-extralight text-xl"}>Content Director</h5>
            <h6 className={"text-gray-300 text-sm mt-1 italic"}>akoreyu@gamedev.mn</h6>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ContactSection