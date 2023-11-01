import React from "react";
import {useState} from "react";

const Dropdown = (props) => {
  //FIGURE OUT HOW TO PROCEED VIA VIDEO
  // const [show, setShow] = useState(props.show)
  // function handleClickVehicles(){
  //   setShow(!show)
  //   const dropdown = document.getElementById('dropdown')
  //   const vehicleDropdown = document.getElementById('vehicleDropdown')
  //   if(!show){
  //     dropdown?.classList.add('hidden')
  //     vehicleDropdown?.classList.add('')
  //   }

  
  return (
    <>
      <div
        id="dropdown"
        className="h-screen justify-center items-center flex inset-x-0 top-10  absolute bg-white"
      >
        <ul className="grid cursor-pointer w-full text-sm items-center  h-[85vh]">


          <div  onClick={props.handleClickVehicles} className="flex h-20 pl-8 items-center justify-between hover:bg-gray-200 hover:duration-500 ">
            
            <li  className="">Vehicles</li>
            
            <img className=" pr-8 h-5" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tY2hldnJvbi1zbWFsbC05MCB0ZHMtaWNvbi0tc21hbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00Ljk3NSAyLjc1YS43NDguNzQ4IDAgMCAxIDEuMjgxLS41M2w1LjI1IDUuMjY0YS43NS43NSAwIDAgMSAwIDEuMDZMNi4yODMgMTMuNzhhLjc1Ljc1IDAgMSAxLTEuMDYyLTEuMDZsNC42OTUtNC43MDZMNS4xOTQgMy4yOGEuNzQ4Ljc0OCAwIDAgMS0uMjE5LS41M3oiLz48L3N2Zz4=" alt="arrow" />
          </div>

          <div className="flex h-20 pl-8 items-center justify-between hover:bg-gray-200 hover:duration-500 ">
            <li>Energy</li>
            <img className="pr-8 h-5" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tY2hldnJvbi1zbWFsbC05MCB0ZHMtaWNvbi0tc21hbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00Ljk3NSAyLjc1YS43NDguNzQ4IDAgMCAxIDEuMjgxLS41M2w1LjI1IDUuMjY0YS43NS43NSAwIDAgMSAwIDEuMDZMNi4yODMgMTMuNzhhLjc1Ljc1IDAgMSAxLTEuMDYyLTEuMDZsNC42OTUtNC43MDZMNS4xOTQgMy4yOGEuNzQ4Ljc0OCAwIDAgMS0uMjE5LS41M3oiLz48L3N2Zz4=" alt="" />
          </div>

          <div className="flex h-20 pl-8 items-center justify-between hover:bg-gray-200 hover:duration-500 ">
            <li>Charging</li>
            <img className="pr-8 h-5" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tY2hldnJvbi1zbWFsbC05MCB0ZHMtaWNvbi0tc21hbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00Ljk3NSAyLjc1YS43NDguNzQ4IDAgMCAxIDEuMjgxLS41M2w1LjI1IDUuMjY0YS43NS43NSAwIDAgMSAwIDEuMDZMNi4yODMgMTMuNzhhLjc1Ljc1IDAgMSAxLTEuMDYyLTEuMDZsNC42OTUtNC43MDZMNS4xOTQgMy4yOGEuNzQ4Ljc0OCAwIDAgMS0uMjE5LS41M3oiLz48L3N2Zz4=" alt="" />
          </div>

          <div className="flex h-20 pl-8 items-center justify-between hover:bg-gray-200 hover:duration-500  ">
            <li>Discover</li>
            <img className="pr-8 h-5" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tY2hldnJvbi1zbWFsbC05MCB0ZHMtaWNvbi0tc21hbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00Ljk3NSAyLjc1YS43NDguNzQ4IDAgMCAxIDEuMjgxLS41M2w1LjI1IDUuMjY0YS43NS43NSAwIDAgMSAwIDEuMDZMNi4yODMgMTMuNzhhLjc1Ljc1IDAgMSAxLTEuMDYyLTEuMDZsNC42OTUtNC43MDZMNS4xOTQgMy4yOGEuNzQ4Ljc0OCAwIDAgMS0uMjE5LS41M3oiLz48L3N2Zz4=" alt="" />
          </div>

          <div className="flex h-20 pl-8 items-center justify-between hover:bg-gray-200 hover:duration-500">
            <li>Shop</li>
            <img className="pr-8 h-5" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tY2hldnJvbi1zbWFsbC05MCB0ZHMtaWNvbi0tc21hbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00Ljk3NSAyLjc1YS43NDguNzQ4IDAgMCAxIDEuMjgxLS41M2w1LjI1IDUuMjY0YS43NS43NSAwIDAgMSAwIDEuMDZMNi4yODMgMTMuNzhhLjc1Ljc1IDAgMSAxLTEuMDYyLTEuMDZsNC42OTUtNC43MDZMNS4xOTQgMy4yOGEuNzQ4Ljc0OCAwIDAgMS0uMjE5LS41M3oiLz48L3N2Zz4=" alt="" />
          </div>

          <div className="flex  h-20 pl-7 items-center">
            <img className="h-7" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tZ2xvYmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMiAxMmMwIDUuNTIzLTQuNDc3IDEwLTEwIDEwUzIgMTcuNTIzIDIgMTIgNi40NzcgMiAxMiAyczEwIDQuNDc3IDEwIDEwWk05LjI1NCAyMC4wNDdhOC4xNDcgOC4xNDcgMCAwIDEtLjc2OC0xLjM3OGMtLjQwNC0uOTEtLjcyMi0xLjk4NS0uOTM1LTMuMTY5aC0zLjNhOC41MjYgOC41MjYgMCAwIDAgNS4wMDMgNC41NDdabS42MDMtMS45ODhjLjMzNi43NTcuNzE4IDEuMzI0IDEuMTAzIDEuNjkuMzgyLjM2NC43MzIuNTAxIDEuMDQuNTAxLjMwOCAwIC42NTgtLjEzNyAxLjA0LS41LjM4NS0uMzY3Ljc2Ny0uOTM0IDEuMTAzLTEuNjkuMzIxLS43MjMuNTg4LTEuNTkuNzgtMi41Nkg5LjA3NmMuMTkyLjk3LjQ1OSAxLjgzNy43OCAyLjU2Wk04Ljc1IDEyYzAgLjY5MS4wMzYgMS4zNi4xMDMgMmg2LjI5NGMuMDY3LS42NC4xMDMtMS4zMDkuMTAzLTIgMC0uNjkxLS4wMzYtMS4zNi0uMTAzLTJIOC44NTNjLS4wNjcuNjQtLjEwMyAxLjMwOS0uMTAzIDJabS0xLjQwNS0ySDMuNzM3YTguNTIyIDguNTIyIDAgMCAwLS4yMzcgMmMwIC42ODkuMDgyIDEuMzU5LjIzNyAyaDMuNjA4YTIwLjc1IDIwLjc1IDAgMCAxIDAtNFptMS43MzItMS41aDUuODQ1Yy0uMTktLjk3LS40NTgtMS44MzctLjc3OS0yLjU2LS4zMzYtLjc1Ni0uNzE4LTEuMzIzLTEuMTAzLTEuNjktLjM4Mi0uMzYzLS43MzItLjUtMS4wNC0uNS0uMzA4IDAtLjY1OC4xMzctMS4wNC41LS4zODUuMzY3LS43NjcuOTM0LTEuMTAzIDEuNjktLjMyMS43MjMtLjU4OCAxLjU5LS43OCAyLjU2Wm03LjU3NyAxLjVhMjAuNzI4IDIwLjcyOCAwIDAgMSAwIDRoMy42MWE4LjUyIDguNTIgMCAwIDAgLjIzNi0yIDguNTIgOC41MiAwIDAgMC0uMjM3LTJoLTMuNjA5Wm0zLjA5NC0xLjVhOC41MjYgOC41MjYgMCAwIDAtNS4wMDItNC41NDdjLjI4Ny40MDguNTQzLjg3My43NjggMS4zNzguNDA0LjkxLjcyMiAxLjk4NS45MzUgMy4xNjloMy4zWm0tMTIuMTk3IDBjLjIxMy0xLjE4NC41MzEtMi4yNi45MzUtMy4xNjkuMjI1LS41MDUuNDgtLjk3Ljc2OC0xLjM3OEE4LjUyNiA4LjUyNiAwIDAgMCA0LjI1MiA4LjVoMy4zWm03Ljk2MyAxMC4xNjljLS4yMjUuNTA1LS40OC45Ny0uNzY4IDEuMzc4YTguNTI2IDguNTI2IDAgMCAwIDUuMDAyLTQuNTQ3aC0zLjNjLS4yMTIgMS4xODQtLjUzIDIuMjYtLjkzNCAzLjE2OVoiLz48L3N2Zz4=" alt="English Language" />
            <div className="ml-3">
              <li className="">United States</li>
              <p className="text-xs">English</p>
            </div>
          </div>

          <div className=" flex  h-20 pl-8 items-center">
            <img className=" h-7" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tcGVyc29uIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIgMkM2LjQ3NyAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyek02Ljg1OCAxOC43NTJjLjYwNS0xLjg2OCAyLjcyMi0zLjI0IDUuMTQyLTMuMjQgMi40MiAwIDQuNTM3IDEuMzcyIDUuMTQyIDMuMjRDMTUuNzEyIDE5Ljg0NCAxMy45MzMgMjAuNSAxMiAyMC41cy0zLjcxMi0uNjU2LTUuMTQyLTEuNzQ4em0xMS40NjktMS4wOTVjLTEuMDItMi4xNjUtMy40ODMtMy42NDUtNi4zMjctMy42NDVzLTUuMzA3IDEuNDgtNi4zMjcgMy42NDVBOC40NTYgOC40NTYgMCAwIDEgMy41IDEyYzAtNC42ODcgMy44MTMtOC41IDguNS04LjUgNC42ODcgMCA4LjUgMy44MTMgOC41IDguNWE4LjQ1NiA4LjQ1NiAwIDAgMS0yLjE3MyA1LjY1N3pNMTIgNmEzLjUgMy41IDAgMSAwIDAgNyAzLjUgMy41IDAgMCAwIDAtN3ptMCA1LjVjLTEuMTAzIDAtMi0uODk3LTItMnMuODk3LTIgMi0yIDIgLjg5NyAyIDItLjg5NyAyLTIgMnoiLz48L3N2Zz4=" alt="Account" />
            <div className="ml-3">
              <li>Account</li>
              <p className="text-xs">English</p>
            </div>
          </div>        
          </ul>
      </div>
    </>
  );
};

export default Dropdown;
