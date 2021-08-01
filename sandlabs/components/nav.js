import Home from '../components/home'
import Menu from '../components/menu'

export default function Nav() {
  return (
    <header className="@apply sticky top-0 w-screen h-24 justify-between flex items-center flex-row bg-gradient-to-r from-primary to-secondary  md:px-4 lg:px-8">
          <Home/>
          <Menu/>
    </header>
  )
}
