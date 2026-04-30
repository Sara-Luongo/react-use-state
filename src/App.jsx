import LanguagesCard from "./components/Lenguages-Cards";
import languages from "./data/languages";

function App() {
    return <>
        {
            languages.map(language => {
                const { id, title, description } = language
                return <LanguagesCard key={id} titoloCard={title}
                    descrizioneCard={description} />
            })
        }
    </>
}
export default App;
