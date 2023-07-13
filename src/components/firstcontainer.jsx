import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect,useState } from 'react';
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@splidejs/react-splide/css/sea-green';
import test_img  from "./images/studio.jpg"
import first_png from "./images/tige3.png"
import second_png from "./images/bifacial2.jpg"
import Tiger7 from "./images/4750.jpg"
import Turnel from './turnel';
import fgmr from "./images/fdimgr.jpg"
import fgml from "./images/fdimgl.jpg"
export default function Firstcontainer() {   
<Splide
  options={ {
    rewind: true,
    width : 100,
    gap   : '1rem',
  } }
>
</Splide>

useEffect(() => {
  AOS.init();
  AOS.refresh();
}, [])

const [perPage, setPerPage] = useState(3);

useEffect(() => {
  const secondcontainer = document.getElementById("secondcontainer")
  const thirdcontainer = document.getElementById("thirdcontainer")
  const fourcontainer = document.getElementById("fourcontainer")
  // const fimg = document.getElementById("firstimg")
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      secondcontainer.style.marginLeft = "0px"
      thirdcontainer.style.marginLeft = "0px"
      fourcontainer.style.marginLeft = "0px"
      setPerPage(1);

    } else {
      secondcontainer.style.marginLeft = "50px"
      thirdcontainer.style.marginLeft = "50px"
      fourcontainer.style.marginLeft = "50px"
      setPerPage(3);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
  <>
  <section>
    <div className="col-md-12 first-container">
      <div className="child-container">
        <div className="col-md-6 header-section">
            <h2>Faster. Smarter.</h2>
            <p>There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

        </div>
        <Turnel/>


        <div className="big-child-container">
        <div className="col-md-8 big-header-section">
          <div className="row">
          <div className="col-md-5 left-header-section ">
            {/* <img src={Tiger7} alt="" className='module-images img-fluid ' /> */}
          {/* <p>There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> */}
            </div>
            <div className="col-md-7 right-header-section">
             
              <img src={first_png} alt="" className='module-images img-fluid ' data-aos="fade-down-left" data-aos-once="true" data-aos-duration="1000"/>
           
            </div>
            </div>
            </div>
        </div>
        <div className="child-container-second">
          <div className="col-md-9 child-container-secondary">
          <div className="row">
            <div className="col-md-6 primary-container">
            <img src={fgmr} alt="" className='module-images img-fluid ' data-aos-duration="800" data-aos="zoom-in-right" data-aos-once="true"/>
            </div>
            {/* <div className="col-md-1">
              
            </div> */}
            
            <div className="col-md-6 secondary-container">
            <img src={fgml} alt="" className='module-images img-fluid ' data-aos-duration="800"  data-aos="zoom-in-left" data-aos-once="true"/>
            </div>
              
            <div className="col-md-4  header-content-first">
              <div className="header-content-first-section">
                <h5><i class="fa-solid fa-regular fa-heart"></i> Filter</h5>
                <p>Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
              <div className="header-content-second-section">
                <h5><i class="fa fa-lock"></i> Authorization</h5>
                <p>Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
            </div>


            <div className="col-md-4  header-content-first">
              <div className="header-content-first-section">
                <h5><i class="fa fa-link"></i> Filter</h5>
                <p>Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
              <div className="header-content-second-section">
                <h5><i class="fa fa-message"></i> Management</h5>
                <p>Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
            </div>
             <div className="col-md-4  header-content-first">
              <div className="header-content-first-section">
                <h5><i class="fa-solid fa-hand-pointer mr-2"></i>Adaptable</h5>
                <p>Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
              <div className="header-content-second-section">
                <h5><i class="fa-sharp fa-solid fa-eye-slash"></i> Authorization</h5>
                <p>Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
           
            </div> 

            <div className="header-contaier-big-container col-md-12">
              <div className="col-md-9 header-contaier-big-container-child">
               <br />
              <h1>More than a login box</h1>
              <p>There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

              <div className="show-main-hightlight-container" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
               <img src={second_png} alt="" className='module-images img-fluid '/>

              </div>
               <div className="testimonial-main-container">
                  <div className="col-md-12 testimonial-container header-contaier-big-container-child">
                  <h1>Our clients love the we build store</h1>
                  </div>
                </div>
              </div>
              </div>
              </div> 
             
            
          </div>
          </div>
          <div className="col-md-12 testimonial-section">
                
                <Splide aria-label="My Favorite Images" options={{ perPage: perPage, gap: '3rem' }} id='splideCon'>
                <SplideSlide>
                <div className="testimonial-first-container col-md-10 " id='firstcontainer'>
                <div className="testimonial-icon remake">
                  <img src={test_img} alt="" id='firstimg'/>
                  </div>
                  <h4>Shubham Sharma</h4>
                  <p>Sample Text. click the select text box and write demo content </p>
                  <div className="star-container">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </div>

                </div>
                </SplideSlide>

                <SplideSlide>
                <div className="testimonial-second-container col-md-10 " id='secondcontainer'>
                <div className="testimonial-icon">
                  <img src={test_img} alt="" id='second-img'/>
                  </div>
                  <h4>Shubham Sharma</h4>
                  <p>Sample Text. click the select text box and write demo content </p>
                  <div className="star-container">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </div>

                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="testimonial-third-container col-md-10 " id='thirdcontainer'>
                <div className="testimonial-icon">
                  <img src={test_img} alt="" id='third-img' />
                  </div>
                  <h4>Shubham Sharma</h4>
                  <p>Sample Text. click the select text box and write demo content </p>
                  <div className="star-container">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </div>

                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="testimonial-third-container col-md-10 " id='fourcontainer'>
                <div className="testimonial-icon">
                  <img src={test_img} alt=""  id='four-img' />
                  </div>
                  <h4>Shubham Sharma</h4>
                  <p>Sample Text. click the select text box and write demo content </p>
                  <div className="star-container">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </div>

                </div>
                </SplideSlide>
                </Splide>
                
              </div>
    </div>



  
  </section>
  
  
  </>
  )
}
