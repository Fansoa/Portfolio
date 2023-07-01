import { ThemeProvider } from '@emotion/react'
import Button from './components/Button'
import theme from './theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button/>
      </ThemeProvider>
    </>
  )
}

export default App
