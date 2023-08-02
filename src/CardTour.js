import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ myemp }) {
    return (
        <div style={{textAlign:'center',textAlign: '-webkit-center'}}>
        <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/Images/img.webp" />
            <Card.Body>
                <Card.Title>Employee Details</Card.Title>
                <Card.Text>{myemp.id}</Card.Text>
                <Card.Text>{myemp.name}</Card.Text>
                <Card.Text>{myemp.email}</Card.Text>
                <Card.Text>{myemp.department}</Card.Text>
                <Button variant="primary" href='../ListEmployee'>Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default BasicExample;