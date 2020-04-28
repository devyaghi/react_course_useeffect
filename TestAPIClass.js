import React from "react";

export default class TestAPIClass extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    fetch("http://yaghihub.site/api/tasks/index").then(response=>response.json())
        .then(data=>{
            console.log(data.data)
        })

    }

    render() {
        return(
        <div>Test</div>
        )
    }


}