import '../styles/ViewID.css'
const ViewID = () => {
    return (
        <section className="viewID-container-big">
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
                    <span>ID No. :</span>
                    <span>2022 0000</span>
                </div>
                <div>
                    <span>Email :</span>
                    <span>Juan Dela Cruz@doh.gov.ph</span>
                </div>
                <div>
                    <span>31 December 2022</span>
                </div>
                <div>
                    <span>This card is valid until</span>
                </div>
            </div>
        </section>
    )
}

export default ViewID;