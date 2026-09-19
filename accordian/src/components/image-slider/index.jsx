
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';


export function ImageSlider({ url, limit = 5, page = 1 }) {


    const [images, setimages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(geturl) {

        try {
            setLoading(true);

            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();


            if (data) {

                setimages(data)
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }

    }


    useEffect(() => {

        if (url !== '') fetchImages(url);
    }, [url]);



    console.log(images);



    if (loading) {
        return <div>Loading...</div>
    }
    if (errorMsg !== null) {

        return <div>Error: {errorMsg}</div>
    }

    return (

        <div className="container">
            <BsArrowLeftCircleFill 
            onClick={handlePrevious}
            className="arrow arrow-left" />

            {
                images && images.length 
                ? images.map(imageItem => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className="current-image"
                        />


                    ))

                    : null
            }
            <BsArrowRightCircleFill 
            onClick={handleNext}
            className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ?
                        images.map((_, index) => (
                        <button
                            key={index}
                            className="current-indicator"

                        ></button>)
                        )
                        : null
                }
            </span>
        </div>
    )



}
