/**
 * Created by Jhon on 07.06.2016.
 */
var Counter = React.createClass({displayName: "Counter",
    getInitialState: function () {
        return {  count: 1 ,
            cntr : 0
        };
    },
    handleClick: function () {
        this.setState({
            count: this.state.count * 3,
            cntr : this.state.cntr + 1
        });
    },
    render: function () {
        var P = '';
        if(this.state.count > 0 && this.state.count < 1000) {
            P = this.state.count + ' W';
        } else if (this.state.count > 1000 && this.state.count < 1000000){
            P = this.state.count/1000 + ' kW';
        } else if (this.state.count > 1000000 && this.state.count < 1000000000){
            P = this.state.count/1000000 + ' MW';
        } else if (this.state.count > 1000000000 && this.state.count < 1000000000000){
            P = this.state.count/1000000000 + ' GW';
        }  else if (this.state.count > 1000000000000 && this.state.count < 1000000000000000){
            P = this.state.count/1000000000000 + ' TW';
        }  else {
            P = this.state.count/1000000000000000 + ' PW';
        }
        return (
            React.createElement("button", {onClick: this.handleClick}, 

        "Click me! Number of clicks: ", React.createElement("samp", null, P, " / ", this.state.cntr)
        )
        );
    }
});
ReactDOM.render(
React.createElement(Counter, null),
    document.getElementById('container')
);
//# sourceMappingURL=app.js.map
