import Card from "./Card"

const DataScience = ({data }) => {
    const datascience=data.filter((item)=>item.head==="Data science")
  return ( 
    <div className="container">
        <div className="row d-flex py-5">
        {
            datascience.map((item,index)=>
            {
                return(
<Card item={item} key={index} />
                )
            })

        }


    </div>
    </div>
  )
}

export default DataScience