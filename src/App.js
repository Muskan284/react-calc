import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.click1=this.click1.bind(this);
    this.click2=this.click2.bind(this);
    this.click3=this.click3.bind(this);
    this.click4=this.click4.bind(this);
    this.click5=this.click5.bind(this);
    this.click6=this.click6.bind(this);
    this.click7=this.click7.bind(this);
    this.click8=this.click8.bind(this);
    this.click9=this.click9.bind(this);
    this.click0=this.click0.bind(this);
    this.clickplus=this.clickplus.bind(this);
    this.clicksub=this.clicksub.bind(this);
    this.clickmul=this.clickmul.bind(this);
    this.clickdiv=this.clickdiv.bind(this);
    this.clickce=this.clickce.bind(this);
    this.clickdel=this.clickdel.bind(this);
    this.evaluate=this.evaluate.bind(this);
    this.state={
      text:''
    }
  }
  evaluate(){
    let text=this.state.text;
    let v=true;
    try{
      eval(text);
    }catch(e){
      v=false;
    }

   if(v==true){
    let next=eval(text);
    this.setState(()=>({
      text:next
    }))
  }
  else{
    this.setState(()=>({
      text:'Bad syntax'
    }))
  }
  }
  click1(){
    let next=this.state.text+'1';
    this.setState(()=>({
       text:next
    }))
  }
  click2(){
    let next=this.state.text+'2';
    this.setState(()=>({
       text:next
    }))
  }
  click3(){
    let next=this.state.text+'3';
    this.setState(()=>({
       text:next
    }))
  }
  click4(){
    let next=this.state.text+'4';
    this.setState(()=>({
       text:next
    }))
  }
  click5(){
    let next=this.state.text+'5';
    this.setState(()=>({
       text:next
    }))
  }
  click6(){
    let next=this.state.text+'6';
    this.setState(()=>({
       text:next
    }))
  }
  click7(){
    let next=this.state.text+'7';
    this.setState(()=>({
       text:next
    }))
  }
  click8(){
    let next=this.state.text+'8';
    this.setState(()=>({
       text:next
    }))
  }
  click9(){
    let next=this.state.text+'9';
    this.setState(()=>({
       text:next
    }))
  }
  click0(){
    let next=this.state.text+'0';
    this.setState(()=>({
       text:next
    }))
  }
  clickplus(){
    let next=this.state.text+'+';
    this.setState(()=>({
       text:next
    }))
  }
  clicksub(){
    let next=this.state.text+'-';
    this.setState(()=>({
       text:next
    }))
  }
  clickmul(){
    let next=this.state.text+'*';
    this.setState(()=>({
       text:next
    }))
  }
  clickdiv(){
    let next=this.state.text+'/';
    this.setState(()=>({
       text:next
    }))
  }
  clickdel(){
    let len=this.state.text.length;
    let next=this.state.text.substr(0,len-1);
    this.setState(()=>({
       text:next
    }))
  }
  clickce(){
    this.setState(()=>({
       text:''
    }))
  }
  render() {
    return (
      <div>
        <h1>calculator</h1>
        <div>
          <div>
            <textarea value={this.state.text} ></textarea>
          </div>
          <div>
            <button onClick={this.click1}>1</button>
            <button onClick={this.click2}>2</button>
            <button onClick={this.click3}>3</button>
            <button onClick={this.clickplus}>+</button>
          </div>
          <div>
            <button onClick={this.click4}>4</button>
            <button onClick={this.click5}>5</button>
            <button onClick={this.click6}>6</button>
            <button onClick={this.clickmul}>*</button>
          </div>
          <div>
            <button onClick={this.click7}>7</button>
            <button onClick={this.click8}>8</button>
            <button onClick={this.click9}>9</button>
            <button onClick={this.clicksub}>-</button>
          </div>
          <div>
            <button onClick={this.clickdel}>del</button>
            <button onClick={this.click0}>0</button>
            <button onClick={this.clickce}>CE</button>
            <button onClick={this.clickdiv}>/</button>
          </div>
          <button onClick={this.evaluate}>Enter</button>
        </div>
      </div>
    );
  }
}

export default App;
