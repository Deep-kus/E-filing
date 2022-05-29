import react from "react";
import "./Gstprogress.css";
import form from "./apform.png";

export default function Gstprogress() {

    return (<>
        <div className="progress_container">
            <div className="pimg"><img src={form} alt="" /></div>
            <div className="pform">
                <div className="pro_head"><h2>Track Your Application</h2></div>

                <div className="progress_child">
                <input type="text" placeholder="FIRST NAME" value="Pranay" className="gstfname" />  <input type="text" placeholder="LAST NAME" value="Shukla" className="gstfname1" /> <br />

                <section className="step_wizard">
                    <ul className="step_wizard_list" >
                        <li className="step_wizard_item">
                            <span className="progress_count">1</span>
                            <span className="progress_label">Application submitted Succesfully</span>
                        </li>

                        <li className="step_wizard_item  ">
                            <span className="progress_count ">2</span>
                            <span className="progress_label">Application view by Expert</span>
                        </li>

                        <li className="step_wizard_item ">
                            <span className="progress_count">3</span>
                            <span className="progress_label">Approved by Expert</span>
                        </li>

                        <li className="step_wizard_item current_item">
                            <span className="progress_count ">4</span>
                            <span className="progress_label">Final submitted</span>
                        </li>

                    </ul>


                </section>
                </div>
            </div>
        </div>
    </>)
}