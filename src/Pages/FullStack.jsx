import Card from "./Card"

const FullStack = ({data }) => {
    const full=data.filter((item)=>item.head==="Full Stack")
  return (
    <div className="container">
        <div className="row d-flex py-5">
        {
            full.map((item,index)=>
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

export default FullStack