import React from "react"
import Experience from './Experience'
const images = require.context('./svgs',true)
const expSet =[
    {"name":"cccvs",
    "fullName":"CCCVS",
    "desc":"La Caisse de Compensaiton du Canton du Valais est une entreprise active dans le domaine du versement des allocations (AVS,AI,APG,AF, etc...). Lors de mon passage dans l'entreprise j'ai été affecté au département IT et ait réalisé de nombreuses tâches de support informatiques. (dépanages, opération d'imprimantes industrielles, remontée de bugs, etc...).",
    "reco":"Lors de son passage Noé s'est montré capable d'être très versatile. Bien qu'il soit meilleur en développement il s'est montré capable d'une capacité d'adaptation impresionnante lors des tâches qui relevaient plus du domaine \"Système\""},
    {"name":"altis",
    "fullName":"ALTIS Groupe SA",
    "desc":"ALTIS Groupe SA est une entreprise active dans le domaine de l'eau, du chauffage et de l'electricité. Lors de mon passage dans l'entreprise j'ai été affecté au poste de développeur et ait pu collaborer sur des projets du domaine de l'IOT et du développement Web. J'ai aussi développé mes compétences de conteneurisation, d'administration linux et d'opération de machines virtuelles avec nutanix",
    "reco":"Travail exemplaire."}
]
export default class ExperienceList extends React.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        this.expList = []
        this.src = './svgs/'+ this.name
        expSet.forEach((exp) =>{
            this.expList.push(
                <>
                <Experience name={exp.name} title={exp.fullName} desc={exp.desc} reco={exp.reco}/>
                </>
            )
        })
    }
    render(){
        return <>{this.expList}</>
    }
}