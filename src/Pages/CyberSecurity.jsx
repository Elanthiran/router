import Card from "./Card"

const CyberSecurity = ({data }) => {
    const cyber=data.filter((item)=>item.head==="Cyber security")
  return (
    <div className="container">
        <div className="row d-flex py-5">
        {
            cyber.map((item,index)=>
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

export default CyberSecurity