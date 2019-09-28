import React from 'react';
const imgurl = '../../../assets/images/pray.jpg';
const sliderImage = {

  backgroundImage: 'url('+ imgurl+ ')'
}

function Slider(){
  return(
  <div>
  <div className="top-shadow"></div>
    <div className="inner-page">
     <div className="slide-item" style={sliderImage}>
     <div className="container">
      <div className="row  slider-text align-items-center justify-content-center">
       <div className="col-md-8 text-center col-dm-12 element-animate pt-5">
        <h1 className="pt-5"><span>Quiet Time Posts</span></h1>
        <p className="mb-5 w-76 pl-0">Growing in Christ daily: learning, living and sharing to edify and strengthening one another on the race set before us in Christ</p>
       </div>
      </div>

     </div>
     </div>

     {/* put blog head temporirly here */}
     <div className="row justify-content-center mb-5 element-animate">
              <div className="col-md-8 text-center">
                <h2 className="heading mb-4">Our Latest Devotion Posts</h2>
                 <p className="mb-5 lead">Psalm 103 8.   The LORD is merciful and gracious, slow to anger, and plenteous in mercy.
9.   He will not always chide: neither will he keep his anger for ever.
10.   He hath not dealt with us after our sins; nor rewarded us according to our iniquities.
11.   For as the heaven is high above the earth, so great is his mercy toward them that fear him.
12.   As far as the east is from the west, so far hath he removed our transgressions from us.
13.   Like as a father pitieth his children, so the LORD pitieth them that fear him.
14.   For he knoweth our frame; he remembereth that we are dust.
15.   As for man, his days are as grass: as a flower of the field, so he flourisheth.
16.   For the wind passeth over it, and it is gone; and the place thereof shall know it no more.
17.   But the mercy of the LORD is from everlasting to everlasting upon them that fear him, and his righteousness unto children's children;
18.   To such as keep his covenant, and to those that remember his commandments to do them.
19.   The LORD hath prepared his throne in the heavens; and his kingdom ruleth over all.
20.   Bless the LORD, ye his angels, that excel in strength, that do his commandments, hearkening unto the voice of his word.
21.   Bless ye the LORD, all ye his hosts; ye ministers of his, that do his pleasure.
22.   Bless the LORD, all his works in all places of his dominion: bless the LORD, O my soul.</p>
              </div>

            </div>



    </div>
  </div>
  )
}
export default Slider;
