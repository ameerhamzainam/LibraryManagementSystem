import React from 'react'
import { useState } from 'react'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useParams } from 'react-router-dom'





const CreateBorrows = () => {

  const [name, setname] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [issueDate, setissueDate] = useState('');
  const [returnDate, setreturnDate] = useState('');
  // const [bookId, setbookId] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {enqueueSnackbar} = useSnackbar();
  const { id } = useParams();
  // setbookId(id)
  const handleSaveBorrow = () => {
    const data = {
      name,
      phoneNumber,
      issueDate,
      returnDate,
      bookId:id
    };
    setLoading(true);
    axios
      .post('http://localhost:5000/borrows', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Borrower Created Successfully', {variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please check Console');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
      });

  };


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Borrower</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className=' text-xl mr-4 text-gray-500'>Book ID</label>
          <input type='text' disabled
            value={id}
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>
        <div className='my-4'>
          <label className=' text-xl mr-4 text-gray-500'>Name</label>
          <input type='text'
            value={name}
            onChange={(e) => setname(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>
        <div className='my-4'>
          <label className=' text-xl mr-4 text-gray-500'>Phone Number</label>
          <input type='text'
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>
        <div className='my-4'>
          <label className=' text-xl mr-4 text-gray-500'>Issue Date</label>
          <input type='date'
            value={issueDate}
            onChange={(e) => setissueDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>
        <div className='my-4'>
          <label className=' text-xl mr-4 text-gray-500'>Return Date</label>
          <input type='date'
            value={returnDate}
            onChange={(e) => setreturnDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBorrow}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBorrows