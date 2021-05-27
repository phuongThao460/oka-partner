import React from 'react'
import { Link } from 'react-router-dom';
import "../../style/pages/AddHomeBlock.css";
import Navbar from '../paner-form/Navbar';

function AddHomeBlock() {
    return (
        <div>
            <Navbar/>
        <div class="c-block responsiveContainer">
            <div class="c-block">
                <div class="c-flexbox css-19psm70">
                    <div class="c-block card">
                        <div class="c-block">
                            <p class="c-text css-n0mx2z">
                                <span>I already have accommodation listed in TERA</span>
                            </p>
                        </div>
                        <div class="c-block">
                            <span class="c-text css-1d279ga">
                                <span>Ask your Market Manager to link your account to the accommodation that you have listed</span>
                            </span>
                        </div>
                        <div class="c-block css-btn-edit">
                            <div class="c-flexbox css-1bvc4cc">
                            <Link to="/ListHome">
                                <button type="button" class="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-btn--has-icon css-7mp1uz btn btn--primary btn--small ">
                                    
                                        <g id="add">
                                            <polygon points="12.997 4 12.997 11.003 20 11.003 20 12.997 12.997 12.997 12.997 20 11.003 20 11.003 12.997 4 12.997 4 11.003 11.003 11.003 11.003 4"></polygon>
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                        </g>
                                    <span>
                                        <span>Your Apartments</span>
                                    </span>
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div class="c-block card">
                        <div class="c-block">
                            <p class="c-text css-n0mx2z">
                                <span>I want to list a new accommodation</span>
                            </p>
                        </div>
                        <div class="c-block">
                            <span class="c-text css-1d279ga">
                                <span>We're happy to hear that! Click the button below to begin listing your new accommodation. The registration process may take up to 15 minutes.</span>
                            </span>
                        </div>
                        <div class="c-block">
                            <div class="c-flexbox css-1bvc4cc">
                            <Link to="/registrationDetail/generationInformation">
                                <button type="button" class="c-btn c-btn--theme-tera c-btn--variant-default c-btn--size-sm c-btn--has-icon css-7mp1uz btn btn--primary btn--small">
                                    <svg class="c-icon css-36kz25" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" >
                                        <g id="add">
                                            <polygon points="12.997 4 12.997 11.003 20 11.003 20 12.997 12.997 12.997 12.997 20 11.003 20 11.003 12.997 4 12.997 4 11.003 11.003 11.003 11.003 4"></polygon>
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                        </g>
                                    </svg>
                                    <span>
                                        <span>List New Accommodation</span>
                                    </span>
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div class="c-block css-end"></div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default AddHomeBlock