import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react'

import '../styles/ViewID.css'
const ViewID = () => {
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    return (
        <>
            <button className="print-button"
                onClick={handlePrint}>Print</button>
            <section className="main" ref={printRef}>
                <section className="viewID-container-front">
                    <div className="id-header">
                        <div className="doh-logo-container">
                            <img src="https://i.ibb.co/QKVmy0K/doh-logo.png" />
                        </div>
                        <div className="doh-info-container">
                            <span>Republic of the Philippines</span>
                            <span>Department of Health</span>
                            <span>Baguio General Hospital Compound, Baguio City, Philippines</span>
                        </div>
                    </div>

                    <div className="id-body">
                        <div className="employee-image-container">
                            <img src="https://i.ibb.co/bQkdH3X/IMG-20230513-123417.jpg" />
                        </div>
                    </div>
                    <div className="id-footer">
                        {/* <div>Ramelito Second N. Martinez Jr</div> */}
                        <div>Juan Dela Cruz</div>
                        <div>
                            <span>ID No :</span>
                            <span>2022 0000</span>
                        </div>
                        <div>
                            <span>Email :</span>
                            <span>JuanDelaCruz197@gmail.com</span>
                        </div>
                        <div>
                            <span>31 December 2022</span>
                        </div>
                        <div>
                            <span>This card is valid until</span>
                        </div>
                    </div>
                </section>

                <section className="viewID-container-back">
                    {/* 1st */}
                    <div>
                        <div>
                            <span>PHILHEALTH NUMBER</span>
                            <span>EDIT TEXT</span>
                        </div>
                        <div>
                            <span>TIN</span>
                            <span>EDIT TEXT</span>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div>
                        <div>
                            <span>BLOOD TYPE</span>
                            <span>EDIT TEXT</span>
                        </div>
                        <div>
                            <span>DATE OF BIRTH</span>
                            <span>EDIT TEXT</span>
                        </div>
                    </div>

                    {/* 3rd */}
                    <div>
                        <span>HOME ADDRESS</span>
                        <span>EDIT TEXT</span>
                    </div>

                    {/* 4th */}
                    <div>
                        <span>PERSON TO CONTACT IN CASE OF EMERGENCY</span>
                        <div>
                            <span>NAME</span>
                            <span>EDIT TEXT</span>
                        </div>
                        <div>
                            <span>ADDRESS</span>
                            <span>EDIT TEXT</span>
                        </div>
                        <div>
                            <span>CONTACT NO. :</span>
                            <span>EDIT TEXT</span>
                        </div>
                    </div>

                    {/* 5th */}
                    <div>
                        <span>I give my consent to donate</span>
                        <div>
                            <input type="checkbox" />
                            <span>ANY ORGAN</span>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>SPECIFIC ORGAN</span>
                        </div>
                    </div>

                    {/* 6th */}
                    <div>
                        <div>
                            <hr />
                        </div>
                        <div>
                            SIGNATURE OF EMPLOYEE
                        </div>
                    </div>

                    {/* 7th */}
                    <div>
                        <p>
                            This card is non-transferable. If lost/found, report/send
                            immediately to the Personnel Administration Division,
                            Administration Service, Baguio General Hospital Compound,
                            Department of Health, Baguio City, Benguet, Philippines.
                        </p>
                    </div>

                    {/* 8th */}
                    <div>
                        <div>
                            <hr />
                        </div>
                        <div>
                            SECRETARY OF HEALTH
                        </div>
                    </div>
                </section>

            </section>
        </>

    )
}

export default ViewID;