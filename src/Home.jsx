import React from "react";
import "./Home.css";
import "./";
const Home = () => {
  return (
    <div className="container">
      <div className="header">header</div>
      <div className="section-1">
        <div className="section-1-child-1">
          <div className="section-1-child-1-details"  style={{marginLeft:"5rem",marginBottom:"8rem"}}>
            <h1 style={{color:"white"}}>
              <span>mcl </span>
              <span>pack</span>
            </h1>
            <p style={{color:"white", height:"200px"}}>
              Design and manufacture of innovative and sustainable packaging
              solutions at competitive prices and within a short time-frame from
              concept to manufacture.
            </p>
            <button className="section-4-child-button">LEARN MORE</button>
          </div>
          <div className="section-1-child-1-image" >
            <img
              src="https://static.wixstatic.com/media/3e3f8a_6b41afb56d9f4a6e8febf92efb63263c~mv2.png/v1/fill/w_751,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/trays_13.png"
              alt="mcl-pack"
            />
          </div>
        </div>
        <div className="section-1-child-2">
          <div className="section-1-child-2-details" style={{marginLeft:"5rem",marginBottom:"8rem"}}>
            <h1>
              <span>mcl </span>
              <span>contract</span>
            </h1>
            <p style={{height:"200px"}}>
              Contract manufacturing services for the design and manufacture of
              plastic products in a range of industries.
            </p>
            <button className="section-4-child-button">LEARN MORE</button>
          </div>
          <div className="section-1-child-2-image">
            <img
              src="https://static.wixstatic.com/media/3e3f8a_5563b3e2eb6f4e3d8d012c07f3cb433c~mv2.png/v1/crop/x_0,y_46,w_540,h_862/fill/w_398,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/render_BGR_21.png"
              alt="mcl-contract"
            />
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-child">
          <div>
            <img
              src="https://static.wixstatic.com/media/3e3f8a_787962e9a8534a6088319aa3c6b2b2dd~mv2.jpg/v1/fill/w_788,h_445,fp_0.50_0.50,lg_1,q_90,enc_auto/3e3f8a_787962e9a8534a6088319aa3c6b2b2dd~mv2.jpg"
              alt="new project ... BGR"
            />
          </div>
          <div className="section-2-child-detail">
            <button>mcl contract</button>
            <h4>new project ... BGR</h4>
            <p>
              mcl contract has started manufacturing the bgr ... an innovative
              suspension trainer more details at : https://barsgripsrings.com/
            </p>
            <div style={{ height: "60px" }}></div>
          </div>
        </div>

        <div className="section-2-child">
          <div>
            <img
              src="https://static.wixstatic.com/media/2015f6_b9f1d6521ae0482eab2433069a567827~mv2.png/v1/fill/w_915,h_516,fp_0.50_0.50,q_95,enc_auto/2015f6_b9f1d6521ae0482eab2433069a567827~mv2.png"
              alt="new 15Liter bucket"
            />
          </div>
          <div className="section-2-child-detail">
            <button>mcl pack</button>
            <h4>new 15L bucket</h4>
            <p>
              Introducing our new 15L bucket! A result of knowledge gained over
              several years spent designing and manufacturing buckets for a
              variety...
            </p>
            <div style={{ height: "60px" }}></div>
          </div>
        </div>
        <div className="section-2-child">
          <div>
            <img
              src="https://static.wixstatic.com/media/2015f6_469d255b38a0436e868c29f4613375f5~mv2.jpg/v1/fill/w_745,h_420,fp_0.50_0.50,q_90,enc_auto/2015f6_469d255b38a0436e868c29f4613375f5~mv2.jpg"
              alt="new logo for packaging business"
            />
          </div>
          <div className="section-2-child-detail">
            <button>mcl pack</button>
            <h4>new logo for packaging business</h4>
            <p>
              Look out for our new logo on our latest packaging products. This
              logo is synonymous with the fully recyclable attributes of our
              products.
            </p>
            <div style={{ height: "60px" }}></div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="section-3-child">
          <h1>Sustainability</h1>
          <p className="section-3-child-text-1">
            We understand sustainability as “Development that meets the needs of
            the present without compromising the ability of future generations
            to meet their own needs."
          </p>
          <p className="section-3-child-text-2">
            United Nations World Commission on Environment and Development, 1987
          </p>
          <button>
            <div>LEARN MORE</div>
            <div style={{ fontSize: "15px", margin: 0, padding: 0 }}> &gt;</div>
          </button>
        </div>
        <div className="section-3-child"></div>
      </div>
      <div className="section-4">
        <div className="section-4-child">
          <p className="section-4-child-text-1">
            High quality, innovative and sustainable solutions for plastic
            products.
          </p>

          <button className="section-4-child-button">ABOUT MCL</button>
        </div>
        <div className="section-4-child">
          <p className="section-4-child-text-2">
            Our versatile factory, which is powered by renewable energy,
            manufactures anything from complex equipment and toys to fast-moving
            consumer goods. We also assist with initial runs of new innovations.
            We deliver a personalized and customized approach to ensure that our
            partner’s product is produced using innovative, efficient and
            creative manufacturing design solutions and the latest technologies.
          </p>
        </div>
      </div>
      <div className="section-5">
        <div className="section-5-child">
          <h1>Contact</h1>
          <div style={{ color: "gray", marginBottom: "3rem" }}>
            <p>BLB037, Bulebel</p>
            <p>Industrial Estate, Zejtun</p>
            <p>ZTN3000 Malta</p>
          </div>
          <div>
            <p style={{ padding: 0, margin: 0, fontWeight: "bold" }}>
              +356 2169 3765
            </p>
            <p style={{ padding: 0, margin: 0, fontWeight: "bold" }}>
              sales@mclmalta.com
            </p>
          </div>
        </div>
        <div className="section-5-child">
          <h1>Company</h1>
          <div style={{ color: "gray" }}>
            <p>mcl pack</p>
            <p>mcl contract</p>
            <p>sustainability</p>
            <p>blog</p>
            <p>about</p>
          </div>
        </div>
        <div className="section-5-child-social">
          <img
            src="/facebook-logo_49354.png"
            alt="facebook"
            style={{ marginLeft: "10px" }}
          ></img>
          <img src="/instagram_717392.png" alt="instagram"></img>
        </div>
      </div>
      <div className="section-6">
        <div className="section-6-child">
          <p>All Rights Reserved - MCL Malta 2024</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
