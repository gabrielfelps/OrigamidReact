import Card from 'react-bootstrap/Card';

function App() {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione
          exercitationem a molestiae! Officia laudantium doloremque quas quo
          amet beatae totam animi vitae! Totam alias corrupti, quae eveniet
          repellat non.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default App;
