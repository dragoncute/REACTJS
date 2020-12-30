
import DemoComponents from './components/DemoComponents';

// useEffect luôn luôn chạy sau khi render
// componentWillMount -> hooks không hỗ trợ

// let countRender = 0;

function App() {


  console.log('render component');
  // console.log('buttonEl', buttonEl);
  return (
    <div className="App">
      <header className="App-header">
       
        <DemoComponents />
      </header>
    </div>
  );
}
export default App;
