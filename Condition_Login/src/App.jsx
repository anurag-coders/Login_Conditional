import SignIn from "./components/SignIn";
import LogIn from "./components/Login";
function App() {
  const abc = 1;

  return (
    <>
      {abc === 0 ? <LogIn /> : <SignIn />}
    </>
  );
}

export default App;
