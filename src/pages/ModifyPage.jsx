import { useParams } from "react-router-dom";

function ModifyPage(){
    const params = useParams();


    return (<p>Hello world, id: {params.id}, name: {params.name}</p>);
}

export default ModifyPage;