import {useState} from 'react'
import VehiclesDropDown from './NavbarDropdown/VehiclesDropDown'
import Dropdown from './NavbarDropdown/Dropdown'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [showMobile, setShowMobile] = useState(false)

  const handleClick = (e) => {
    setShow(!show)
    const footer = document.getElementById('footer')
    const navbar = document.getElementById('navbar')
    const menu = document.getElementById('menu')
    const logo = document.getElementById('logo')
    const dropdown = document.getElementById('dropdown')
    const icons = document.querySelectorAll('.icon-1, .icon-2, .icon-3')

    if(!show){
      footer?.classList.add('hidden')
      logo?.classList.remove('invert')
      navbar?.classList.remove('text-white')
      navbar?.classList.add('bg-white')
      icons?.forEach(icon =>icon.classList.remove('invert'))
      menu?.classList.remove('text-white')


    } else {
      footer?.classList.remove('hidden')
      navbar?.classList.remove('bg-white')
      logo?.classList.add('invert')
      navbar?.classList.add('text-white')
      icons?.forEach(icon =>icon.classList.add('invert'))
      menu?.classList.add('text-white')


    }

    
  }

  const handleClickMobile = (e) => {
    setShowMobile(!showMobile)
    const footer = document.getElementById('footer')
    const navbar = document.getElementById('navbar')
    const menu = document.getElementById('menu')
    const logo = document.getElementById('logo')
    const dropdown = document.getElementById('dropdown')
    const icons = document.querySelectorAll('.icon-1, .icon-2, .icon-3')

    if(!showMobile){
      footer?.classList.add('hidden')
      logo?.classList.remove('invert')
      navbar?.classList.add('bg-white')
      navbar?.classList.remove('text-white')
      dropdown?.classList.remove('text-white')
      icons?.forEach(icon =>icon.classList.remove('invert'))
      menu?.classList.remove('text-white')
      menu?.classList.remove('backdrop-blur-lg')



    } else {
      footer?.classList.remove('hidden')
      navbar?.classList.remove('bg-white')
      logo?.classList.add('invert')
      navbar?.classList.add('text-white')
      icons?.forEach(icon =>icon.classList.add('invert'))
      menu?.classList.add('text-white')
      menu?.classList.add('backdrop-blur-lg')



    }

    
  }
  return (
    <>
      <div id='navbar' className=' z-0 px-6 lg:px-12 py-2 flex justify-between items-center'>

        <div>
          <a href="https://www.tesla.com">
            <img id="logo" className='invert h-3' src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbD0iIiBzdHlsZT0iLS1kYXJrcmVhZGVyLWlubGluZS1maWxsOiBjdXJyZW50Q29sb3I7Ii8+PC9zdmc+" alt="Tesla Logo" />
          </a>
        </div>


        <div id='navbar' className="hidden lg:inline-block text-sm font-bold text-white ">
          <ul className='flex justify-between '>
            <li onClick={handleClick} className='hover:bg-black/20 px-4 py-2 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer'>Vehicles</li>
            <li className='hover:bg-black/20 px-4 py-2 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer'>Energy</li>
            <li className='hover:bg-black/20 px-4 py-2 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer'>Charging</li>
            <li className='hover:bg-black/20 px-4 py-2 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer'>Discover</li>
            <li className='hover:bg-black/20 px-4 py-2 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer'>Shop</li>
          </ul>
        </div>

  
        <div className='hidden lg:inline-block hover:cursor-pointer font-medium rounded-md items-center '>
          <ul className='flex pt-2 justify-between'>
            <li className='hover:bg-black/20 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer'>
              <img className='icon-1 invert h-7' src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24taGVscCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDIwLjVhOC41IDguNSAwIDEgMSAwLTE3IDguNSA4LjUgMCAwIDEgMCAxN1ptMCAxLjVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMFptMC02YTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMlptLjA1My0zLjUzM2E3LjggNy44IDAgMCAxIC45Mi0uNzY3IDYuOTcgNi45NyAwIDAgMCAuNzQ2LS42MSAyLjMxIDIuMzEgMCAwIDAgLjQ2OC0uNjM1Yy4xMjYtLjI1My4xODgtLjU0OC4xODgtLjg4MyAwLS4zNzQtLjA4Mi0uNzIzLS4yNDYtMS4wNDgtLjE1OC0uMzI0LS40MTUtLjU4OC0uNzcxLS43OTItLjM1Ni0uMjAzLS44MS0uMzA1LTEuMzYyLS4zMDUtLjU3NSAwLTEuMDQ1LjExNi0xLjQxMS4zNDdhMS45OTEgMS45OTEgMCAwIDAtLjc4OC44OWMtLjA2LjEzNC0uMTEuMjcyLS4xNDguNDEzLS4xMTEuNDE0LS40NDUuNzY3LS44NzQuNzY3LS40MjggMC0uNzg0LS4zNS0uNzEtLjc3Mi4wNy0uNDA3LjItLjc5LjM4Ni0xLjE1LjMwMS0uNTgzLjc1OC0xLjA0OCAxLjM3LTEuMzk0QzEwLjQzNSA2LjE3NiAxMS4xODUgNiAxMi4wNyA2Yy45MyAwIDEuNjg3LjE4MSAyLjI3My41NDQuNTkuMzU4IDEuMDE0LjgwMyAxLjI3MSAxLjMzNy4yNTcuNTMzLjM4NiAxLjA3LjM4NiAxLjYwOCAwIC41NDUtLjA4NSAxLjAxMi0uMjU0IDEuNDAzLS4xNy4zODUtLjM3NS42OTgtLjYxNi45NC0uMjM1LjI0Mi0uNTUuNTE0LS45NDMuODE3LS4zMTIuMjQ3LS41NjEuNDYtLjc0Ny42MzUtLjE4LjE3Ni0uMzMuMzg1LS40NTEuNjI3LS4wNS4wOTktLjA4Ny4yLS4xMTMuMzAyLS4xMDguNDI0LS40MjIuNzg3LS44Ni43ODctLjQzNyAwLS44MDYtLjM1Ni0uNzYtLjc5YTIuOTQ4IDIuOTQ4IDAgMCAxIC43OTctMS43NDNaIiBkYXRhLWRhcmtyZWFkZXItaW5saW5lLWZpbGw9IiIgc3R5bGU9Ii0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogY3VycmVudENvbG9yOyIvPjwvc3ZnPg==" alt="about" />
            </li>
            <li className='hover:bg-black/20 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer px-3'>
              <img  className='icon-2 invert h-7' src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tZ2xvYmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMiAxMmMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwUzIgMTcuNTIzIDIgMTIgNi40NzcgMiAxMiAyczEwIDQuNDc3IDEwIDEwWk05LjI1NCAyMC4wNDdhOC4xNDcgOC4xNDcgMCAwIDEtLjc2OC0xLjM3OGMtLjQwNC0uOTEtLjcyMi0xLjk4NS0uOTM1LTMuMTY5aC0zLjNhOC41MjYgOC41MjYgMCAwIDAgNS4wMDMgNC41NDdabS42MDMtMS45ODhjLjMzNi43NTcuNzE4IDEuMzI0IDEuMTAzIDEuNjkuMzgyLjM2NC43MzIuNTAxIDEuMDQuNTAxLjMwOCAwIC42NTgtLjEzNyAxLjA0LS41LjM4NS0uMzY3Ljc2Ny0uOTM0IDEuMTAzLTEuNjkuMzIxLS43MjMuNTg4LTEuNTkuNzgtMi41Nkg5LjA3NmMuMTkyLjk3LjQ1OSAxLjgzNy43OCAyLjU2Wk04Ljc1IDEyYzAgLjY5MS4wMzYgMS4zNi4xMDMgMmg2LjI5NGMuMDY3LS42NC4xMDMtMS4zMDkuMTAzLTIgMC0uNjkxLS4wMzYtMS4zNi0uMTAzLTJIOC44NTNjLS4wNjcuNjQtLjEwMyAxLjMwOS0uMTAzIDJabS0xLjQwNS0ySDMuNzM3YTguNTIyIDguNTIyIDAgMCAwLS4yMzcgMmMwIC42ODkuMDgyIDEuMzU5LjIzNyAyaDMuNjA4YTIwLjc1IDIwLjc1IDAgMCAxIDAtNFptMS43MzItMS41aDUuODQ1Yy0uMTktLjk3LS40NTgtMS44MzctLjc3OS0yLjU2LS4zMzYtLjc1Ni0uNzE4LTEuMzIzLTEuMTAzLTEuNjktLjM4Mi0uMzYzLS43MzItLjUtMS4wNC0uNS0uMzA4IDAtLjY1OC4xMzctMS4wNC41LS4zODUuMzY3LS43NjcuOTM0LTEuMTAzIDEuNjktLjMyMS43MjMtLjU4OCAxLjU5LS43OCAyLjU2Wm03LjU3NyAxLjVhMjAuNzI4IDIwLjcyOCAwIDAgMSAwIDRoMy42MWE4LjUyIDguNTIgMCAwIDAgLjIzNi0yIDguNTIgOC41MiAwIDAgMC0uMjM3LTJoLTMuNjA5Wm0zLjA5NC0xLjVhOC41MjYgOC41MjYgMCAwIDAtNS4wMDItNC41NDdjLjI4Ny40MDguNTQzLjg3My43NjggMS4zNzguNDA0LjkxLjcyMiAxLjk4NS45MzUgMy4xNjloMy4zWm0tMTIuMTk3IDBjLjIxMy0xLjE4NC41MzEtMi4yNi45MzUtMy4xNjkuMjI1LS41MDUuNDgtLjk3Ljc2OC0xLjM3OEE4LjUyNiA4LjUyNiAwIDAgMCA0LjI1MiA4LjVoMy4zWm03Ljk2MyAxMC4xNjljLS4yMjUuNTA1LS40OC45Ny0uNzY4IDEuMzc4YTguNTI2IDguNTI2IDAgMCAwIDUuMDAyLTQuNTQ3aC0zLjNjLS4yMTIgMS4xODQtLjUzIDIuMjYtLjkzNCAzLjE2OVoiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbD0iIiBzdHlsZT0iLS1kYXJrcmVhZGVyLWlubGluZS1maWxsOiBjdXJyZW50Q29sb3I7Ii8+PC9zdmc+" alt="countries" />
            </li>
            <li className='hover:bg-black/20 hover:duration-500 rounded-md hover:scale-105 hover:cursor-pointer' >
              <img className='icon-3 invert h-7' src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tcGVyc29uIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIgMkM2LjQ3NyAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyek02Ljg1OCAxOC43NTJjLjYwNS0xLjg2OCAyLjcyMi0zLjI0IDUuMTQyLTMuMjQgMi40MiAwIDQuNTM3IDEuMzcyIDUuMTQyIDMuMjRDMTUuNzEyIDE5Ljg0NCAxMy45MzMgMjAuNSAxMiAyMC41cy0zLjcxMi0uNjU2LTUuMTQyLTEuNzQ4em0xMS40NjktMS4wOTVjLTEuMDItMi4xNjUtMy40ODMtMy42NDUtNi4zMjctMy42NDVzLTUuMzA3IDEuNDgtNi4zMjcgMy42NDVBOC40NTYgOC40NTYgMCAwIDEgMy41IDEyYzAtNC42ODcgMy44MTMtOC41IDguNS04LjUgNC42ODcgMCA4LjUgMy44MTMgOC41IDguNWE4LjQ1NiA4LjQ1NiAwIDAgMS0yLjE3MyA1LjY1N3pNMTIgNmEzLjUgMy41IDAgMSAwIDAgNyAzLjUgMy41IDAgMCAwIDAtN3ptMCA1LjVjLTEuMTAzIDAtMi0uODk3LTItMnMuODk3LTIgMi0yIDIgLjg5NyAyIDItLjg5NyAyLTIgMnoiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbD0iIiBzdHlsZT0iLS1kYXJrcmVhZGVyLWlubGluZS1maWxsOiBjdXJyZW50Q29sb3I7Ii8+PC9zdmc+" alt="account" />
            </li>
            
          </ul>
        </div>

        <div id="menu" onClick={handleClickMobile} className='text-white xl:hidden cursor-pointer lg:hidden backdrop-blur-lg px-4 py-2 rounded-md'>Menu</div>

        {/* {show && <MobileNavbar/>} */}
        {show && <VehiclesDropDown /> }
        {showMobile && <Dropdown /> }

        
      </div>
    </>
  )
}

export default Navbar