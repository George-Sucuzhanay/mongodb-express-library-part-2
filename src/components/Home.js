import axios from 'axios';
import {useState, useEffect} from "react"
import { getAllBooks } from '../services/api-calls';
import SetBooks from './SetBooks';

export default function Home(){
    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        getAllBooks()
        axios.get('http://localhost:3001/books')
        .then(res => setBooksData(res.data))
    }, [])
    console.log(booksData)

    return(
        <div>
            <div>
                Home
            </div>

            <div>
            {(booksData || []).map((booksData, index) => {
             
                return (
                    <SetBooks 
                        isbn={booksData.ISBN} 
                        author={booksData.author} 
                        genres={booksData.genres}
                        imageLink={booksData.imageLink}
                        title={booksData.title}
                        year={booksData.year}
                        key={index} 
                        />    
                )
            })}
            </div>
        </div>
    )
}