import Card from "./Card"

const Career = ({data }) => {
    const career=data.filter((item)=>item.head==="Career")
  return (
    <div  className="container">
      <div className="row d-flex py-5">
        {
            career.map((item,index)=>
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

export default Career