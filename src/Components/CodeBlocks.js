import React, { Component } from "react"
import '../Styles/ComponentStyles/ProjectItem.css'

{/*I'm considering deleting this file - very messy, working on better solution in future update*/}

class CodeBlocks extends Component {
    state = {
        blocksHidden: true
    }

    blockHandler = () => {
        const showBlocks = this.state.blocksHidden
        this.setState({blocksHidden: !showBlocks})
    }

    render() {
        return (
                <div className="allCodeBlocks">
                <div className="block" toggleblock={this.blockHandler}>    
                    <div className="blockExtends">
                        <p id="holder"><span className="langCSS"><i className="fas fa-circle"></i></span> C# 100.0%</p>
                    </div>
                        <div className="codeBlock1">
                            <p id="holder1"> 
                                <pre id="holder1">
                                    {`Random random = new Random();
int correctNumber = random.Next(1, 10);
int guess = 0;
Console.WriteLine("Guess a number between 1 and 10");

while (guess != correctNumber)
{
    string input = Console.ReadLine();
    if (!int.TryParse(input, out guess))
{
    PrintColorMessage(ConsoleColor.Red, 
        "Please use only numbers");
    continue;
}
    guess = Int32.Parse(input);
    if (guess != correctNumber)
{
    PrintColorMessage(ConsoleColor.Red, 
        "wrong number, please try again");
}
        
                                    
                                    `}
        
                                </pre>
                            </p>
                        </div>
                    </div>
                    <div className="block" toggleblock={this.blockHandler}>
                <div className="blockExtends">
                    <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span>  63.6%</p>
                    <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  26.5%</p>
                    <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  9.9%</p>
                </div>
                <div className="codeBlock1">
                    <p id="holder1"> 
                        <pre>
                        {`const Places = ({ 
    places, loading }) => {
    if (loading) {
        return <d />;
    } else {
        return (
            <div className='card'>
                {places.map(place => (
                <CoffeeItem 
                    key={place.id} 
                    place={place} 
                    />
                ))}
            </div>
        );
    }
};`}
                        </pre>
                    </p>
                </div>
                </div>
                <div className="block" toggleblock={this.blockHandler}>
                <div className="blockExtends">
                    <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span>  64.5%</p>
                    <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  27.8%</p>
                    <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  7.7%</p>
                </div>
                <div className="codeBlock1">
                    <p id="holder1"> 
                        <pre>
                        {`export const GlobalContext = createContext(initialState)
        
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }  
                        `}
                        </pre>
                    </p>
                </div>
                </div>
                <div className="block" toggleblock={this.blockHandler}>
                <div className="blockExtends">
                    <p id="holder"><span className="langCSS4"><i className="fab fa-js"></i></span>  44.4%</p>
                    <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  19.7%</p>
                    <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  35.9%</p>
                </div>
                <div className="codeBlock1">
                    <p id="holder1"> 
                        <pre>
                            {`bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += 
    '<div class="well">' +
    '<h3>'+ name +
    ' <a 
        class="btn btn-default" 
        target="_blank" 
        href="'+ addhttp(url) +'"> Visit</a> ' +
    ' <a 
        onclick="deleteBookmark(''+url+'')" 
        class="btn btn-danger" 
        href="#">Delete</a> ' +
    '</h3>'+
    '</div>';
    }
}
                            
                            `}
                        </pre>
                    </p>
                </div>
                </div>
                <div className="block" toggleblock={this.blockHandler}>
                <div className="blockExtends">
                    <p id="holder"><span className="langCSS1"><i className="fab fa-react"></i></span> 47.2%</p>
                    <p id="holder"><span className="langCSS2"><i className="fab fa-css3"></i></span>  48.7%</p>
                    <p id="holder"><span className="langCSS3"><i className="fab fa-html5"></i></span>  4.1%</p>
                </div>
                <div className="codeBlock1">
                    <p id="holder1">
                        <span id="alertText">check repo for EXACT documentation (github-finder/src/App.js/)
        </span> 
                        <pre>
                            {`searchUsers = async text => {

this.setState({ loading: true });

const res = await axios.get(
https://api.github.com/search/users?q={text}
&client_id=
{process.env.REACT_APP_GITHUB_CLIENT_ID}
&client_secret=
{process.env.REACT_APP_GITHUB_CLIENT_SECRET});

this.setState({ 
    users: res.data.items, loading: false });
};
        
                            `}
                        </pre>
                    </p>
                </div>
            </div>
        </div> 
        )
    }
}


export default CodeBlocks

