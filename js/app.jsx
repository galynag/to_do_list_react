var toDoList = ['task1','task2','task3','task4'];

var ItemList = React.createClass({
    getInitialState: function() {
        return {
            del : false
        };
    },
    delClick: function(e) {
        e.preventDefault();
        console.log(this.state.del);
        (this.state.del === false) ? this.setState({del: true}): this.setState({del: false})
    },
    render : function()  {
        var data=this.props.data;
        return (
        <div>
            <input className="item-check" type="checkbox" />
            <p className={(this.state.del == false) ? 'item-name' : 'item-name deleted'}>{data}</p>
            <span className={(this.state.del == false) ? '' : 'deleted'}>Total time is </span>
            <span className={(this.state.del == false) ? '' : 'deleted'}>00:00:00</span>
            <button
                style={{margin:'10px'}}
            >
                {(this.state.del == false) ? 'Start' : 'Stop'}
            </button>

            <div className="item-close" onClick={this.delClick}>
                <img src="img/del.png" alt="" />
                </div>
        </div>
        )
    }
})

var List = React.createClass ({
    render : function () {
        var data=this.props.data;
        var itemTemplates;
        itemTemplates = data.map(function(item,index){
            return (
            <div key={index} className="item-list">
                <ItemList data={item}/>
            </div>
            )
        });
        return (
            <div className="list-box">
                {itemTemplates}
                <p style={{padding: '10px'}}>{data.length} items</p>
            </div>
        )
    }
})

var AddItem = React.createClass({
    getInitialState: function() {
        return {
            valueAddItem : ''
        };
    },
    valueChange: function(e) {
        e.preventDefault();
        console.log(this.state.del);
        (this.state.del === false) ? this.setState({del: true}): this.setState({del: false})
    },

    render : function() {
        return (
            <input id="addItem" type="text" placeholder="What should be done?" value={this.state.valueAddItem}/>
        )
    }
})

var App = React.createClass({
    render : function() {
        return (
            <div>
                <h1>Create your plans</h1>
                <AddItem />
                <List data={toDoList} />
            </div>
        )
    }
})

ReactDOM.render(
  <App />,document.getElementById('root')
);