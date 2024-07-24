

const Card = ({item}) => {
    return(
        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
<div className="card h-100 ">
    <img src={item.image}  className="card-img-top size mb-2" alt="" />
    <div className="card-body my-3">
        <h5 className="card-title">{item.head}</h5>
        <h5  className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="text-primary">Read More »</p>
    </div>

</div>
</div>

        
      );
}

export default Card;