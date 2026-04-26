import { useState } from 'react';
import styles from './RecipeCard.module.css';
export const images = [
    {id: 1, url: "https://i.imgur.com/DKrxPv1.jpeg", description: "Spaghetti Carbonara" }, 
    {id: 2, url: "https://i.imgur.com/RZ6kvdI.jpeg", description: "Scrambled Eggs"}, 
    {id: 3, url: "https://i.imgur.com/jx8JBcN.jpeg", description: "French Toast"}
];

export function Gallery(){
    const [img, setImg] = useState(0);

    const nextImage = () => {
        if ((images.length-1) >= images[img].id){
            setImg(prevImg => prevImg + 1)
        }; 
        }
    const prevImage = () => {
        if (images[img].id >= 0){
            setImg(prevImg => prevImg - 1)
        };
    }
    
    return (
        <>
           <img src={images[img].url} className={styles.imgDim} /> 
           <p className={styles.text}>{images[img].description}</p>
           <button onClick={nextImage} disabled={img === (images.length-1)}>Next</button>
           <button onClick={prevImage} disabled={img === 0}>Previous</button> 
        </>
    )
}

