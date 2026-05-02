import LanguagesCard from "./components/Lenguages-Cards";
import languages from "./data/languages";

function App() {
    return <>
        {
            //qui eseguo map che itera su languages e come contenuto delle props vado a metterci i valori che mi servono//
            languages.map(language => {
                const { id, title, description } = language //destructuring
                return <LanguagesCard key={id} titoloBottone={title}
                    descrizioneCard={description} />
            })
        }
    </>
}
export default App;
