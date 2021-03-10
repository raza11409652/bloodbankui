const SingleBank = ({data})=>{
  console.log(data);
    return(
      <div  className="card">
         <div className="card-header">{data.number}
          <span className="float-right chip">{data.category}</span>
         </div> 
            <div className="card-body">
              <p className="text-primary">
                {data.name}
              </p>
              <div className="details text-small">
                <p className="mb-0">Website: <a href={data.website} target="_blank">{data.website}</a></p>
                <p className="mb-0">Contact: {data.contactNumber}</p>
                <p className="mb-0">Mobile: {data.mobile}</p>
                <p className="mb-1">Address: {data.address}</p>
                <p className="alert alert-danger">
                 Blood Availablity {data.bloodAvailable}
                </p>
              </div>

            </div>
      </div>
                        
    )
}
export default SingleBank