import Link from "next/link";
import Image from "next/image";

export default function Cities() {
  return (
    <div className="w-full px-4 py-2 grid grid-flow-row grid-cols-2 justify-center items-center m-8">
      <div className="col-span-1 flex justify-center items-center">
        <div className="relative w-96 h-96 group">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image 
              src="/Dallas.png" 
              alt="Dallas"
              className="w-full h-full object-cover rounded-2xl opacity-85 transition-all duration-300 group-hover:blur-sm group-hover:opacity-60"
              width={384}
              height={384}
            />
          </div>
          <div className="relative flex justify-center items-center h-full">
            <p className="text-4xl text-center z-10 text-white">Dallas</p>
          </div>
        </div>
      </div>
      /**
      <div className="col-span-1 flex justify-center items-center">
        <div className="relative w-96 h-96 group">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image 
              src="/Seattle.png" 
              alt="Seattle"
              className="w-full h-full object-cover rounded-2xl opacity-85 transition-all duration-300 group-hover:blur-sm group-hover:opacity-60"
              width={384}
              height={384}
            />
          </div>
          <div className="relative flex justify-center items-center h-full">
            <p className="text-4xl text-center z-10 text-white">Seattle</p>
          </div>
        </div>
      </div>
       */
    </div>
  )
}