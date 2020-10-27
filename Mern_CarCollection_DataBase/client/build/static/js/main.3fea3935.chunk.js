(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/car-3d-rotate.bc4271b4.gif"},35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),o=a.n(l),c=(a(40),a(21),a(41),a(12)),i=a(14),s=a(32),m=a.n(s),u=a(7),h=a(8),d=a(10),b=a(9),g=a(11),C=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"DAVID MILLER CARS"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"CARS COLLECTION")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/add",className:"nav-link"},"ADD NEW CAR"))))))}}]),t}(n.Component),v=a(1),E=a(13),f=a.n(E),p=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.car.owner),r.a.createElement("td",null,e.car.model),r.a.createElement("td",null,e.car.make),r.a.createElement("td",null,e.car.color),r.a.createElement("td",null,e.car.registration_Number),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/edit/"+e.car._id}," ","edit ",r.a.createElement("i",{className:"fas fa-pencil-alt"})," ")," ","|"," ",r.a.createElement("a",{href:"/",onClick:function(){e.deleteCar(e.car._id)}}," ","delete ",r.a.createElement("i",{className:"fas fa-trash"})," ")))},N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).deleteCar=a.deleteCar.bind(Object(v.a)(a)),a.state={cars:[]},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/cars/").then(function(t){e.setState({cars:t.data})}).catch(function(e){console.log(e)})}},{key:"deleteCar",value:function(e){f.a.delete("http://localhost:5000/cars/"+e).then(function(e){console.log(e.data)}),this.setState({cars:this.state.cars.filter(function(t){return t._id!==e})})}},{key:"carList",value:function(){var e=this;return this.state.cars.map(function(t){return r.a.createElement(p,{car:t,deleteCar:e.deleteCar,key:t._id})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Cars Collection"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Owner"),r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Make"),r.a.createElement("th",null,"Color"),r.a.createElement("th",null,"Registration Number"))),r.a.createElement("tbody",null,this.carList())))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).onChangeOwner=a.onChangeOwner.bind(Object(v.a)(a)),a.onChangeModel=a.onChangeModel.bind(Object(v.a)(a)),a.onChangeMake=a.onChangeMake.bind(Object(v.a)(a)),a.onChangeColor=a.onChangeColor.bind(Object(v.a)(a)),a.onChangeRegistrationNumber=a.onChangeRegistrationNumber.bind(Object(v.a)(a)),a.onSubmit=a.onSubmit.bind(Object(v.a)(a)),a.state={owner:"",model:"",make:"",color:"",registration_Number:""},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/cars/"+this.props.match.params.id).then(function(t){e.setState({owner:t.data.owner,model:t.data.model,make:t.data.make,color:t.data.color,registration_Number:t.data.registration_Number})}).catch(function(e){console.log(e)})}},{key:"onChangeOwner",value:function(e){this.setState({owner:e.target.value})}},{key:"onChangeModel",value:function(e){this.setState({model:e.target.value})}},{key:"onChangeMake",value:function(e){this.setState({make:e.target.value})}},{key:"onChangeColor",value:function(e){this.setState({color:e.target.value})}},{key:"onChangeRegistrationNumber",value:function(e){this.setState({registration_Number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={owner:this.state.owner,model:this.state.model,make:this.state.make,color:this.state.color,registration_Number:this.state.registration_Number};console.log(t),f.a.post("http://localhost:5000/cars/update/"+this.props.match.params.id,t).then(function(e){return console.log(e.data)}).catch(function(e){console.log(e)}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Car Details"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Owner "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.owner,onChange:this.onChangeOwner})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Model "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.model,onChange:this.onChangeModel})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Make "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.make,onChange:this.onChangeMake})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Color "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.color,onChange:this.onChangeColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Registration Number "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.registration_Number,onChange:this.onChangeRegistrationNumber})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Car",className:"btn btn-success"}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).onChangeOwner=a.onChangeOwner.bind(Object(v.a)(a)),a.onChangeModel=a.onChangeModel.bind(Object(v.a)(a)),a.onChangeMake=a.onChangeMake.bind(Object(v.a)(a)),a.onChangeColor=a.onChangeColor.bind(Object(v.a)(a)),a.onChangeRegistrationNumber=a.onChangeRegistrationNumber.bind(Object(v.a)(a)),a.onSubmit=a.onSubmit.bind(Object(v.a)(a)),a.state={owner:"",model:"",make:"",color:"",registration_Number:""},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"onChangeOwner",value:function(e){this.setState({owner:e.target.value})}},{key:"onChangeModel",value:function(e){this.setState({model:e.target.value})}},{key:"onChangeMake",value:function(e){this.setState({make:e.target.value})}},{key:"onChangeColor",value:function(e){this.setState({color:e.target.value})}},{key:"onChangeRegistrationNumber",value:function(e){this.setState({registration_Number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={owner:this.state.owner,model:this.state.model,make:this.state.make,color:this.state.color,registration_Number:this.state.registration_Number};console.log(t),f.a.post("http://localhost:5000/cars/add",t).then(function(e){return console.log(e.data)}).catch(function(e){console.log(e)}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Add Car Details"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Owner "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.owner,onChange:this.onChangeOwner})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Model "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.model,onChange:this.onChangeModel})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Make "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.make,onChange:this.onChangeMake})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Color "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.color,onChange:this.onChangeColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car Registration Number "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.registration_Number,onChange:this.onChangeRegistrationNumber})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Add Car",className:"btn btn-primary"}))))}}]),t}(n.Component);var w=function(){return r.a.createElement(c.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:m.a,alt:"3d object",className:"img-3d"})),r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/edit/:id",exact:!0,component:k}),r.a.createElement(i.a,{path:"/add",exact:!0,component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.3fea3935.chunk.js.map