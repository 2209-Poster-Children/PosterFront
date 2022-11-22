import './shop.css'
import { ImSearch } from 'react-icons/im'

const Searchbar = () => {
  return (
    <div>
      <form>
        
        <select>
          <option value="all">All</option>
          <option value="Movies">Movies</option>  
          <option value="music">Music</option>
          <option value="videogames">Video Games</option>
        </select> 

        <input type="text"></input>

        <button type="submit"><ImSearch /></button>

      </form>
    </div>
  )
}

export default Searchbar;