import Swal from 'sweetalert2'

const AddCoffee = () => {

const handleAddCoffee=event=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const quantity=form.quantity.value;
  const supplier=form.name.value;
  const taste=form.taste.value;
  const category=form.category.value;
  const details=form.details.value;
  const photo=form.photo.value;

  const newCoffee={name, quantity, supplier, taste, category, details, photo};
  console.log(newCoffee);

  // send data to server
  fetch('http://localhost:5000/coffee', {
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newCoffee)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId
      ){
      Swal.fire({
        title: 'Success!',
        text: 'Item Added',
        icon: 'success',
        confirmButtonText: 'Close'
      })
    }
    form.reset();
  })
}

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-rancho font-extrabold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row 1*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 2 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 3 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 4 */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] font-rancho border-2 border-bg-[#331A15]"/>
      </form>
    </div>
  );
};

export default AddCoffee;
