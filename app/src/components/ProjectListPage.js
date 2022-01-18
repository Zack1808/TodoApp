import React from "react";

import Form from './Form';

const ProjectListPage = () => {

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div>
            <Form placeholder="Enter Project Name" btnText="Create Project" onSubmit={onSubmit} />
        </div>
    )
}

export default ProjectListPage;