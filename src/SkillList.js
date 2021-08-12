import react from "react";
import Skill from "./Skill";
const images = require.context('./svgs',true)
const skillSet = ["html","css","js","nodejs","docker","nodered","linux","mongo","nutanix","sql","git","rest"]
export default class SkillList extends react.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        this.skillList = []
        this.src = './svgs/'+ this.name
        skillSet.forEach((skill) =>{
            this.skillList.push(<Skill name={skill}/>)
        })
    }
    render(){
        return <>{this.skillList}</>
    }
}