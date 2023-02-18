import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  addCount: number;
}

function App({addCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      addCount = {addCount}
    />
  );
}

export default App;
