import Home from '../components/home'
import Menu from '../components/menu'

export default function Nav() {
  return (
    <header className="@apply sticky top-0 w-full h-1/5 md:h-24 lg:h-24  justify-between flex items-center content-center flex-col md:flex-row lg:flex-row bg-gradient-to-r from-primary to-secondary px-2 md:px-4 lg:px-8">
          <Home/>
          <Menu/>
    </header>
  )
}
