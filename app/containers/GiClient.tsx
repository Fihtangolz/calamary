import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { RowConteiner, CollumConteiner } from "../components/Layout";

const FlexebleContainer = ({ children }: any) => {
    const [ some, setSome ] = useState(null);
    var offset: number = 0;
    var element: any;
    var currWidth: any;
    return(
        <RowConteiner>
        <div style={{
                backgroundColor: "rgb(29, 31, 33)",
                width: some !== null ? some+"px" : "auto",
            }}
            ref={(el)=>{
                if(el !== null){
                    //@ts-ignore
                    element = el.getBoundingClientRect();
                    console.log("KEK", element)
                }
            }}
        >
            {children}
        </div>
        <div 
            style={{
                width: "4px", 
                cursor: "col-resize", 
            }}
            onMouseDown={()=>{
                document.body.style.cursor = "col-resize";
                document.body.onmouseup = ()=>{
                    document.body.style.cursor = null;
                    document.body.onmouseup = null;
                    document.body.onmousemove = null;
                };
                document.body.onmousemove = (e)=>{
                    var pagePos = e.pageX
                    //@ts-ignore
                    if(element !== null){
                    offset = pagePos - element.right;
                    console.log(element, pagePos, offset)
                    //@ts-ignore
                    setSome(element.width + offset);
                    }
                };
            }}
        />
        </RowConteiner>
    );
}

export const GitClient = () => {
    return(
        <FlexebleContainer>
            <CollumConteiner>
                <div 
                    style={{
                        width: "100%",
                        backgroundColor: "rgb(29, 31, 33)",
                        
                        border: "1px solid rgb(45, 47, 49)",  
                        outline: "1px solid rgb(14, 15, 16)",
                    }}
                >
                    <text style={{fontSize: 12,}}>{"GIT FLOW"}</text>
                </div>
                <div style={{height: "30px",}}/>
                <div style={{backgroundColor: "red", width: "100%"}}>LOCAL</div>
                <div style={{backgroundColor: "green", width: "100%"}}>REMOTE</div>
                <div style={{backgroundColor: "red", width: "100%"}}>TAGS</div>
                <div style={{backgroundColor: "green", width: "100%"}}>SUBMODULES</div>
            </CollumConteiner>
        </FlexebleContainer>
    );
}