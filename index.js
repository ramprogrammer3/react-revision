console.log("***************************************************")

class App extends React.Component{
    render(){
      return(
        <div>
          <h1>Hello react</h1>
          <About />
        </div>
      )
    }
  }

  class About extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount is render ")
    }
    render(){
        return(
            <div>
                <h1>About component </h1>
            </div>
        )
    }
}
console.log("***************************************************")

class App extends React.Component{
    render(){
      return(
        <div>
          <h1>Hello react</h1>
          <About />
        </div>
      )
    }
  }
  

  class About extends React.Component{
    componentDidMount(){
        localStorage.setItem("month","may")
        console.log("did mount call")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is render ")
        localStorage.clear("month")
    }
    render(){
        return(
            <div>
                <h1>About component </h1>
            </div>
        )
    }
}

console.log("***************************************************")

class App extends React.Component{
    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        console.log(response.data)
      })
    }
    render(){
      return(
        <div>
          <h1>Hello react</h1>
          
        </div>
      )
    }
  }
console.log("***************************************************")