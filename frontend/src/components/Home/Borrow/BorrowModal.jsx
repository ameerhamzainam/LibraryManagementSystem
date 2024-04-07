import { AiOutlineAccountBook, AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"



const BorrowModal = ({ borrow, onClose }) => {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()} className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">
                <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose} />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {borrow.issueDate}
                </h2>
                <h4 className='my-2 text-gray-500'>{borrow._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{borrow.name}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{borrow.phoneNumber}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{borrow.returnDate}</h2>
                </div>
                <p className="mt-4">Anything You want to show</p>
                <p className="my-2">A good example of a paragraph contains a topic sentence, details and a conclusion.
                    'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north.
                    In the jungles, monkeys swing in the trees and elephants walk through the brush.</p>
            </div>

        </div>
    )
}

export default BorrowModal