import { Global, ThemeProvider } from '@emotion/react'
import Button from './components/Button'
import theme from './theme'
import {globalStyles} from './utils/sharedStyles/globalStyles'

function App() {

  return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles}/>
        <Button label='Bouton'/>
      </ThemeProvider>
  )
}

export default App
