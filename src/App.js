import Card from './components/Card'
import Contador from './components/Contador';

function App() {

  const arr = [
    {
      title: 'Card 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt blanditiis eos necessitatibus, reiciendis consectetur voluptate sint. Tenetur molestias laudantium facilis iste, voluptatum sed numquam! Sunt quasi pariatur quae culpa.'
    },
    {
      title: 'Card 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt blanditiis eos necessitatibus, reiciendis consectetur voluptate sint. Tenetur molestias laudantium facilis iste, voluptatum sed numquam! Sunt quasi pariatur quae culpa.'
    },
    {
      title: 'Card 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt blanditiis eos necessitatibus, reiciendis consectetur voluptate sint. Tenetur molestias laudantium facilis iste, voluptatum sed numquam! Sunt quasi pariatur quae culpa.'
    },
  ];
  

  return (
    <div className="container">
      
      <div className="row">

        {
          arr.map(item => <Card title={ item.title } content={ item.content } />)
        }

      </div>

      <div className="row mt-4">
        <Contador />
      </div>

    </div>
  );
}

export default App;
