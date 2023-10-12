import '../styles/ViewID.css'
const ViewID = () => {
    return (
        <section className="main">

            

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
    )
}

export default ViewID;