import { Container, Accordion, Card, Button, Image } from "react-bootstrap";
import BagsFetch from "./BagsFetch";
import Images from "../images/images"
import { useHistory } from 'react-router-dom';
import { useState } from 'react'

const Bag = (props) => {


    const [refresh, setRefresh] = useState(true)
    const { data: bags, error } = BagsFetch("http://localhost:8000/bags", refresh);
    const history = useHistory();

    console.log(bags);

    const handleClick = (bag) => {

        fetch('http://localhost:8000/bags/' + bag.id, {
            method: 'DELETE'
        }).then(() => {
            // window.location.reload(true);
            console.log("bag deleted!");
            (refresh === true) ? setRefresh(false) : setRefresh(true);
        })

    }


    return (
        <Container className="bag-container">
            <Accordion defaultActiveKey="0">
                {bags && (bags.map((bag) => (
                    <Card key={bag.id}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Image className="bag-img" src={Images.images[bag.clothId-1][bag.clothColor].src}></Image>
                        </Accordion.Toggle>
                        {(props.language === "en") ? bag.clothName : bag.clothNameMandarin}
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Image className="bag-img" src={Images.images[bag.clothId-1][bag.clothColor+1].src}></Image>
                            {(props.language === "en") ? ("SIZE: " + bag.clothSize + "  |  PRICE: " + bag.clothPrice) : ("尺寸: " + bag.clothSize + "  |  价格: " + bag.clothPrice)}
                            <Button className="float-right item-remove" variant="secondary" onClick={() => handleClick(bag)}>{(props.language === "en") ? "REMOVE FROM BAG" : "移除"}</Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )))}
                </Accordion>
        </Container>
    )
}


export default Bag