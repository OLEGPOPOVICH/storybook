import { Tabs } from "./Tabs";
import './App.css';

const tabs =  [
  {text: 'Profile', renderContent: () => <div>Profile</div>},
  {text: 'Contact', renderContent: () => <div>Contact</div>},
  {text: 'Settings', renderContent: () => <div>Settings</div>}
];

function App() {
  return (
    <div className="app__main-container">
      <div className="app__title-container"></div>
      <div className="app__content-container">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;
