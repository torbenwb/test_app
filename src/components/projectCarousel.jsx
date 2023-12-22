import { Carousel, Image } from "react-bootstrap"
import image1 from "../vis_assets/TimeTrials_Fancy.gif"
import image2 from "../vis_assets/Voxel World (compressed).gif"

export const ProjectCarousel = () =>
{
    return (
        <Carousel>
            <Carousel.Item>
             <Image src={image1}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={image2}/>
            </Carousel.Item>
        </Carousel>
    )
}