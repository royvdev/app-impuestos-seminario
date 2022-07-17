import CardBasic from '../components/interfaz/CardBasic';
import './HomeScreen.css'

function HomeScreen(params) {
    return (
        <div id="HomeScreen">
            <article className='mb-5'>
                <h2>Impuestos recientes</h2>
                <hr />
                <ul className='d-flex flex-wrap'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022" animate={true}>
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022" animate={true}>
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022" animate={true}>
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022" animate={true}>
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                </ul>
            </article>
            <article className='mb-5'>
                <h2>Proximos vencimientos</h2>
                <hr />
                <ul className='d-flex flex-wrap'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022" animate={true}>
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                </ul>
            </article>
        </div>
    );
}

export default HomeScreen;