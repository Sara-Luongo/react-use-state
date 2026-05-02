import { useState } from "react"; //hooks (tutti gli use state vengono chiamate hooks)


function LanguagesCard({ titoloBottone = 'titolo default',
    descrizioneCard = 'descrizione di default' }) {
    const [open, setOpen] = useState(false);

    //==================================//
    //----soluzione con condizioni if-- //
    //==================================//
    // let btnClass = '';              //
    //let contenutoCard = '';         //
    // if (open) {                    //
    // btnClass = 'btn-warning';      //
    //contenutoCard = descrizioneCard;//
    //  } else {                      //
    // btnClass = 'btn-primary'       //
    //};=============================//

    //==============================================//
    //------------soluzione ternaria----------------//
    //==============================================//
    const btnClass = open ? 'btn-warning' : 'btn-primary' //il ? è come un if i ":" altrimenti
    const contenutoCard = open ? descrizioneCard : ''

    const clickState = (event) => {  // funzione che aggiorna lo stato iniziale delle condizioni al click
        setOpen(!open)
    }

    return <>
        <div className="card">
            <div className="card-body">
                <button onClick={clickState} className={`btn ${btnClass}`}>{titoloBottone}</button>
                <p>{contenutoCard}</p>
            </div>
        </div>
    </>
}
export default LanguagesCard;