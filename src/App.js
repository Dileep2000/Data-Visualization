import './App.css';
import  Card from '../src/components/Card/index'
import {useEffect,useState} from 'react';
import axios from 'axios';
import Filters from '../src/components/Filters/index'

function App() {
  const [data,setData] = useState([])
  const [backup,setBackup] = useState([])
  const [categories,setCategories] = useState([]);
  const fetchdata = async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products")
    setData(res.data)
    setBackup(res.data)
    let cat = []
    let i = 0
    res.data.forEach((value)=> {
      if(cat.indexOf(value.category) === -1){
          cat[i] = value.category
          i++
      }
    })
    setCategories(cat)
  }
  useEffect (()=>{
    fetchdata()
  },[])
  const customSortPrice = (a,b) => {
    return a.price-b.price
  }
  const customSortRating = (a,b) => {
    return a.rating.rate-b.rating.rate
  }
  const customSortAlpha = (a,b) => {
    if(a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    }
    return 0
  }
  const filter = (sortBy,filterBy) => {
    var copy_data = [...backup]
    if(filterBy.length > 0 ) {
      copy_data = copy_data.filter((value) => {
        return filterBy.includes(value.category)
      })
    }
    if(sortBy != "") {
      switch(sortBy) {
        case "pricedesc":
          copy_data = copy_data.sort(customSortPrice)
          copy_data = copy_data.reverse()
          break
        case "priceaesc":
          copy_data.sort(customSortPrice)
          break
        case "ratingdesc":
          copy_data.sort(customSortRating)
          copy_data.reverse()
          break
        case "ratingaesc":
          copy_data.sort(customSortRating)
          break
        case "alphdaesc":
          copy_data.sort(customSortAlpha)
          copy_data.reverse()
          break
        case "alphaaesc":
          copy_data.sort(customSortAlpha)
          break
      }
    }
    setData(copy_data)
  }
  return (
    <div className="App">
      <div className="row">
      <div className='col-12'>
        <Filters categories={categories} filter={filter}></Filters>
      </div>
      </div>
      <div className="row">
        {
          data.map((value)=>{
            return (
              <div className='col-12 card-sizing'>
                <Card key={value.id} data={value}></Card>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
