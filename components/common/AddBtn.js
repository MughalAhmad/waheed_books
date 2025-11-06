import Link from "next/link"
const AddBtn = ({btnText='click', url="#"}) => {
  return (
    <Link href={url} className="bg-[#66D991] flex py-3 gap-3 cursor-pointer justify-center items-center px-4 rounded-lg w-24">
        <div className="text-white text-base font-semibold">{btnText}</div>
        <img src="/svg/plus.svg" />
    </Link>
  )
}

export default AddBtn