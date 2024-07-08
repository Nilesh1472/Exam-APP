import './App.css';
import { useNavigate } from 'react-router-dom';
const Basic_Info=()=>{
  const navigate = useNavigate()
  const gotoexam=()=>{
navigate('/exam')
  }
    return(
      <div className='container'>
      <div>
  <h3 className='h3'>Instructions</h3>
</div>
<div>
<ul className='list-group list-group-flush' id='list'>
  <li className="list-group-item">1. Welcome to Online Exam For General Interview Exam. </li>
  <li className="list-group-item">2. Exam has Total 5 Questions.</li>
  <li className="list-group-item">3. Total Time For Exam is 10 Minutes.</li>
  <li className="list-group-item">4. Negative Marking Exam:NO.</li>
  <li className="list-group-item">5. Use of mobile phones not allowed.</li>
  <li className="list-group-item">6. No need of scientific calculator.</li>
</ul>
<h4 className='h4'>Best Of Luck For Your Exam  <i class="fa-solid fa-thumbs-up"></i></h4>
  <button
    type="button"
    className="btn btn-dark"
    data-bs-toggle="modal"
    data-bs-target="#myModal"
  >
    Start Exam
  </button>
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">     
        <div className="modal-header">
          <h4 className="modal-title">About Exam</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">Are you ready Exam is starting </div>       
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-dark"
            data-bs-dismiss="modal"
            onClick={()=>gotoexam()}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
    )
}
export default Basic_Info;