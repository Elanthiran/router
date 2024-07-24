
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row d-flex py-5">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default All;