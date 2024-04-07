import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/Home/Book/BooksTable';
import BooksCard from '../components/Home/Book/BooksCard';
import BorrowsTable from '../components/Home/Borrow/BorrowTable';
import BorrowsCard from '../components/Home/Borrow/BorrowCard';


// Navbar Component
const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">AHR Library Management System</div>
                <ul className="text-white flex gap-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="https://181370054.wixsite.com/my-site">About</Link></li>
                    <li><Link to="https://181370054.wixsite.com/my-site">Contact</Link></li>
                    <button className='bg-red-500 rounded p-1 ml-10' type='submit'><Link to="/login">LogOut</Link></button>
                </ul>
            </div>
        </nav>
    );
};


// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            <div className="container mx-auto">
                &copy; 2024 AHR Library Management System. All rights reserved.
            </div>
        </footer>
    );
};

// Home Component
const Home = () => {
    const [books, setBooks] = useState([]);
    const [borrows, setBorrows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');


    const handleSearch = async () => {
        if (searchTerm.trim() === '') {
            // If the search term is empty, fetch all books
            setLoading(true);
            axios
                .get('http://localhost:5000/books')
                .then((response) => {
                    setBooks(response.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        } else {
            setLoading(true);
            axios
                .get(`http://localhost:5000/search/?title=${name.replace(/ /g, "+")}`)
                .then((response) => {
                    setBooks(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5000/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5000/borrows')
            .then((response) => {
                setBorrows(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Include the Navbar */}
            <Navbar />

            <div className='p-4 flex-grow'>

                <div className='flex justify-center items-center gap-x-4'>
                    <h1 className='text-xl'>Show All Books in :</h1>
                    <button className=' bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                        onClick={() => setShowType('table')}>
                        Table
                    </button>
                    <button className=' bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                        onClick={() => setShowType('card')}>
                        Card
                    </button>
                </div>
                <div className="flex justify-center items-center my-4">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={books.title}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                        className="ml-2 bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                        onClick={handleSearch}
                    >
                        Search Available Books
                    </button>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Books List</h1>
                    <Link to='/books/create'>
                        <MdOutlineAddBox className=' text-sky-800 text-4xl' />
                    </Link>
                </div>
                {loading ? (
                    <Spinner />
                ) : showType === 'table' ? (
                    <BooksTable books={books} />
                ) : (
                    <BooksCard books={books} />
                )}
            </div>
            <div className='p-4 flex-grow'>

                <div className='flex justify-center items-center gap-x-4'>
                    <h1 className='text-xl'>Show All Borrowers in :</h1>
                    <button className=' bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                        onClick={() => setShowType('table')}>
                        Table
                    </button>
                    <button className=' bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                        onClick={() => setShowType('card')}>
                        Card
                    </button>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Borrowers List</h1>

                </div>
                {loading ? (
                    <Spinner />
                ) : showType === 'table' ? (
                    <BorrowsTable borrows={borrows} />

                ) : (
                    <BorrowsCard borrows={borrows} />
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Home;
