import React from 'react';
import './main.scss';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section>
      <div className="bgk-img-wrapper" />
      <div className="container">
        <div className="aboutme-wrapper shadown-panel">
          <div className="about-img-wrapper">
            <img
              className="shadown-panel"
              src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/54258022_1616101221866754_1729790356112801792_n.jpg?_nc_cat=106&_nc_oc=AQmyUn7HN8820j3ZI7hhKxS96rA9jvmRBBG1bsC8LZXZueqzAqcgCD9Xyxt7Opj6TV8&_nc_ht=scontent.fhan2-1.fna&oh=a0da3ac227cbf248b439a088ec644449&oe=5DAAE31F"
              alt=""
            />
            <div className="aboutme-wrapper__name">Truong Hong Thai</div>
            <div className="aboutme-wrapper__office">Front-End Developer</div>
          </div>
          <div className="about-infor-wrapper">
            <h1 className="title title--underline">About Me</h1>
            <p className="aboutme-wrapper__description">
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose injected humour and the like.
            </p>
            <div className="aboutme-wrapper__list-infor">
              <div>
                <span>Date of birth</span>
                Apr 16, 1997
              </div>
              <div>
                <span>Gender</span>
                Male
              </div>
              <div>
                <span>Address</span>
                92 Dinh Tien Hoang - Da Nang - Viet Nam
              </div>
              <div>
                <span>Email</span>
                truonghongthai97@gmail.com
              </div>
              <div>
                <span>Phone</span>
                0973295541
              </div>
            </div>
          </div>
          <div className="aboutme-wrapper__social-wrapper">
            <ul>
              <li>
                <Link href="">
                  <a>
                    <i className="fab fa-facebook-f" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>
                    <i className="fab fa-facebook-f" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>
                    <i className="fab fa-github" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
