import react from "react";
import Lang from "./Lang";

const images = require.context('./svgs',true)
const langSet = ["french","english","german"]

export default class LangList extends react.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        this.langList = []
        langSet.forEach((lang) =>{
            this.langList.push(<Lang name={lang}/>)
        })
    }
    render(){
        return <>{this.langList}</>
    }
}