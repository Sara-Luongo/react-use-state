

function LanguagesCard({ titoloCard = 'titolo default',
    descrizioneCard = 'descrizione di default' }) {
    return <>
        <div className="card">
            <div className="card-body">
                <button className="btn bg-primary">{titoloCard}</button>
                <p>{descrizioneCard}</p>
            </div>
        </div>
    </>
}
export default LanguagesCard;