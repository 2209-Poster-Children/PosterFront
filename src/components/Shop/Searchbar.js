import './shop.css'
import { ImSearch } from 'react-icons/im'
import { useOutletContext,Link } from 'react-router-dom'
import { useState } from 'react';

const Searchbar = ({productData}) => {

  const [search,setSearch]=useState("");
  const [searchResults,setSearchResults]=useState([]);
  const [noResults,setNoResults]=useState([""]);

function searchPosts(event){
  event.preventDefault();
  const newArr = productData.filter((product)=>{
    return product.title.toUpperCase().includes(search.toUpperCase())

    
  })
  if (newArr.length>0){
    setSearchResults(newArr);
    setNoResults("")
  }else{
    setNoResults(alert('No Posters Found for ${search}'))
  }
  console.log(newArr)

}


function searchText(event){
  setSearch(event.target.value)
}



  return (
    <div>
      
      <form onSubmit ={searchPosts}>
        
        <select className="search-dropdown">
          <option value="all">All</option>
          <option value="Movies">Movies</option>  
          <option value="music">Music</option>
          <option value="videogames">Video Games</option>
        </select> 

        <input className="search-input" type="text" value = {search} onChange={(event)=>{setSearch(event.target.value)
        }}></input>

        <button className="search-products-bttn" type="submit"><ImSearch /></button>

      </form>


{searchResults&&searchResults.length ? searchResults.map ((product,idx)=>{
    return <div className='product'key={idx}>
      <Link to = {'/shop/${product._id}'}><span className='name-detail'><b>{product.title} </b></span></Link>
      <p><span className='price-detail'>{product.price}</span></p></div>
              }) : <p>{noResults}</p>
              } </div>
              
    )
}


export default Searchbar;