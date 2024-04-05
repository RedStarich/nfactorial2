import styled from 'styled-components'
import bg from './bg.png';
import bg2 from './grid.png';
import Palettes from './components/Palettes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PlaneHelper } from 'three/src/Three.js';

function App() {
  return (
    <BrowserRouter>
      <AppStyled bg={bg} grid={bg2}>
        <div className='grid'></div>
        <Routes>
          <Route path='/' element={<Palettes/>}/>
          <Route path='/palette/:id' element={''}/>

        </Routes>
        <Palettes/>
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: lightblue;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .grid{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url(${props => props.grid});
    background-repeat: repeat;
  }
`

export default App;