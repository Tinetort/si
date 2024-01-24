import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'
import data from '../data/data.js'

function DarkVariantExample() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 767)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 767)
        }

        // Set initial value on component load
        handleResize()

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h3 className="text-center fs-1 m-4">- Gallery -</h3>

            <Carousel data-bs-theme="dark">
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.text}
                        />
                        <Carousel.Caption>
                            <h5
                                className={`fw-bold text-light fs-${
                                    isSmallScreen ? 6 : 3
                                }`}
                            >
                                {item.text}
                            </h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default DarkVariantExample
