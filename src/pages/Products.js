
import { useEffect, useState } from 'react';
import Cards from '../Component/Cards'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductJson from '../mock/Products.json'


function BasicExample() {

    const [outCards, setOutCards] = useState([[]]);

    const dataSet = () => {
        let resultArr = []
        const chunkSize = 4;
        for (let i = 0; i < ProductJson.products.length; i += chunkSize) {
            const chunk = ProductJson.products.slice(i, i + chunkSize);
            resultArr.push(chunk)
        }



        setOutCards(resultArr)
    }

    const view = (dataSet) => {
        return <Row>
            {dataSet.map((product) => {

                console.log('product.pid', product.pid)
                return <Col key={product.pid} xs={3}><Cards data={{ product }} /></Col>
            })
            }
        </Row>
    }

    useEffect(() => {
        console.log('window.location.pathname 12', window.location.pathname)
        dataSet()
    }, [])

    return (
      
            <Row>
                <Col xs={3}>
                    hi
                </Col>
                <Col xs={9}>
                    {
                        outCards.map((cards) => {
                            return view(cards)
                        })
                    }
                </Col>
            </Row>

     


    )
}

export default BasicExample;