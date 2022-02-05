import {React, useEffect} from 'react';
import { Table, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../store/actions/usersActions';

export default function Tables() {

  let dispatch = useDispatch();
  let navigate = useNavigate();
    const {users} = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(fetchUsers());
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
            <Card.Body>
            <Table striped hover>
              <thead>
                <tr className= {{backgroundColor: "red"}}>
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
                    <td>
                      {user.id}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user?.address?.city}</td>

                    <td>
                      <Button vaeiant="warning" 
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
            </Card.Body>
          </Col>
        </Row>
      
    </Container>
  )
  
}

