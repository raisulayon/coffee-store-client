import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDeleteBtn=_id=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/coffee/${_id}`, {
            method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          
          })
        }
      })
  }

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full p-4">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Chef: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <button className="btn join-item ">View</button>
              <button className="btn join-item">Edit</button>
              <button 
              onClick={()=>handleDeleteBtn(_id)}
              className="btn hover:bg-red-400 bg-red-600 text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
