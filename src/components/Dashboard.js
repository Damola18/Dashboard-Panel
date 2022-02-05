import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { loadUsers, deleteUser } from "../redux/actions";

export default function Dashboard ()  {

    const styles = {
        btn:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            marginLeft: "0.3rem",
            marginTop:"0.6em",
            width:"40px",
            height:" 40px",
            borderRadius: "6px",
            backgroundColor:"#ffece8",
            color: "#FF8872",
            fontWeight:"bold",
        }
    };

    let dispatch = useDispatch();
    let navigate = useNavigate();
        const {users} = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this user ?")) {
            dispatch(deleteUser(id));
        };
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card.Header>
                        <h3>User Dashboard</h3>
                    </Card.Header>
                    <Card.Body>
                    <div>
                        <Row>
                            <Col className="sm-6">
                                <p className="">User Lists</p>
                            </Col>
                            <Col className="sm-6 text-right">
                                <div>
                                    <Button onClick={() => navigate('/addUser')}>
                                    Add New
                                    </Button>
                                </div>
                            </Col>
                        </Row>   
                    </div>
                    </Card.Body>
                    
                    <Table striped hover>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                            <tr>
                                <td style={styles.btn}>
                                {user.id}
                                </td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user?.address?.city}</td>

                                <td>
                                <Button variant="warning" 
                                onClick={() => navigate(`/editUser/${user.id}`)}>
                                    Edit
                                </Button>
                                </td>

                                <td>
                                <Button variant="danger" 
                                onClick={() => handleDelete(user.id)}>
                                    Delete
                                </Button>
                                </td>
                            </tr>
                            ))}
                        </tbody>

                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
