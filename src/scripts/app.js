
const ReactDOM = require('react-dom');
const React = require('react');


document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

/* Data structure
todos: [
   {
      text: '',
      completed: false
   }
]
*/

const HomeView = React.createClass({


getInitialState: function(){
      let startingStateObj = {
         todos: []
      }
      return startingStateObj
   },


   _handleKeyDown: function(evt){
     if(evt.key == 'Enter'){
       console.log(this.refs.taskInputEl.value)

       let currentInput = this.refs.taskInputEl.value
         this.refs.taskInputEl.value = ''
       let newTaskObj = {}

        if( currentInput.length > 0  ) {

            newTaskObj = {
               text: currentInput, 
               completed:false
            }
            let newState = this.state

            newState.todos.push(newTaskObj)

             this.setState(newState)
         }

      }
   },

   _removeTask: function (evt){
      console.log(evt.props);

      let text = evt._targetInst._hostParent._hostNode.textContent
      let newState = this.state

      let newArray = newState.todos.filter(function(el){
         console.log("text", el.text, text);
         return (el.text + 'X') !== text
      })
      console.log("test", newArray);

      this.setState({
         todos: newArray
      })
   },

   render: function(){
      var self = this
      let list = this.state.todos.map(function(todo, i){
         return <li key={i}>{todo.text}<button onClick={self._removeTask}>X</button></li>
      })

      return (
         <div className="container text-center">
            <button className="btn btn-info btn-lg" > All</button>
            <button className="btn btn-info btn-lg" > Done</button>
            <button className="btn btn-info btn-lg" > Undone</button>
               <br/>
            <input type="text" className="form-control input-group-lg" ref="taskInputEl" onKeyDown={this._handleKeyDown} placeholder="" aria-describedby="basic-addon1"/>

            <ul className="list-group">
               { list }
            </ul>
         </div>
      )
   }
})

// _removeTask : function (){
//
// }




ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
