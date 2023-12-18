import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { loginApi, registerApi } from '../service/allApi';

function Auth({ register }) {
    const isRegister = register ? true : false

    const [nameValid, setNameValid] = useState(false)
    const [unameValid, setunameValid] = useState(false)
    const [emailValid, setemailValid] = useState(false)
    const [passwordValid, setpasswordValid] = useState(false)
    const [phoneValid, setPhoneValid] = useState(false)


    // state to hold user data
    const [user, setUser] = useState({
        name: "",
        phone: "",
        userName: "",
        email: "",
        password: ""
    })
    const setDatas = (e) => {
        const { name, value } = e.target

        if (name == 'name') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setNameValid(false)
            } else {
                setNameValid(true)
            }
        }
        if (name == 'userName') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setunameValid(false)
            } else {
                setunameValid(true)
            }
        }
        if (name == 'phone') {
            if (value.match(/^\d{10}$/)) {
                setPhoneValid(false)
            } else {
                setPhoneValid(true)
            }
        }
        if (name == 'email') {
            if (value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
                setemailValid(false)
            } else {
                setemailValid(true)
            }
        }
        if (name == 'password') {
            if (value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)) {
                setpasswordValid(false)
            } else {
                setpasswordValid(true)
            }
        }
        setUser({ ...user, [name]: value })
    }
const navigate=useNavigate()
     // register
     const handleRegister = async (e) => {
        e.preventDefault()
        const { name,phone,userName, password, email } = user
        if (!name||!userName || !password || !email||!phone) {
            alert("Please fill all data")
        }
        else {
            // api call
            const result = await registerApi(user)
            console.log(result);
            if (result.status == 200) {
                toast.success('Registerd Successfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setUser({ ...user,name:"",phone:"", userName: "", email: "", password: "" })
                navigate('/login')
            }
            else {
                toast.error(result.response.data, {
                                        position: "top-center",
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
            }
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const { password, userName } = user
        if (!password || !userName) {
            alert("Please fill all data")
        }
        else {
            // api call
            const bodyData = { password, userName }
            const result = await loginApi(bodyData)
            console.log(result);
            if (result.status == 200) {
                setUser({userName:"",password:""})
            
                toast.success(result.data, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/home')
                setUser({ password: "", email: "" }) 
            }
            else {
                toast.error(result.response.data, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }
    return (
        <div>
            <div className='mt-5 p-5'>

                <div className='container w-50 mt-5 mb-5 shadow-lg p-5'>
                    <Row>
                        <Col className='p-3'>

                            <img className='container w-100 mt-5' src={isRegister ? "https://i.postimg.cc/4N2STNPX/reg.gif": "https://i.postimg.cc/nLRyMhVV/userloin.gif"} alt="" />
                        </Col>
                        <Col>
                            <h2>{isRegister ? 'Register' : 'Login'}</h2>

                            {
                                isRegister &&
                                <>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"
                                        className="mt-5 mb-3"
                                    >
                                        <Form.Control value={user.name} name='name' onChange={(e) => setDatas(e)} type="text" placeholder="Name" />
                                    </FloatingLabel>
                                    {nameValid &&
                                        <p className='text-danger'>Invalid Name</p>
                                    }
                                </>
                            }
                            {
                                isRegister &&
                                <>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control value={user.email} name='email' onChange={(e) => setDatas(e)} type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    {emailValid &&
                                        <p className='text-danger'>Invalid Email</p>
                                    }
                                </>
                            }
                            {
                                isRegister &&
                                <>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Phone Number"
                                        className="mb-3"
                                    >
                                        <Form.Control value={user.phone} name='phone' onChange={(e) => setDatas(e)} type="text" placeholder="Phone Number" />
                                    </FloatingLabel>
                                    {phoneValid &&
                                        <p className='text-danger'>Invalid Phone Number</p>
                                    }
                                </>
                            }
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="UserName"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.userName} name='userName' onChange={(e) => setDatas(e)} type="text" placeholder="UserName" />
                                </FloatingLabel>
                                {unameValid &&
                                    <p className='text-danger'>Invalid UserName</p>
                                }
                            </>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control value={user.password} name='password' onChange={(e) => setDatas(e)} type="password" placeholder="Password" />
                            </FloatingLabel>
                            {passwordValid &&
                                <p className='text-danger'>Please Enter Strong Password</p>
                            }
                            {isRegister ? <Button onClick={(e) => handleRegister(e)} className='btn btn-danger mt-5 px-5 py-3 mb-2 rounded-pill'>Register</Button> :
                                <Button onClick={(e) => handleLogin(e)} className='btn btn-danger mt-5 px-5 py-3 mb-2 rounded-pill'>Login</Button>
                            }
                            {isRegister ? <p>Already have an Account? <Link to={'/login'} style={{ textDecoration: 'none' }}>Sign-In Here</Link></p> :
                                <p>New User? <Link to={'/'} style={{ textDecoration: 'none' }}>Sign-Up Here</Link></p>
                            }
                        </Col>
                    </Row>
                </div>
                <ToastContainer />
            </div>
        </div>

    )
}

export default Auth