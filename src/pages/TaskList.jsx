import { Col, Container, Row } from "react-bootstrap";

const TaskList = props => {
    return (
        <Container className="pt-5">
            <Row>
                <Col>
                    <h6>TODO</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default TaskList;