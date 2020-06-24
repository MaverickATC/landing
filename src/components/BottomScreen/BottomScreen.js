import React from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import classes from './BottomScreen.module.scss'

export const BottomScreen = () => {
    const { register, handleSubmit, errors, formState, reset } = useForm();

    const { touched } = formState;

    const minPwdLen = 8;
    const onSubmit = data => {
        reset({
            touched: false
        });

    }

    // console.log(watch("password"));
    // console.log(touched, errors);

    return (
        <footer className={classes.wrapper} id="bs">
            <Container fluid>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                isValid={!errors.email && touched.email}
                                isInvalid={errors.email && touched.email}
                                ref={register({
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                isValid={!errors.password && touched.password}
                                isInvalid={errors.password && touched.password}
                                ref={register({
                                    required: true,
                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[,._])[A-Za-z\d,._]{8,}$/,
                                    minLength: minPwdLen
                                })}
                            />
                            <Form.Text className="text-muted">
                                Minimum {minPwdLen} characters, at least one letter, one number and one special character
                        </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstname"
                                placeholder="First name"
                                isValid={!errors.firstname && touched.firstname}
                                isInvalid={errors.firstname && touched.firstname}
                                ref={register({
                                    required: true
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="username"
                                placeholder="Username"
                                isValid={!errors.username && touched.username}
                                isInvalid={errors.username && touched.username}
                                ref={register({
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([0-9a-zA-Z]*)$/
                                })}
                            />
                            <Form.Text className="text-muted">
                                [A..Z, a..z]@[A..Z, a..z, 0..1]
                        </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="outline-warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </footer>
    )
}