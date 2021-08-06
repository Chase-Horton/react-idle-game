import { useState } from "react"

const ProductionPage = (props) =>{
    let [unitState, setUnitState] = useState(props.units);
    let [foodState, setFoodState] = useState(props.food);
    let [waterState, setWaterState] = useState(props.water);
    let [territoryState, setTerritoryState] = useState(props.territory);
    let [knowledgeState, setKnowledgeState] = useState(props.knowledge);
    let [mutagenState, setMutagenState] = useState(props.mutagens);
    if(props.visible){
        return(
            <div id="production">
                <h1>Units: {unitState}</h1>
                <h1>Food: {foodState}</h1>
                <h1>Water: {waterState}</h1>
                <h1>Knowledge: {knowledgeState}</h1>
                <h1>Mutagens: {mutagenState}</h1>
            </div>
        )
    }else{
        return null;
    }
}

export default ProductionPage;