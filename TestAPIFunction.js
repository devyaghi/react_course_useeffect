import React, {useEffect} from "react";

export default function TestAPIFunction(){

    useEffect(()=>{

        fetch("http://yaghihub.site/api/tasks/index").then(response=>response.json())
            .then(data=>{
                console.log(data.data)
            })



    },[]);

    return(<div>Test</div>)


}