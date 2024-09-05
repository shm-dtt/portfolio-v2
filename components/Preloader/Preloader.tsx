"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './animation';
import { inter } from '@/utils/fonts/Fonts';

// const words = ["Hello","নমস্কার", "नमस्कार", "Bonjour", "Ciao", "Olà", "こんにちは", "Guten tag!" ]

const Preloader: React.FC = () => {

    const [index, setIndex] = useState(0);
    //const [dimension, setDimension] = useState({width: 0, height:0});

    // useEffect( () => {
    //     setDimension({width: window.innerWidth, height: window.innerHeight})
    // }, [])

    // useEffect( () => {
    //     if(index == words.length - 1) return;
    //     setTimeout( () => {
    //         setIndex(index + 1)
    //     }, index == 0 ? 400 : 400)
    // }, [index])

    // const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    // const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    // const curve = {
    //     initial: {
    //         d: initialPath,
    //         transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    //     },
    //     exit: {
    //         d: targetPath,
    //         transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
    //     }
    // }

    // {dimension.width > 0 && 
    //     <>
            
    //         <svg className=' absolute top-0 w-full h-[calc(100%+300px)]'>
    //             <motion.path variants={curve} initial="initial" exit="exit" className="fill-white"></motion.path>
    //         </svg>
    //     </>
    // }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className=" h-screen w-screen flex items-center justify-center fixed z-1000 bg-white">
            <motion.p variants={opacity} initial="initial" animate="enter" className={`flex text-black text-4xl items-center absolute z-10 font-semibold ${inter.className}`}>
                {/* {words[index]} */}
                Soham's <br/> Portfolio <br/>2024
            </motion.p>
        </motion.div>
    );
}

export default Preloader;