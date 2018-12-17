import * as React from "react";

import { GridContainer, RowConteiner, CollumConteiner } from "../components/Layout";
import { OverviewCard, RepoCard } from "../components/RepoCard";

export default function GitViewer() {
    return(
        // <div style = {{ backgroundColor: "red", height: "100px",}}>
        //     <input style={{height: "20px", width: "160px", backgroundColor: "rgb(65, 67, 57)",}}/>    
        // </div>
        <GridContainer>
            {[...Array(23).keys()].map(()=><OverviewCard/>)}
        </GridContainer>
    );
};