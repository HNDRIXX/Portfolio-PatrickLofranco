'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { AuroraBackground } from '../ui/Aurora'
import { STRINGS } from '@/constants/Strings'

import '../../constants/styles/Front.css'

function Front() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div>
                    <p className='greet'>
                        {STRINGS.hello}
                    </p>

                    <div className='row'>
                        {/* <p className='prefix'>
                {STRINGS.prefixName}
              </p> */}

                        <p className='name'>
                            {STRINGS.name}
                        </p>
                    </div>

                    <p className='typewriter'>
                        <Typewriter
                            words={['Mobile Developer.', 'Web Developer.', 'Designer.']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            cursorColor='white'
                            cursorBlinking={true}
                        />
                    </p>

                </div>
            </motion.div>
        </AuroraBackground>
    )
}

export default Front