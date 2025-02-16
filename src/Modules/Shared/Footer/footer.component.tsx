import { Link } from "react-router-dom"

const FooterComponent = (): JSX.Element => {
  return (
    <footer className="bg-black text-white p-4 flex flex-col justify-center items-center">
      <p className="font-DM text-3xl">Travelkong</p>
      <div className="py-4 ml-1 inline-block w-1/3 text-center">
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
      <div className="text-center py-4">
        <span className="text-sm font-bold">
          © 2020-2023 Travelkong. <br />
          All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default FooterComponent
