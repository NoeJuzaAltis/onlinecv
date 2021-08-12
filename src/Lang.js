import react from "react";
const images = require.context('./svgs',true)

export default class Lang extends react.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        
        this.src = './svgs/'+ this.name
    }
    render(){
        return <div className="langEl"><img src={this.loadImage(this.name + ".svg")} alt={this.name}/></div>
    }
}