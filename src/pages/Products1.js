
import { useEffect, useState } from 'react';
import Filter from "../Component/Filter"
import Cards from '../Component/Cards'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductJson from '../mock/Products.json'



function BasicExample() {

    const [outCards, setOutCards] = useState([[]]);
    const [filter, setFilter] = useState(false);

    const [products, setProducts] = useState([]);

    const dataSet = () => {
        let resultArr = []
        const chunkSize = 4;
        for (let i = 0; i < products.length; i += chunkSize) {
            const chunk = products.slice(i, i + chunkSize);
            resultArr.push(chunk)
        }

        console.log('resultArr', resultArr)

        setOutCards(resultArr)
    }

    const filterBol = (data) => {
        console.log('filter', data)
        setFilter(true)
    }

    const view = (dataSet) => {
        return <Row>
            {dataSet.map((product) => {
                return <Col xs={3}><Cards key={product.id} data={{ product }} /></Col>
            })
            }
        </Row>
    }

    useEffect(() => {
        if (true) {
            console.log('window.location.pathname treu', window.location.pathname)
            let url = window.location.href
            let category = "CAT_002"//url.split('category=')[1]

            let allProducts = [
                {
                    "Pid": "PRO_00001",
                    "name": "Sparkle - 10cm",
                    "category": "CAT_001",
                    "variant": "10cm",
                    "price": "20",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00002",
                    "name": "Sparkle - 15cm",
                    "category": "CAT_001",
                    "variant": "15cm",
                    "price": "45",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00003",
                    "name": "Sparkle - 30cm",
                    "category": "CAT_001",
                    "variant": "30cm",
                    "price": "125",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00004",
                    "name": "Sparkle - 50cm",
                    "category": "CAT_001",
                    "variant": "50cm",
                    "price": "180",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00005",
                    "name": "Sparkle - 75cm",
                    "category": "CAT_001",
                    "variant": "75cm",
                    "price": "320",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00006",
                    "name": "Sparkle - 100cm",
                    "category": "CAT_001",
                    "variant": "100cm",
                    "price": "500",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00007",
                    "name": "Chakkars small",
                    "category": "CAT_002",
                    "variant": "75cm",
                    "price": "320",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00008",
                    "name": "Chakkars Medium",
                    "category": "CAT_002",
                    "variant": "100cm",
                    "price": "500",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                },
                {
                    "Pid": "PRO_00009",
                    "name": "Chakkars Big",
                    "category": "CAT_002",
                    "variant": "100cm",
                    "price": "500",
                    "discription": "Night firework make you feel awsome",
                    "discount": "80%",
                    "image": "",
                    "footer": "Flat 80% off and Free delivery",
                    "avaliable": "",
                    "isDeleted": "",
                    "brand": "",
                    "stock": "",
                    "piece": ""
                }
            ]

            let arr = allProducts.filter((product) => {
                return product.category == category
            })
            setProducts([...products, ...arr])

        } else {
            console.log('window.location.pathname false', window.location.pathname)
        }

        dataSet()
    }, [])

    return (
        <>


            <Row>
              {  <Col lg={2}> <Filter filterBol={{ filterBol }} /></Col>}
                <Col lg={10}>
                    {
                        outCards.map((cards) => {
                            return view(cards)
                        })
                    }
                </Col>
            </Row>


        </>
    )
}

export default BasicExample;