import React, {useState} from "react";
import {DynamicHome} from "../dynamic-home/DynamicHome";
import japImg from '../../../assets/backgroundJapan.png'
import tokIMG from '../../../assets/backgroundTokyo.png'
import osakImg from '../../../assets/backgroundOsaka.png'
import kyoImg from '../../../assets/backgroundKyoto.png'
import narIMG from '../../../assets/backgroundNara.png'
import tokText from '../../../assets/croppedTok.png'
import japText from '../../../assets/croppedJap.png'
import kyoText from '../../../assets/croppedKyo.png'
import osakText from '../../../assets/croppedOsa.png'
import narText from '../../../assets/croppedNar.png'
import {Navbar} from "../navbar/Navbar";

const Home = ()=>{
    const [currentImage, setCurrentImage] = useState(null);
    const listOfIMG = [];
    const cities = [
        [japImg,tokIMG,osakImg,kyoImg,narIMG],
        [japText,tokText,osakText,kyoText,narText],
        ["Japan","Tokyo","Osaka","Kyoto","Nara"],
    ];
    for (let i = 0; i < cities[0].length; i++) {
        const currentCity = {
            name: cities[2][i],
            image: cities[0][i],
            smallImage: cities[1][i],
        };

        const option = cities[2].filter((cityName) => cityName !== currentCity.name);
        const backgroundImg = currentCity.image;
        const textImg = currentCity.smallImage;
        const smallImg = cities[0].filter((img) => img !== currentCity.image);

        listOfIMG.push({ backgroundImg, textImg, option, smallImg });
    }
    const handleImageChange = (imgSrc) => {
        setCurrentImage(imgSrc);
    };

    return (
        <>
            <Navbar/>

            {listOfIMG.map(({ backgroundImg,textImg , option,smallImg }, index) => (
                <DynamicHome
                    key={index}
                    backgroundImg={backgroundImg}
                    textImg={textImg}
                    option={option}
                    onImageChange={handleImageChange}
                    smallImg={smallImg}
                />
            ))}
        </>
    );
}

export default Home;