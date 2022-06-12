import React from "react";

function CardBasic({ title, subtitle, text, disable, children }) {
    const DisabledLayout = () => {
        return (
            <React.Fragment>
                <div className="opacity-25 bg-dark w-100 h-100 position-absolute d-flex justify-content-center align-items-center"></div>
            </React.Fragment>
        );
    }

    return (
        <div className="card impuestos__card overflow-hidden text-disabled">
            {disable ? <DisabledLayout /> : null}
            <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{text}</p>
                {children}
            </div>
        </div>
    );
}

export default CardBasic;