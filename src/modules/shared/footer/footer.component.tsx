import { Link } from "react-router-dom"

const FooterComponent = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-white bg-black">
      <p className="text-3xl font-DM">Travelkong</p>
      <div className="inline-block w-1/3 py-4 ml-1 text-center">
        <span className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 underline ">
        <Link to={"/"}>Twitter</Link>
        <Link to={"/"}>Facebook</Link>
        <Link to={"/"}>Instagram</Link>
      </div>
      <div className="py-4 text-center">
        <span className="text-sm font-bold">
          &#169; 2025 Travelkong. <br />
          All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default FooterComponent
