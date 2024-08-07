import React from 'react'
import "./third.css"
import pk from "./still-quote-Arian.webp"
import { Link } from 'react-router-dom'
export default function ThirdSec () {
    return (
        <>
            <section class="third_sec">
                <div class="Img-div">
                    <img src={ pk } class="ThirdSecImg" />
                    <div>
                        <button className='Third_btn1'>
                            Arian
                        </button>
                        <button className='Third_btn1'>
                            Amanda
                        </button>
                        <button className='Third_btn1'>
                            Paul
                        </button>
                    </div>
                </div>
                <div class="ThirdSecImg_Text">
                    <div style={{ "font": "bolder"}} className='Third_Main_heading'>
                       <p  className='betterTag1'> Find out  why</p>
                       <p  className='betterTag2'> we’re better</p>
                    </div>
                    <button className='Third_btn'>
                      
                       <Link to="/about" className='Linkcss' style={{"color":"white"}}> See all our stories</Link>
                    </button>
                </div>

            </section>
        </>
    )
}
