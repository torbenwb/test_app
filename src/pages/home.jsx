import { Row, Col, Container } from "react-bootstrap"
import { ProjectCarousel } from "../components/projectCarousel"

export const Home = () => 
{
    return (
        <Container>
            <h1>Home</h1>
            <Container style={{display:"flex", justifyContent:"center", alignContent:"center" }}>
                <ProjectCarousel />
            </Container>
            
        </Container>
    )
}