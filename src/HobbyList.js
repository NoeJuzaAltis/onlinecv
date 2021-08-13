import react from "react";
import Hobby from './Hobby'
const hobbySet = [
    {"name":"musique",
    "fullName":"Musique",
    "text":"J'aime beaucoup jouer et écouter de la musique, elle est une grande partie de ma vie. En effet, rares sont les moments ou je ne suis pas en train d'écouter quelque chose. J'ai des goûts musicaux très divers, allant de la musique classique au death metal symphonique en passsant par le rap, l'électro et la pop"},
    {"name":"jeux",
    "fullName":"Jeux vidéo",
    "text":"Depuis mon plus jeune âge j'ai été bercé par les jeux vidéos. En effet, ce sont les jeux vidéo qui m'ont lancé dans le monde de l'informatique et du développement notamment au travers des \"mods\"."},
    {"name":"litterature",
    "fullName":"Littérature",
    "text":"J'adore lire, écrire et réciter toutes sortes de textes mais j'ai un point faible pour les poèmes en général."},
    {"name":"programmation",
    "fullName":"Programmation",
    "text":"Depuis tout petit, j'ai toujours été en train de bidouiller du code informatique, soit par les mods pour les jeux vidéos ou pour automatiser des processus répétitif, la programmation occupe une place importante de ma vie. (d'ailleurs ce site a été réalisé quasi entièrement par mes soins)."},
    {"name":"technologie",
    "fullName":"Nouvelles Technologies",
    "text":"Je m'intéresse beaucoup aux innovations et aux nouvelles technologies."},
    {"name":"jdr",
    "fullName":"Jeux de Rôle",
    "text":"Un de mes hobbys est aussi de participer à et/ou créer des campagnes de jeux de rôle. Mes univers de prédilections sont le médiéval fantastique et la science-fiction. C'est un hobby qui m'a permis de développer mon imaginnation et mes talents de résolution de problèmes."}
]
export default class HobbyList extends react.Component{

    constructor(props){
        super(props)
        this.name = props.name
        this.hobbyList = []
        this.src = './svgs/'+ this.name
        hobbySet.forEach((hobby) =>{
            this.hobbyList.push(
                <>
                <Hobby name={hobby.name} title={hobby.fullName} text={hobby.text}/>
                </>
            )
        })
    }
    render(){
        return <>{this.hobbyList}</>
    }
}