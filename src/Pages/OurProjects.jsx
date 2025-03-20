import React from 'react'
import NavBar from '../Components/NavBar'
import { useEffect } from "react";
import Footer from '../Components/Footer';
import './Projects.css';


function OurProjects() {
  useEffect(() => {
    console.log("ourprojects page loaded");
  }, []);
  return (
  
    <div className='ProjectsPage'>
          <NavBar />
       <div className="OurProjects-carousl">
    
        <h2>أعمالنا</h2>

      </div>
      <div className="OurProjects-box">
      <div className="button-container">
          <button>المواقع الألكترونية</button>
        </div>
        <div className="OurProjects-imgbox">
            <img src="https://s3-alpha-sig.figma.com/img/c8f4/1923/99e2126c84325175d3cf4915e9838273?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ixjiIfgF-riXFV1lDxZNi-~CxR22NoDKnenI-rPmXt35TPhNazO-i9~he0PJBMOeGX750cqvG2hMFMi3u-j9tznT3nPxLvfTrsz8l8cMDui018RjQB9xnWfzxvpvaX5CXuXwAtRDqjUJIEQwZzDav84uj9Fb2QCuIAUYoV0zQM5Yda1u6DQ4ImIjqubXoEEe904GCrW2q1Tiy3LB-En26jEFjFJ5XVUa9n-YHy8qEe0u7Nt6wLbav4HKVkSyzjVq2ku-JoJYGm5xDrQdho23ddhWbPS5lHqa1Ko4op82HTuAUqDMD4EPwh8ahaLcj~HQ1k1mINctTrX1N~2rGSV3vw__" alt="" />
       <img src="https://s3-alpha-sig.figma.com/img/42ca/e038/ccf98b6bfd6a0ce40c41bdf08a684841?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mNgtzC4FiTn2tG0mVcA0087Vln5Mh3KIEzS4D6kMflZNclC9ir-T6e1OzC6-n6I4esEjd1ejprDhdqQk3o8vlDdNZC-VROH5-5ytwvwJ73KWWAnbPc7tvxaKrA0HZDdvsyfYWU~4P-Uglfk4UgNMuZR175ndFM3hZ9dSOwK3fSRd4j59tdmPrVqdckp1qrEtOPchVUYIl3rvXf3faexCzFJ-5sjPy2QElwKJKUjiZTuyGledOcjmzb8Dl9lIkdwiuqnKcxiwI6L66-spSPaSDy1UbTOE1E~lmqz0FLO3qPQWT3v27f7DflrmVJKpH8FNa3mPKyVRC9BJOuxjyXPVXQ__" alt="" />
       <img src="https://s3-alpha-sig.figma.com/img/1daa/cbce/e144762b9ddfef87760ea1f5d8d4f56a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gK~9XrJtnUkHBID1AVnKcPYh8UQNiRcsCn-cHInpSHej75hxvjgrzzxPhrRN1GCFAYPmcnpvZTgSRpcqzlp-62lMGuieKRQ63mEdhvkpHggxPUKm-ADRA2iTkcswqRTHx4rjXJLftcNPTKpRB6zwFUpXg6NMxFl5omnpETznVI7SOrhTL2vh1lmVg5iGyr8VeqlzXn3gwibTyLJxnzSLyK6Zm8EZPCM9lJXTByAWIBWhFgTIwXz~Oo2oyyvXxsnDYIptSmj5KupygoLUNHLDlGu1CxgWtMgSI3hrfU4q78E3tcvFB8Dcqr5eeqcI002svO3akMV0iEHPyFkcMqN4aA__" alt="" />
       <img src="https://s3-alpha-sig.figma.com/img/0f13/1084/c3a622230abab624da3708b73cacbcc7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VL38yr5vL-sNEhWYjP-AZrgZF7jM5pPi8HH~eK85HCq49dmLEgg~lGNgjVdQygQsQPTXj5OjHz~NAdjJytlOwNv-Tjco1~i8tJhmXhk~sNK3MeWSfv8rPiUXtz0SmEe84Roe1fLoBBseb6waL0oXk76zJU7TM2DziUUayxL38rU-Z6RSimFdqpxphUmvlGQgQly0i-sQ52Ptz93ngGZmSTRGYigT72wCInfGgzaSrova8OaMOJK8k1q21Gw95XZvg0HhoF-vBF-per4Oz~WG4l2wy9YgePzPkMIR0RE23gPC7zGXoCY5UnX0O78Dn6792ExPHhhGcUANcjoU45wULw__" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OurProjects
