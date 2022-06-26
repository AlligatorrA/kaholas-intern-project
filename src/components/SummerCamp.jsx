import React from 'react'
import './summerCamp.css'
import Avtar from "../assets/kimberlyAvtar.jpg";
import Painting from "../assets/kimberly-painting.jpg";

const SummerCamp = () => {
    return (
        <>
            <div >
                <h1>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More </h1>
                <small>Multi-Day Course <i className="fa-solid fa-circle-question"></i></small>
                <div className="child">
                    <div className="child_left coln_flex just_btw">
                        <div className="spacer_one"></div>
                        <section className='description'>
                            In this 5 day class we will explore artists Monet, Matisse ,Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.
                        </section>
                        <div className="">
                            <div className=" align_center">
                                <picture className='round_avtar_box'>
                                    <img className='round_avtar ' src={Avtar} alt="Kimberly" />
                                </picture>
                                <h3 className='m-05 btn_secondary'>Kimberly R Moseler</h3>
                            </div>
                            <p>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <span>467 total reviews for teacher</span></p>
                            <p>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <i className="fa-solid fa-star m-05"></i>
                                <span>5 reviews for this class</span></p>

                            <h2>Completed by 21 learners</h2>
                        </div>

                        <footer>
                            <button className='btn btn_primary'>See Class Schedule</button>
                            <button className='btn btn_secondary'> <i className="fa-solid fa-heart m-05"></i> Save</button>
                            <button className='btn btn_secondary'> <i className="fa-solid fa-share m-05"></i> Share</button>
                        </footer>

                    </div>
                    <div className="child_right">
                        <picture className='right_img_pic'>
                            <img className='right_img' src={Painting} alt="her paintings" />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummerCamp