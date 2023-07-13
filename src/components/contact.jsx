import React from "react"

export default function contact() {
  return (
    <div className="col-md-12 contact-form">
      <div className="contact col-md-12 d-flex justify-content-end align-items-center min-vh-100">
        <div className="second-container"></div>
        <form className="form-data">
        <h2 className="text-center h2-content">Contact Form</h2>
          <div class="form-row">
            
            <div class="form-group col-md-12">
              <label for="inputEmail4">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="enter the name"
              />
            </div>
            <div class="form-group col-md-12">
              <label for="inputPassword4">number</label>
              <input
                type="len"
                class="form-control"
                id="inputPassword4"
                placeholder="enter the number"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="enter the address"
            />
          </div>
         
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" placeholder="enter the city" />
            </div>
            
          </div>
          <button type="submit" class="btn btn-primary long-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
