
const ReactDOM = require('react-dom');
const React = require('react');


document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`



const HomeView = React.createClass({


getInitialState: function(){
      this.startingStateObj = {
         inputWaitngToBeFilled: ''
      }
      return this.startingStateObj
   },


   _handleKeyDown: function(evt){
     if(evt.key == 'Enter'){
       console.log(this.refs.taskInputEl.value)

       let currentInput = this.refs.taskInputEl.value
       let newTaskObj = {}

        if( currentInput.length  > 0   ) {
            newTaskObj = { inputWaitngToBeFilled: currentInput }
         } else {
            newTaskObj = this.startingStateObj

         }
          this.setState(newTaskObj)
      }
   },

   render: function(){
      return (
         <div className="container text-center">
            <button className="btn btn-info btn-lg" > All</button>
            <button className="btn btn-info btn-lg" > Done</button>
            <button className="btn btn-info btn-lg" > Undone</button>
               <br/>
            <input type="text" className="form-control input-group-lg" ref="taskInputEl" onKeyDown={this._handleKeyDown} placeholder="" aria-describedby="basic-addon1"/>

            <ul className="list-group">
               <li>{this.state.inputWaitngToBeFilled}</li>
            </ul>
         </div>
      )
   }
})




ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
