
import ListGroup from './components/ListGroup'
import Alert from './components/Alert';

function App() {
  let items = ['Profile', 'Settings', 'Messages', 'Download'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <h1>App</h1>
      <Alert>
        <div>
          fddfdf
          
        </div>
      </Alert>
      <ListGroup items={items} heading='Applist' onSelectItem={handleSelectItem}/>
      
    </>
  )
}

export default App
