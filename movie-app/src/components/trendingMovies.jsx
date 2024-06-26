import { useEffect, useState } from "react"
import Moviecard from "./moviecard"
import axios from "axios"
import Pagination from "./pagination"
import { useContext } from "react"
import { Moviecontext } from "./moviecontext"


export default function Trendingmovies(

                            //  {  pageNo,
                            //   setPageNo,
                            //    WatchList,
                            //   setWatchList,
                            //     handleaddWL,
                            //     handleremoveWL }
){
  const [movies, setMovies] = useState([])
  

   const  { pageNo }  = useContext(Moviecontext)
    // function handlepagenodec(){
    //     if(pageNo > 1) setPageNo(pageNo-1)
    // }

    // function handlepagenoInc(){
    //   setPageNo(pageNo+1);

    // }

    
    

  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce&page=${pageNo}`)
       
       .then((response)=>{
          let moviesarray = response.data.results
           setMovies(moviesarray);
       })
  },[pageNo])


 if(movies.length===0){
    return<>...loading</>
 }

return(
        <>
        <div className="text-center font-bold text-2xl	 mt-9 ">Trending Movies</div>
        <div className="flex flex-wrap	p-4 gap-6 justify-around ">

         { movies.map((movieObj)=>{
           return <Moviecard
           key={movieObj.id}
           movieObj={movieObj}
           title = {movieObj.title}
           posterpath = {movieObj.poster_path}
          

         
           />
         })}

        

        </div>

        <Pagination/>
        </>
    )
    }