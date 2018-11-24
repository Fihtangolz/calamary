import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { strictEqual } from 'assert';

import './mardownHolder.scss';

var marked = require('marked');
var fs = require("fs");

const Label = ({children, onClick}: any) => (
    <a 
        onClick={onClick}
        style={{
            backgroundColor: "#f1f8ff",
            borderRadius: "3px",
            display: "inline-block",
            margin: "0 .5em .5em 0",
            padding: ".3em .9em",
            whiteSpace: "nowrap",

            color: "#0366d6",
            textDecoration: "none",
            fontSize: "12px",
        }}
    >
        {children}
    </a>
);

const BlockWrap = ({children}: any) => (
    <div
      style={{
        border: "1px solid #dfe2e5",
        margin: "5px",
      }}
    >
        {children}
    </div>
);

const RowConteiner = ({children, style, ...etc}: any) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        ...style
      }}
      {...etc}
    >
        {children}   
    </div>
);

const Summary = (data: any) => {
    const [some, setSome] = useState(false);
    console.log(data)
    // strictEqual(100, [{percent: 20},{percent: 80}].reduce((acc: any, obj: any)=>acc+obj.percent), "The amount of procents should be 100")
    const colors = [
        "#8000ff", 
        "#00ff40", 
        "#0080ff", 
        "#ff00ff",    
    ]; 
    return(
        <>
            <RowConteiner style={{ justifyContent: "space-between", }}>
                { some ? 
                    [
                        <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>,
                        <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>,
                        <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>,
                    ] : [
                        [1,2,3,4].map(()=>(<div style={{ height: "20px", width: "20px", backgroundColor: "green",}}/>))
                    ]
                }
            </RowConteiner>
            <RowConteiner onClick={()=>setSome(!some)}>
                {["#8000ff", "#00ff40", "#0080ff", "#ff00ff"].map((obj, index)=>(
                    <div key={index} style={{ height: "6px", width: "25%", backgroundColor: obj }}/>
                ))}
            </RowConteiner>
        </>
    );
}

const ListShower = () => {

    return(
        <>

        </>
    );
};

const ReadmeViewer = ({filePath}:any) => {
    const [rawData, setRawData] = useState("");

    useEffect(()=>{
        fs.readFile("/Projects/calamary/README.md", (err: any, data: any) => {
            if (err) throw err;
            setRawData(data.toString());
            console.log(marked(data.toString()))
        });
    },[]);

    return(
        <>
            <div style={{ backgroundColor: "#f6f8fa", borderBottom: "1px solid #d1d5da",}}> 
                <text 
                    style={{
                        color: "black",     
                    }}
                >
                    README
                </text>
            </div>
            <div 
                style={{ 
                    height: "350px", 
                    overflow: "scroll", 
                }}
            >
               <div
                    className={"mardown-holder"}
                    dangerouslySetInnerHTML={{ __html: marked(rawData) }} 
                />
            </div>    
        </>
    );
};

export const RepoCard = () => {
    
    return(
        <div 
            style={{
                margin: "80px",

                width: "300px",
                backgroundColor: "white",
                borderRadius: "2px",

                borderColor: "black",
                borderStyle: "solid",
                borderWidth: "1px 1px 1px 1px",
            }}
        >
        <div 
        style={{ 
            margin: "5px",
            display: "flex",
            flexDirection: "row",  
            }}
        >
            <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>
            <text style={{ color: "black"}}>fffaraz/awesome-cpp</text>
            <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>
        </div>
            <div>
            {["cpp", 
            "cppcon", 
            "awesome", 
            "programming-tutorial",
            "libraries",
            "c-plus-plus", 
            "c",
            "algorithms", 
            "cpp-library", 
            "awesome-listlist"].map((obj, index)=>(<Label key={index}>{obj}</Label>))}
            </div>
            <BlockWrap>
                <Summary data={[{name: "kek", percent: 12}]}/>  
                <ListShower/>  
            </BlockWrap>
            <div style={{ height: "20px", backgroundColor: "green", margin: "5px"}}/>

            <BlockWrap style={{ overflow: "scroll", }}>
                <ReadmeViewer/>
            </BlockWrap>
        </div>
    );
};

