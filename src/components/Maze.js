
const Maze = () => {
    let maze =[];
    const hello = (n)=>{
        for(let x=0; x<n; x++){
            maze.push(x)
        }
    
    }

    hello(100)
    console.log(maze)

    const handleClick = (event) =>{//when clicked removes the item from the array
        event.target.style.backgroundColor = "rgb(173, 106, 173)";
        maze.splice(maze.indexOf(parseInt(event.target.innerHTML)),1)
        console.log(maze)

    }

    return ( 
        <div className="maze-wrapper">
        {maze.map(num=>(
            <div className="box-wrapper" onClick ={handleClick} key = {num}>{num}</div>
        ))}

        </div>
     );
}
 
export default Maze;