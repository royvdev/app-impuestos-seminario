import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "../../components/LocalStorageManager";

export default function SeleccionarPeriodoScreen() {

    // const handleChangePeriodo = (data) => {
    //   setImpuestoData({
    //     periodo: data.target.value
    //   });
    // }

    const navigate = useNavigate();

    const dateList = [
        {
            id: 0, year: 2022, months: [
                { num: 12, name: "Diciembre", status: "noCompletado" },
                { num: 11, name: "Noviembre", status: "noCompletado" },
                { num: 10, name: "Octubre", status: "noCompletado" },
                { num: 9, name: "Septiembre", status: "noCompletado" },
                { num: 8, name: "Agosto", status: "noCompletado" },
                { num: 7, name: "Julio", status: "porVencer" },
                { num: 6, name: "Junio", status: "completado" },
                { num: 5, name: "Mayo", status: "completado" },
                { num: 4, name: "Abril", status: "completado" },
                { num: 3, name: "Marzo", status: "completado" },
                { num: 2, name: "Febrero", status: "completado" },
                { num: 1, name: "Enero", status: "completado" }]
        },

        {
            id: 1, year: 2021, months: [{ num: 12, name: "Diciembre", status: "completado" },
            { num: 11, name: "Noviembre", status: "completado" },
            { num: 10, name: "Octubre", status: "completado" },
            { num: 9, name: "Septiembre", status: "completado" },
            { num: 8, name: "Agosto", status: "completado" },
            { num: 7, name: "Julio", status: "completado" },
            { num: 6, name: "Junio", status: "completado" },
            { num: 5, name: "Mayo", status: "completado" },
            { num: 4, name: "Abril", status: "completado" },
            { num: 3, name: "Marzo", status: "completado" },
            { num: 2, name: "Febrero", status: "completado" },
            { num: 1, name: "Enero", status: "completado" }]
        },

        {
            id: 2, year: 2020, months: [{ num: 12, name: "Diciembre", status: "completado" },
            { num: 11, name: "Noviembre", status: "completado" },
            { num: 10, name: "Octubre", status: "completado" },
            { num: 9, name: "Septiembre", status: "completado" },
            { num: 8, name: "Agosto", status: "completado" },
            { num: 7, name: "Julio", status: "completado" },
            { num: 6, name: "Junio", status: "completado" },
            { num: 5, name: "Mayo", status: "completado" },
            { num: 4, name: "Abril", status: "completado" },
            { num: 3, name: "Marzo", status: "completado" },
            { num: 2, name: "Febrero", status: "completado" },
            { num: 1, name: "Enero", status: "completado" }]
        },

        {
            id: 3, year: 2019, months: [{ num: 12, name: "Diciembre", status: "noCompletado" },
            { num: 11, name: "Noviembre", status: "noCompletado" },
            { num: 10, name: "Octubre", status: "noCompletado" },
            { num: 9, name: "Septiembre", status: "noCompletado" },
            { num: 8, name: "Agosto", status: "noCompletado" },
            { num: 7, name: "Julio", status: "noCompletado" },
            { num: 6, name: "Junio", status: "completado" },
            { num: 5, name: "Mayo", status: "completado" },
            { num: 4, name: "Abril", status: "completado" },
            { num: 3, name: "Marzo", status: "completado" },
            { num: 2, name: "Febrero", status: "completado" },
            { num: 1, name: "Enero", status: "completado" }]
        },
    ];

    const handleYearClick = (date) => {
        for (let i = 1; i <= 12; i++) {
            const month = document.getElementById("month-" + i);
            month.className = 'periodo-row row ' + date.months[12 - i].status;
        }
        saveDataToLocalStorage("selectedYear", date.year);
    };

    const handleMonthClick = (month) => {
        saveDataToLocalStorage("selectedMonth", month);
        navigate("/impuestos/IIBB/facturacion");
    };

    const yearList = [];
    const monthList = [];

    dateList.forEach((date) => {
        yearList.push(<li className="periodo-row row year" onClick={() => handleYearClick(date)}>{date.year}</li>)
    });

    dateList[0].months.forEach((month) => {
        monthList.push(<li id={"month-" + month.num} className={"periodo-row row " + month.status} onClick={() => handleMonthClick(month.num)}>{month.name}</li>)
    });

    return (
        <React.Fragment>
            <h2>Seleccione un periodo</h2>
            <div className="datePicker">
                <div className="yearSelector">
                    <ul>
                        {yearList}
                    </ul>
                </div>
                <div className="monthSelector">
                    <ul>
                        {monthList}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}