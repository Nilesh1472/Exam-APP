import { useNavigate } from 'react-router-dom';
import './App.css';
const Register=()=>{  
  const navigate = useNavigate()
  const gotobasic=()=>{
    navigate("/basic")
  }
    return(
        <div className='container-fluid'>
           <h1 className='h3'>Registration Form</h1>
        <div className="row">
             <div className="col-sm-6">             
                <img src="Aptitute-Test.png" 
     style={{ width: 600 ,height: 500}}/>
     </div>
        <div className="col-sm-6">
        <div className='regis'>      
        <form>
        <div className="container">
  <div className="row justify-content-left align-items-left ">
    <div className="col-12 col-lg-9 col-xl-7">
      <div
        className="card-registration"        
      >
         <h6 className='h5'>All fields are necessary</h6> 
        <div className="card">       
          <form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                <label className="form-label" htmlFor="firstName">
                     Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg"
                 
                  />                
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                <label className="form-label" htmlFor="lastName">
                    Mobile No
                  </label>
                  <input
                    type="number"
                    id="mobile"
                    className="form-control form-control-lg"
                  
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <div className="form-outline datepicker w-100">
                <label htmlFor="education" className="form-label">
                    Education
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="education"
                   
                  />                
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">Gender: </label>
                <div className="form-check form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="femaleGender"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="femaleGender">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="maleGender"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="maleGender">
                    Male
                  </label>
                </div>
                <div className="form-check form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="otherGender"
                    defaultValue="option3"
                  />
                  <label className="form-check-label" htmlFor="otherGender">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                <label className="form-label" htmlFor="emailAddress">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    className="form-control form-control-lg"
                    
                  />               
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                <label className="form-label" htmlFor="lastName">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form-control form-control-lg"
                   
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                </div>
              </div>
            </div>
            <div className="row">              
            </div>          
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
 <button type="submit" className="btn btn-dark" onClick={gotobasic}>
    Next <i class="fa-solid fa-right-long"></i>
  </button>
</form>
</div>
        </div>
        </div>
        </div>       
    )  
}
export default Register;