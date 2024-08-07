import React from 'react'
import "./home.css"
import pk from "./image.png"
import { Link } from 'react-router-dom'

export default function Home () {
    return (
        <div class="sec2">
            <h className='Main_heading'>
                
                <p>Mortgages</p>
               <p style={{"margin-top":"-1.5rem"}}> made simple</p>
                
            </h>
            <div className='Main_text'>
                <div className='Main_text_first1'>
                    <button className='btn'>
                        <Link to="/startpage" className='Linkcss'>Start my approvel</Link>
                    </button>
                    <div className='div' >
                      <i class="fa-regular fa-clock"></i>
                        3 min
                        | No credit impact
                    </div>
                </div>
                <div className='Main_text_first2'>
                    <div className='star' >
                        <img src={pk} className="google_img"alt="" />
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>

                    </div>
                    <p className='regulare'>4.6 Stars | 3177 Google reviews</p>
                </div>
            </div>

        </div>
    )
}
