import { Global, ThemeProvider } from '@emotion/react'
import Button from './components/Button'
import LabelCheckbox from './components/inputs/LabelCheckbox'
import LabelInput from './components/inputs/LabelInput'
import theme from './theme'
import {globalStyles} from './utils/sharedStyles/globalStyles'

import '../src/utils/fonts/fonts.css'

function App() {

  return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles}/>
        <Button label='Bouton'/>
        <LabelCheckbox label='Label' value={false}/>
        <LabelInput label='Label'/>
        <LabelInput type='number' label='Label'/>
      </ThemeProvider>
  )
}

export default App
