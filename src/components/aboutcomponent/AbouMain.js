import React from 'react'
import "./AboutMain.css"
import imageAbout from "./image.png"
import Timeline from './Timeline'

export default function AbouMain () {
    return (
        <div className='about'>
            <div class="AboutMainSec">
                <p className='AboutMainSec_text1'>Our mission</p>
                <p className='AboutMainSec_text2'>
                    We’re making homeownership simpler, faster —
                    <br />
                    and most importantly, more accessible for all
                    <br />
                    Americans.
                </p>
            </div>
            <div className='aboutcontainer'>
                <div className='aboutThirdsec'>
                    <p className='text'>The status quo is broken</p>
                    <p className='text1'> The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                    </p>
                    <button className='btn_about'>
                        Read Vishal's Story
                    </button>
                </div>
                <img className="aboutImg" src={ imageAbout } />
            </div>
            <div className='aboutThirdsec2'>
                <p className='midsec1'>How we’re changing things</p>
                <p className='midsec2'>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
                </p>
                <p className='midsec3'>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable. </p>
            </div>
            <Timeline />

        </div>
    )
}
