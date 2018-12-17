import * as React from 'react';
import { RowConteiner, CollumConteiner } from './Layout';
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

export const HeaderBord = () => {
    return(
        <>
        <div style={{ margin: "180px", width: "100%", height: "100px", backgroundColor: "red",}}/>
        </>
    );
};

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
        fs.readFile("/Projects/calamary/node_modules/7zip/README.md", (err: any, data: any) => {
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

const CardWrapper = ({children}: any) => {
    return(
        <div 
        style={{
            width: "300px",
            backgroundColor: "rgb(33, 33, 36)",
            boxShadow: "2px 2px 2px 0px black",
        }}
    >
        {children}
    </div>
    );
}

const CardHeader = () => (
    <RowConteiner>
        <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>
        <text style={{ color: "white"}}>fffaraz/awesome-cpp</text>
        <div style={{ height: "20px", width: "20px", backgroundColor: "red",}}/>
    </RowConteiner>    
);

const ActivityChart = ({data}: any) => (
    <div style={{ height: "40px", backgroundColor: "green", margin: "5px"}}>
        <div style={{

        }}>
            {[...Array(10).keys()].map((el, index)=>(
                <div 
                    key={index} 
                    style={{
                        height: "1px", 
                        width: "100%", 
                        marginTop: "3px",
                        backgroundColor: "rgb(57, 57, 59)"
                    }}
                />
            ))}
        </div>
        <RowConteiner>
            {[...Array(30).keys()].map((el, index)=>(
                [<div key={index} style={{height: index+"px", width: "3px", backgroundColor: "red"}}/>,
                <div key={index} style={{height: "10px", width: "1px", backgroundColor: "blue"}}/>]
            ))}
        </RowConteiner> 
    </div>
);

export const OverviewCard = ({children}: any) => {

    return(
        <CardWrapper>
            <BlockWrap>
                <CardHeader/> 
            </BlockWrap>
            <BlockWrap>
                <ActivityChart/>
            </BlockWrap>
        </CardWrapper>
    );
};

export const RepoCard = () => {
    
    return(
        <CardWrapper>
            <CardHeader/>
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
            <BlockWrap>
                <ActivityChart/>
            </BlockWrap>    
            <BlockWrap style={{ overflow: "scroll", }}>
                <ReadmeViewer/>
            </BlockWrap>
        </CardWrapper>
    );
};

