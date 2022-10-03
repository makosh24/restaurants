import './App.css'
import Button from './components/Button';
import Container from './components/Container';
import List from './components/generics/List';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';
import Status from './components/Status';


function App() {
  const personName = {
    first: 'Madi',
    last: 'Yedenbay'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet isLoggedIn={false} />
      <Greet name='Madi' isLoggedIn={true} messageCount={10} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='Loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to give me
        </Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log(event, id)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <Input value='123' handleChange={(event) => console.log(event.target.value)} />
      <LoggedIn />
      <List
        items={['Batman', 'Superman']} 
        onClick={(item) => { console.log(item) }}
      />
    </div>
  );
}

export default App;
