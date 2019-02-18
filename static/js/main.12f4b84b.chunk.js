(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a(291)},238:function(e,t,a){},240:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(136),c=a.n(o),l=a(21),s=(a(238),a(10)),i=a(11),u=a(13),h=a(12),m=a(14),b=a(89),d="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},p=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e,t){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(b.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=(a(240),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.books,n=e.changeShelf,o="moveTo",c=!0,l=!1,s=void 0;try{for(var i,u=a[Symbol.iterator]();!(c=(i=u.next()).done);c=!0){var h=i.value;h.id===t.id&&(o=h.shelf)}}catch(m){l=!0,s=m}finally{try{c||null==u.return||u.return()}finally{if(l)throw s}}return r.a.createElement("div",{className:"book-shelf-changer"},r.a.createElement("select",{onChange:function(e){return n(t,e.target.value)},defaultValue:o},r.a.createElement("option",{value:"moveTo",disabled:!0},"Move to..."),r.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),r.a.createElement("option",{value:"wantToRead"},"Want to Read"),r.a.createElement("option",{value:"read"},"Read"),r.a.createElement("option",{value:"none"},"None")))}}]),t}(n.Component)),g=a(142),y=a.n(g),j=a(143),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1,truncated:!1,lines:10},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleTruncate",value:function(e){this.state.truncated!==e&&this.setState({truncated:e})}},{key:"toggleLines",value:function(e){var t=this;this.setState(function(e){return{expanded:!t.state.expanded}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.book,n=t.books,o=t.changeShelf,c=t.lines,l=this.state,s=l.expanded,i=l.truncated,u=a.averageRating?a.averageRating:"none";return r.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"book-header"},"Book"),r.a.createElement("th",{className:"book-header"},"Author"),r.a.createElement("th",{className:"book-header"},"Description"),r.a.createElement("th",{className:"book-header"},"Details"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("li",null,r.a.createElement("div",{className:"BookShelfTable"},r.a.createElement("div",{className:"book-top"},r.a.createElement("div",{className:"book-cover",style:{backgroundImage:"url(".concat(a.imageLinks.thumbnail,")")}}),r.a.createElement(v,{book:a,books:n,changeShelf:o})),r.a.createElement("div",null,r.a.createElement("h4",null,a.title),r.a.createElement("h6",null,a.subtitle))))),r.a.createElement("td",{className:"BookAuthor"},a.authors&&a.authors.map(function(e,t){return r.a.createElement("div",{key:t},e)})),r.a.createElement("td",{className:"BookDescription"},r.a.createElement(j.a,{lines:!s&&c,ellipsis:r.a.createElement("span",null,"...",r.a.createElement("a",{href:"#",onClick:function(){return e.toggleLines()}},"More")),onTruncate:function(){return e.handleTruncate()}},a.description),!i&&s&&r.a.createElement("span",null,r.a.createElement("a",{href:"#",onClick:function(){return e.toggleLines()}},"Less"))),r.a.createElement("td",{className:"book"},r.a.createElement("p",null," ",r.a.createElement("b",null," Average Rating:")," ",u," "),r.a.createElement("p",null," ",r.a.createElement("b",null," Page Count:")," ",a.pageCount," "),r.a.createElement("p",null," ",r.a.createElement("b",null," Publish Date:")," ",a.publishedDate," ")))))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.changeShelf;return r.a.createElement("ol",{className:"books-grid"},t.map(function(e){return r.a.createElement(O,{book:e,books:t,key:e.id,changeShelf:a})}))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={shelfChange:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.changeShelf;return r.a.createElement("div",{className:"list-books-content"},[{currentShelf:"currentlyReading",title:"Currently Reading"},{currentShelf:"wantToRead",title:"Want to Read"},{currentShelf:"read",title:"Read"}].map(function(e,n){var o=t.filter(function(t){return t.shelf===e.currentShelf});return r.a.createElement("div",{className:"bookshelf",key:n},r.a.createElement("h2",{className:"bookshelf-title"},e.title),r.a.createElement("div",{className:"bookshelf-books"},r.a.createElement(S,{books:o,changeShelf:a})))}))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.books,n=e.changeShelf;return r.a.createElement("li",null,r.a.createElement("div",{className:"book"},r.a.createElement("div",{className:"book-top"},r.a.createElement("div",{className:"book-cover",style:{backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),r.a.createElement(v,{book:t,books:a,changeShelf:n})),r.a.createElement("div",{className:"book-title"},t.title)))}}]),t}(n.Component),C=a(144),w=a.n(C),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",filteredBooks:[],searchResults:!1},a.getBooks=function(e){var t=e.target.value;a.setState({query:t}),t?E(t).then(function(e){e.length>0?a.setState({filteredBooks:e,searchResults:!1}):a.setState({filteredBooks:[],searchResults:!0})}):a.setState({filteredBooks:[],searchResults:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.filteredBooks,n=(e.searchResults,this.props),o=n.books,c=n.changeShelf;return a.sort(w()("title")),r.a.createElement("div",{className:"search-books"},r.a.createElement("div",{className:"search-books-bar"},r.a.createElement(l.b,{className:"close-search",to:"/"},"Close"),r.a.createElement("div",{className:"search-books-input-wrapper"},r.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:t,onChange:this.getBooks}))),r.a.createElement("div",{className:"search-books-results"},r.a.createElement("div",null,r.a.createElement("ol",{className:"books-grid"},a.map(function(e){return r.a.createElement(R,{book:e,books:o,key:e.id,changeShelf:c})}))),r.a.createElement("h3",{className:"searchResults"},"No results found!!")))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.changeShelf=function(e,t){p(e,t).then(function(n){e.shelf=t;var r=a.state.books.filter(function(t){return t.id!==e.id});r.push(e),a.setState({books:r})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(d,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state.books;return r.a.createElement("div",{className:"app"},r.a.createElement(l.c,{path:"/search",render:function(a){a.history;return r.a.createElement(B,{books:t,changeShelf:e.changeShelf})}}),r.a.createElement(l.c,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"list-books"},r.a.createElement("div",{className:"list-books-title"},r.a.createElement("h1",null,"BookReads")),r.a.createElement(N,{books:t,changeShelf:e.changeShelf}),r.a.createElement("div",{className:"open-search"},r.a.createElement(l.b,{to:"/search"},"Search")))}}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(l.a,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[145,2,1]]]);
//# sourceMappingURL=main.12f4b84b.chunk.js.map