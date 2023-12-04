import './App.css';
import { Button} from 'antd';
import { Pagination } from 'antd';

function App() {
  return (
    <div className="App">
        <Button>Default Button</Button>
        <Pagination defaultCurrent={6} total={500} />
    </div>
  );
}

export default App;
