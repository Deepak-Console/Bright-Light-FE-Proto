
import { useEffect, useState } from 'react';
import Cards from '../Component/CategoryCard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CategoryJSON from '../mock/Category.json'

function BasicExampleOne() {

    const [outCards, setOutCards] = useState([]);

    const dataSet = () => {
        let resultArr = []
        const chunkSize = 4;
        for (let i = 0; i < CategoryJSON.category.length; i += chunkSize) {
            const chunk = CategoryJSON.category.slice(i, i + chunkSize);
            resultArr.push(chunk)
        }

        

        setOutCards(resultArr)
    }

    const view = (dataSet) => {
        return <Row>
            {dataSet.map((product) => {
                
                return <Col xs={3}><Cards data={{ product }} /></Col>
            })
            }
        </Row>
    }

    useEffect(() => {
        dataSet()
    }, [])

    return (

        <Container>
            {
                outCards.map((cards) => {
                    return view(cards)
                })
            }

        </Container>

    )
}

export default BasicExampleOne;