import React from 'react'
import { Container } from '@material-ui/core'
import {Carousel} from 'react-bootstrap'

function HomeCarousel() {
  return (
    <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://lh3.googleusercontent.com/proxy/knnJ_JCSm-oMQuovXy8h0BBhV24yfONy66g98tR2GvxXfDlfBVCPci2YmorBAdaZ-HGUDt7t11wXR3IkURZ4v2PsYildWY6PRq3swNVz7YwktFVLBOPiCVKktSTxwa_lY5V6r0bL-0D8XrkfO0d-L1R5yMvmpA'
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>......</h3>
              <p>......</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/proxy/TigAV80A6CurzYyszboEq5DAMQsHIUIEUj5IXak9d2AZvklDLfu9DQYBfe3ABC0s4yKYAv2-VlUx4ZM_RxsB96FDavvFeJQdRyj5O4kmh31shW1FMT6kssXSn6WUVHBBm2ELkc2J9cSkbIcS_nft2hUaTQkozQ"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>......</h3>
              <p>... ...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://metallprofil.kg/upload/iblock/d7d/20181220_151009.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>...</h3>
              <h5>...</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeCarousel
