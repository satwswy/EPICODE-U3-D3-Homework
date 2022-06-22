import SingleBook from "./SingleBook";

const BookList = ({books}) => {
    return(
        <div>
            {books.map((current)=>{
                return <SingleBook book={current}/>
            })}
        </div>
    )
}
export default BookList