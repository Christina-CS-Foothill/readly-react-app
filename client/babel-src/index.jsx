import BasicComponent from './basic-component.jsx';

var App = () => {
  return (
    <div>
      <BasicComponent />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('content')).render(<App />);
