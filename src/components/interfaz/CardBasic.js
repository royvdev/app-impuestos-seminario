import React from "react";

function CardBasic({ title, subtitle, text, disable, className, animate, children }) {

    let defaultClasses = "card overflow-hidden text-disabled ";
    if(animate){
        defaultClasses = defaultClasses + "card-animated ";
    }

    const DisabledLayout = () => {
        return (
            <React.Fragment>
                <div className="opacity-25 bg-dark w-100 h-100 position-absolute d-flex justify-content-center align-items-center"></div>
            </React.Fragment>
        );
    }

    return (
        <div className={defaultClasses + className}>
            {disable ? <DisabledLayout /> : null}
            <div className="card-body d-flex flex-column justify-content-between h-100">
                {title ? <h5 className="card-title fw-bold">{title}</h5> : null}
                {subtitle ? <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6> : null}
                {text ? <p className="card-text">{text}</p> : null}
                {children}
            </div>
        </div>
    );
}

export default CardBasic;