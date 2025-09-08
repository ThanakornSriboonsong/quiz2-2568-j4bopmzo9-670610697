// import { useState } from "react";
// import {
//   Modal,
//   TextInput,
//   NumberInput,
//   Select,
//   Button,
//   Stack,
// } from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({}: AddFoodModalProps) {
  // const [name, setName] = useState<string>("");
  // const [nameError, setNameError] = useState(false);

  // const [price, setPrice] = useState<number | string>(0);
  // const [priceError, setPriceError] = useState(false);

  // const [quantity, setQuantity] = useState<number | string>(0);
  // const [quantityError , setQuantityError] = useState(false);

  // const [category, setCategory] = useState<string | null>(null);
  // const [categoryError , setCategoryError] = useState(false);

  // const handleSubmit = () => {
  //   if(name && price && quantity && category){
  //     const newfood = {
  //       name,
  //       price,
  //       quantity,
  //       category,
  //     };
  //     onAdd(newfood);
  //     setName("");

  //     };
    
  // };
  // const nameOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setNameError(true);
  //   setName(event.target.value);
  // };
  // const priceOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setPriceError(true);
  //   if(price == 0)setPriceError(false);
  //   setPrice(event.target.value) ;
  // };
  // const quantityOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setQuantityError(true);
  //   if(quantity == 0)setQuantityError(false);
  //   setQuantity(event.target.value);
  // }
  // const categoryOnchange = (event: React.ChangeEvent<HTMLInputElement>)=>{
  //   setCategoryError(true);
  //   setCategory(event.target.value);
  // }
  // const calTotal = () => {
  //   let total = 0 ;
  //   let Price = Number(price) ;
  //   let Quantity = Number(quantity) ;
   
  //   total += Price * Quantity;
  //   return total ;
  // }
  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  // let val_number: number = Number("500.0");
  // console.log(val_number + 100); // 600.0

  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Add an item</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex gap-2">
              <div>
                <label className="form-label">Name of item</label>
                <input
                  className={"form-control" + (fnameError ? " is-invalid" : "")}
                  onChange={inputFnameOnChange}
                  value={fname}
                />
                <div className="invalid-feedback">Name of item is required</div>
              </div>
              <div>
                <label className="form-label">Price per dish</label>
                <input
                  className={"form-control" + (lnameError ? " is-invalid": "" )}
                  onChange={inputLnameOnChange}
                  value={lname}
                />
                <div className="invalid-feedback">Price per dish is required</div>
              </div>
            </div>

            {/* Running Plan */}
            <div className="mt-2">
              <label className="form-label" >Quantity</label>
              <select
                className={"form-select" + (planError ? " is-invalid" : "")}
                onChange={selectPlanOnChange}
                value={plan}
              >
                <option value="">Please select..</option>
                <option value="funrun">Fun run 5.5 Km (500 THB)</option>
                <option value="mini">Mini Marathon 10 Km (800 THB)</option>
                <option value="half">Half Marathon 21 Km (1,200 THB)</option>
                <option value="full">
                  Full Marathon 42.195 Km (1,500 THB)
                </option>
              </select>
              <div className="invalid-feedback">Please select a Plan</div>
            </div>

            {/* Gender */}
            <div className="mt-2" >
              <label className="form-label">Gender</label>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="radio"
                  onChange={radioGenderMaleOnChange}
                  checked={gender === "male"}
                />
                Male 👨
                <input
                  className="mx-2 form-check-input"
                  type="radio"
                  onChange={radioGenderFemaleOnChange}
                  checked={gender === "female"}
                />
                Female 👩
                {/* To show error when user did not select gender, */}
                {/* We just have to render the div below (Not using is-invalid bootstrap class) */}
                {/* <div className="text-danger">Please select gender</div> */}
                
              </div>
              {genderError && <div className="text-danger">Please select gender</div>}
            </div>

            {/* Extra Items */}
            <div className="mt-2">
              <label className="form-label">Extra Item(s)</label>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyBottleOnChange}
                  checked={buyBottle}
                />
                <label className="form-check-label">Bottle 🍼 (200 THB)</label>
              </div>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyShoesOnChange}
                  checked={buyShoes}
                />
                <label className="form-check-label">Shoes 👟 (600 THB)</label>
              </div>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyCapOnChange}
                  checked={buyCap}
                />
                <label className="form-check-label">Cap 🧢 (400 THB)</label>
              </div>
               <span className={"text-success d-block" + (buyBottle&&buyCap&&buyShoes ? "" : " d-none")}>(20% Discounted)</span>
            </div>

            <div className="alert alert-primary mt-3" role="alert">
              Promotion📢 Buy all items to get 20% Discount
            </div>

            {/* Total Payment */}
            <div>
              Total Payment : {computeTotalPayment().toLocaleString()} THB
              {/* Render below element conditionally when user get 20% discount */}
              {/* <span className="text-success d-block">(20% Discounted)</span> */}
            </div>
          </div>
          <div className="modal-footer">
            {/* Terms and conditions */}
            <div>
              <input className="me-2 form-check-input" type="checkbox" onChange={() => setagreeError(!agreeError)}/>I agree
              to the terms and conditions
            </div>
            {/* Register Button */}
            <button
              className="btn btn-success my-2"
              onClick={registerBtnOnClick}
              //You can embbed a state like below to disabled the button
              //disabled={isUserAgreed}
              disabled = {agreeError}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
