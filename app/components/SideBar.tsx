import * as React from 'react';

const Button = (props: any) => (
    <div 
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: "green",

        marginTop: "20px",
        flex: "none",
      }}
      onClick={props.onClick}
    >
    </div>
)

const CollumConteiner = (props: any) => {
  // console.log(props.children)
  // props.children.map((obj: any, index: any)=>{
  //   obj.props.style = {
  //     marginTop: "20px",
  //   }
  // });  
  return(
    <div
      style={{
        height: "100%",
        padding: "0px",

        display: "flex",
        flexDirection: "column", 
        alignItems: "center",

        overflow: "scroll"
      }}
    >
      {props.children}
    </div>
  );
}

let { history } = require('../../app/store/configureStore');

export const SideBar = () => {
    // const [ menuItems ] = React.useState(0)
    return(
      <div 
        style={{
          position: "fixed",
          left: "0px",
          top: "0px",
          width: "50px",
          height: "100%",
          backgroundColor: "red",
          boxShadow: "1px 0px 20px 1px black",
        }}
      >
        <CollumConteiner>
            { Array(10).fill(0).map((_e, i)=>i+1).map(i=>{
                return <Button key={i} onClick={()=>history.push("/some1")}/>
              })
            }
        </CollumConteiner>
      </div>
    );
  };