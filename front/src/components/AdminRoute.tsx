import  React, { useEffect } from  "react";
import { Route, Redirect } from  "react-router-dom";

const AdminRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {


    const condition = document.cookie === 'token=OK'

    return  condition ? 
        (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/login"  />);
};
export  default  AdminRoute;