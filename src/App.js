import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col} from 'react-bootstrap';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <Container className='contnents'>
      <Row style={{height: "100%"}}>
        <Col md={3} className='left'>
          <Left />
        </Col>
        <Col md={9} className='right'>
          <Right />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
