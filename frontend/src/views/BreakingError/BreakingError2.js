import React from "react";

class BreakingError2 extends React.Component {

  componentDidMount(){
    const {location, history} = this.props;
    if(location.state === undefined){
      history.push("/plus/breakingerror");
    }
  }
  render() {
   const{location} = this.props;
   if(location.state){
   return <span>{location.state.id}</span>;
   }else{
     return null;
   }
  }
}
export default BreakingError2;
