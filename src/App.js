import React,{Component} from 'react';
import './App.css';
import Layout from "./Layout";

class App extends Component{
  state={
      selectedLayout:"XL",
      layoutArray:[{count:1,size:'XL'}]
  }
  handleLayout = (e) => {
      const { value } = e.target;
      const splitted=value.split("/");
      let count,size,item;
      const layoutArray=[];
      for(let i=0;i<splitted.length;i++)
      {
        count = isNaN(parseInt(splitted[i])) ? 1 : parseInt(splitted[i]);
        size = splitted[i].match(/[a-zA-Z]+/g).length>0?splitted[i].match(/[a-zA-Z]+/g)[0]:"";
        item={count,size};
        layoutArray.push(item);
      }
      this.setState({
          selectedLayout:value,
          layoutArray
      })
  }
  render(){
    const {selectedLayout,layoutArray}=this.state;
    return(
        <div className="App">

            <select value={selectedLayout} onChange={this.handleLayout}>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="4L">4L</option>
                <option value="XL/2L">XL/2L</option>
                <option value="XL/L/2SM">XL/L/2SM</option>
            </select>
            <div className="main">
                <Layout layoutArray={layoutArray}/>
            </div>
        </div>
    )
  }
}

export default App;
