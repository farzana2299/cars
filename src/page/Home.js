import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { categoryApi } from '../service/allApi';


function Home() {

    const [category, setCategory] = useState({
        name: ""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setDatas = (e) => {
        const { name, value } = e.target
        setCategory({ ...category, [name]: value })
    }
    const handleAdd = async (e) => {
        e.preventDefault()
        const { name } = category
        if (!name) {
            alert("Please fill all data")
        }
        else {
            // api call
            const result = await categoryApi(category)
            console.log(result);
            if (result.status == 200) {
                alert("Please Fill All Data")
                setCategory({ ...category, name: "" })

            }
            else {
                alert(result.response)
            }
        }
    }
        return (
            <div>
                <div className='container'>
                    <Button variant="primary" onClick={handleShow}>Add Category</Button>{' '}

                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mt-5 mb-3"
                        >
                            <Form.Control name='name' type="text" placeholder="Name" onChange={(e) => setDatas(e)} />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={(e) => handleAdd(e)}>
                            ADD
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }

    export default Home