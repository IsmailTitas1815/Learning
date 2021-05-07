import React from 'react';
import { CardBody, Card, CardFooter, CardHeader, Button } from 'reactstrap';

const controls = [
    { label: 'Kuli', type: 'kuli' },
    { label: 'Pool', type: 'pool' },
    { label: 'Khabar', type: 'khabar' },
    { label: 'Call', type: 'call' }
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="mr-auto ml-5" style={{ fontWeight: "bold", fontSize: "1.2erm" }}>{props.label}</div>
            <button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Less</button>
            <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: 'grey',
                    color: "white"
                }}>
                    <h4>Add Services</h4>
                </CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                added={() => props.addService(item.type)}
                                removed={() => props.removeService(item.type)}
                                label={item.label}
                                type={item.type}
                                key={Math.random()} />
                        })
                    }
                </CardBody>
                <CardFooter>
                    <h5>Price:{props.totalCost} BDT</h5>
                </CardFooter>
                <Button disabled={!props.purchasable} onClick={props.toogleModal}>Order Now</Button>
            </Card>
        </div>
    )
}

export default Controls;