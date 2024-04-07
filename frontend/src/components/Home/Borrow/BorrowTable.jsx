import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const BorrowsTable = ({ borrows }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Book ID</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>name</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Phone Number</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Issue Date</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Return Date</th>
                    <th className='border border-slate-600 rounded-md'>Operations</th>

                </tr>
            </thead>
            <tbody>
                {borrows.map((borrow, index) => (
                    <tr key={borrow._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {borrow.bookId}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {borrow.name}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {borrow.phoneNumber}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {borrow.issueDate}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {borrow.returnDate}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/borrows/details/${borrow._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800' />
                                </Link>
                                <Link to={`/borrows/edit/${borrow._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-800' />
                                </Link>
                                <Link to={`/borrows/delete/${borrow._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-800' />
                                </Link>
                            </div>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BorrowsTable