import * as React from 'react';

export const RowConteiner = ({children, style, ...etc}: any) => (
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

export const CollumConteiner = ({children, style, ...etc}: any) => (
    <div
        style={{
            height: "100%",
            padding: "0px",

            display: "flex",
            flexDirection: "column", 
            alignItems: "center",

            overflow: "auto",
            ...style
        }}
        {...etc}
    >
        {children}
    </div>
);

export const GridContainer = ({children, style, ...etc}: any) => {
    return(
        <div
            style={{
                marginLeft: "10px",
                
                display: "grid",
                overflow: "auto",
                gridGap: "10px",
                gridTemplateColumns: "repeat(auto-fill,  minmax(300px, max-content))",
                gridAutoRows: "min-content",
                ...style
            }}
            {...etc}
        >
            {children}
        </div>
    );
};
  