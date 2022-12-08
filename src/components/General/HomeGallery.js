import React, {useState} from 'react';
import './HomeGallery.css';
import CloseIcon from '@mui/icons-material/Close';


const GallerySrc = () => {
  let data = [
    {
      id: 1,
      imgSrc: 'https://i.pinimg.com/originals/a1/5a/5d/a15a5d5e0e12202f78fbc811a6498c08.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://i.ebayimg.com/images/g/jXMAAOSwpTFgQ4it/s-l400.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://i.pinimg.com/564x/bb/ab/1c/bbab1ca03a8b81457c02133c4f0a365d.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://m.media-amazon.com/images/I/51FrvGUJD3L._AC_SY580_.jpg'
    },
    {
      id: 6,
      imgSrc: 'https://i.pinimg.com/474x/18/fd/2c/18fd2c38f5cf7d4e124a7c7792e99c41.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://i.pinimg.com/564x/22/61/59/226159347177904e4de8779f3c097b7b.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://ih1.redbubble.net/image.4057335924.6153/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://i.ebayimg.com/images/g/KpwAAOSwLEtYk8Wj/s-l500.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://images.squarespace-cdn.com/content/v1/582b5029bebafb10ec217bdf/1615830666374-4U5SQRFJMU12E8F5HCQ4/SaveYourselves_rgb.jpg?format=1500w'
    },
    {
      id: 1,
      imgSrc: 'https://i.pinimg.com/564x/43/4d/be/434dbe2df3ad3afeccb0011659e978bf.jpg'
    },
    {
      id: 5,
      imgSrc: 'https://cdn.europosters.eu/image/750/posters/rihanna-roses-i11876.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://64.media.tumblr.com/b4d620407729df479ff3c5d4e6a9908c/tumblr_pdgfdrLrpB1s80h8lo1_1280.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://cdn.shopify.com/s/files/1/0630/8509/products/pst1131_Zelda_Breath_of_the-_Wild_BOTW_Poster_large.jpg?v=1608456234'
    },
    {
      id: 2,
      imgSrc: 'https://www.prestoimages.net/store20/rd2871/2871_pd2171352_1.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://ih1.redbubble.net/image.2502676628.6995/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://ih1.redbubble.net/image.1025786612.1376/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://i.etsystatic.com/18242346/r/il/f89d0a/2130906157/il_1588xN.2130906157_qrxe.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-4493722784.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://cdn.shopify.com/s/files/1/0275/8351/2681/products/PLF_AkikoPoster_2000x@2x.progressive.jpg?v=1654199751'
    },
    {
      id: 2,
      imgSrc: 'https://1.bp.blogspot.com/-JXk9I8t89PU/XaVe80f8HQI/AAAAAAABl9E/kXXXhs0hJ2UZZmpD8oy0pRweLX8DLuPJQCLcBGAsYHQ/s1600/Childish%2BGambino%2BAustin%2BPrint%2BZeb%2BLove.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://i.pinimg.com/564x/04/a0/9c/04a09c7b371408dfb0d617f7a97110cf.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://ih1.redbubble.net/image.1024303529.4101/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BNjgwMmI4YzUtZGI2Mi00M2MwLWIyMmMtZWYzMWZmNzAyNmYwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://i.ytimg.com/vi/Jl9rsKq1BTQ/movieposter_en.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
    },
    {
      id: 1,
      imgSrc: 'https://i.pinimg.com/564x/09/5f/60/095f6087b2690db76e2678b499b82fac.jpg'
    },
    {
      id: 2,
      imgSrc: 'https://i.pinimg.com/564x/a1/ae/90/a1ae90417b7e8a037ad20b16392ce17e.jpg'
    },

  ]
  // Gallery code sourced from Code With Yd: Responsive Image gallery in React js | Build a Photo Gallery With React js | Image Gallery in React (YouTube)
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <div>
      <div className={model? "model open": "model"} >
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        }, [])}
      </div>
    </div>
  )
}

export default GallerySrc;