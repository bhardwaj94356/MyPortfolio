import React from "react";
import "./Aboutme.css";
import "../Style.css";
import data from "../../data/data.json";
import { FaMailBulk, FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Aboutme = () => {
  return (
    <>
    <div className="container">
      <div className="top_space"></div>
      <div className="image_container" id="image">
        <div className="bottom_div">
          <h1 className="color_white" style={{fontSize : '2vw'}}>Bhardwaj Thengal</h1>
          <p className="color_green" style={{fontSize : '1vw'}}>Software Engineer</p>
        </div>
      </div>
      <div className="color_bg content" id="aboutMe">
        <p className="color_white media_size" style={{fontSize : '50px', fontWeight : 'bold', margin : '0'}}>about me</p>
        <p className="color_green">31 Years - Assam</p>
        {
          data.map((userData) => (
            <p className="color_gray para">{userData.about.paragraph}</p>
          ))
        }
        <hr />
        <div className="content">
          <div className="header">
            <p className="color_white" style={{fontSize : '50px', fontWeight : 'bold', margin : '0'}}>my services</p>
          </div>
          <div className="content">
            <div className="content_align">
              <div className="content_in">
              {
                data.map((devData) => (
                  <>
                    <h2 className="color_white">{devData.dev.title}</h2>
                    <p className="color_gray">{devData.dev.content}</p>
                  </>
                ))
              }
              </div>
              <div className="content_in">
                {
                  data.map((backEndData) => (
                    <>
                      <h2 className="color_white">{backEndData.backEnd.title}</h2>
                      <p className="color_gray">{backEndData.backEnd.content}</p>
                    </>
                  ))
                }
              </div>
            </div>
            <div className="content_align">
              <div className="content_in">
              {
                data.map((securityData) => (
                  <>
                    <h2 className="color_white">{securityData.security.title}</h2>
                    <p className="color_gray">{securityData.security.content}</p>
                  </>
                ))
              }

              </div>
              <div className="content_in">
              {
                data.map((devSeo) => (
                  <>
                    <h2 className="color_white">{devSeo.seo.title}</h2>
                    <p className="color_gray">{devSeo.seo.content}</p>
                  </>
                ))
              }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container color_bg" id="contact">
      <div className="image_contact" id="image">
        <div className="bottom_div">
        </div>
      </div>
      <div className="content">
        <p className="color_white" style={{fontSize : '50px', fontWeight : 'bold', margin : '0'}}>contact me</p>
        <hr />
        <div className="exp_content">
          <a className="social" href="mailto: bhardwaj94356@gmail.com"><FaMailBulk size={30} />G Mail</a>
          <a className="social" href="https://github.com/bhardwaj94356"><FaGithub size={30} />Github</a>
          <a className="social" href="https://www.linkedin.com/in/bhardwaj-thengal-88a451227"><FaLinkedinIn size={30} />Linkedin</a>
          <a className="social" href="https://www.facebook.com/bhardwajthengal"><FaFacebookF size={30} />Facebook</a>
          <a className="social" href="tel: +919957975677"><FaPhoneAlt size={30} />Call Me</a>
        </div>
      </div>
    </div>
    <div className="container color_bg" id="education">
      <div className="image_edu" id="image"></div>
      <div className="content">
        <p className="color_white" style={{fontSize : '50px', fontWeight : 'bold', margin : '0'}}>education</p>
        <hr />
        <div className="exp_content">
          <div className="edu">
            {
              data.map((degree) => (
                <>
                  <h2 className="color_white">{degree.bachelor.title}</h2>
                  <p className="color_gray"><b>Institute :</b> {degree.bachelor.institute}</p>
                  <p className="color_gray"><b>Project :</b> {degree.bachelor.project}</p>
                  <p className="color_gray"><b>Languange :</b> {degree.bachelor.language}</p>
                </>
              ))
            }
          </div>
          <div className="edu">
            {
              data.map((degree) => (
                <>
                  <h2 className="color_white">{degree.master.title}</h2>
                  <p className="color_gray"><b>Institute :</b> {degree.master.institute}</p>
                  <p className="color_gray"><b>Project :</b> {degree.master.project}</p>
                  <p className="color_gray"><b>Language :</b> {degree.master.language}</p>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <div className="container color_bg" id="exp">
      <div className="image_exp" id="image"></div>
      <div className="content">
        <p className="color_white" style={{fontSize : '50px', fontWeight : 'bold', margin : '0'}}>experience</p>
        <hr />
        <div className="exp_content">
          <div className="exp">
            {
              data.map((expData) => (
                <>
                  <h3 className="color_white">{expData.exp.institute_1}</h3>
                  <h4 className="color_gray">{expData.exp.year_1}</h4>
                  <h4 className="color_gray">{expData.exp.post_1}</h4>
                </>
              ))
            }
          </div>
          <div className="exp">
            {
              data.map((expData) => (
                <>
                  <h3 className="color_white">{expData.exp.institute_2}</h3>
                  <h4 className="color_gray">{expData.exp.year_2}</h4>
                  <h4 className="color_gray">{expData.exp.post_2}</h4>
                </>
              ))
            }
          </div>
          <div className="exp">
            {
              data.map((expData) => (
                <>
                  <h3 className="color_white">{expData.exp.institute_3}</h3>
                  <h4 className="color_gray">{expData.exp.year_3}</h4>
                  <h4 className="color_gray">{expData.exp.post_3}</h4>
                </>
              ))
            }
          </div>
          <div className="exp">
            {
              data.map((expData) => (
                <>
                  <h3 className="color_white">{expData.exp.institute_4}</h3>
                  <h4 className="color_gray">{expData.exp.year_4}</h4>
                  <h4 className="color_gray">{expData.exp.post_4}</h4>
                </>
              ))
            }
          </div>
          <div className="exp">
            {
              data.map((expData) => (
                <>
                  <h3 className="color_white">{expData.exp.institute_5}</h3>
                  <h4 className="color_gray">{expData.exp.year_5}</h4>
                  <h4 className="color_gray">{expData.exp.post_5}</h4>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Aboutme;
