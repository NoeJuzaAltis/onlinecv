import react from "react";
import Lang from "./Lang";

const images = require.context('./svgs',true)
const langSet = [
    {"name":"french",
    "fullName":"Français",
    "text":"Ma langue natale est le français, c'est avec celle-ci que j'ai été elevé et avec laquelle j'ai suivi mon cursus scolaire."},
    {"name":"english",
    "fullName":"Anglais",
    "text":"Je suis bilingue en anglais, me permettant une collaboration active avec des anglophones natifs ou la lecture rapide de textes en anglais, très utile pour la lecture de documentations et la recherches de solutions pour des erreurs informatiques."},
    {"name":"german",
    "fullName":"Allemand",
    "text":"J'ai obtenu ma maturité profesionnelle d'allemand (équivalent B2) et peut me débrouiller à l'oral bien que cela soit problématique dans le cas du suisse-allemand et autres dialectes car il ne s'agit plus du tout de la même langue."}]

export default class LangList extends react.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        this.langList = []
        langSet.forEach((lang) =>{
            this.langList.push(<Lang name={lang.name} title={lang.fullName} text={lang.text}/>)
        })
    }
    render(){
        return <>{this.langList}</>
    }
}