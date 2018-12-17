import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import Icon, { Stack } from '@mdi/react';
import { mdiSettings, mdiViewDashboard, mdiGit, mdiChartAreaspline} from '@mdi/js';
import { CollumConteiner } from "./Layout";

const Button = (props: any) => {
  return(
    <div 
      style={{
        width: "30px",
        height: "30px",
        
        marginTop: "20px",
        flex: "none",
        ...props.style
      }}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnterOrLeave}
      onMouseLeave={props.onMouseEnterOrLeave}
    >
      {props.children}
    </div>
  );
};

let { history } = require('../../app/store/configureStore');

export const BaseButton = ({path, route, style}: any) => {
  const [ isMouseHovered, setHover ] = useState(false);
  return(
    <Button  
      onClick={()=>history.push(route)} 
      onMouse
      style={{...style}}
      onMouseEnterOrLeave={()=>setHover(!isMouseHovered)}
    >
      <Icon  
        path={path}
        size={1}
        horizontal
        vertical
        rotate={180}
        color={isMouseHovered ? "white" : "#888"}
      />
    </Button>
  );
};

export const SideBar = () => {

    return(
      <div 
        style={{ 
          height: "100%",

          background: "rgb(29, 31, 33)",
          border: "1px solid rgb(45, 47, 49)",  
          outline: "1px solid rgb(14, 15, 16)",
        }}
      >
      <CollumConteiner>
        <CollumConteiner>
            { [
                {
                  element: <BaseButton path={mdiChartAreaspline} route="/repoTracker"/>,
                }, 
                {
                  element: <BaseButton path={mdiViewDashboard} route="/dashboard"/>,
                }, 
                {
                  element: <BaseButton path={mdiGit} route="/gitClient"/>,
                }
              ].map((obj, i)=>obj.element)
            }
        </CollumConteiner>
          <BaseButton path={mdiSettings} route="/setting"/>
        </CollumConteiner>
      </div>
    );
  };