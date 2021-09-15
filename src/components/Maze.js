
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

    const calcPosition =(num)=>{//calcumation the row and the col of a givin posion in the maze. ex 23 would calulate to row = 2, col = 3.
        let row = Math.floor(num /10) ;
        let col = num%10;
        return {row,col};

    }

    const getNumPosition=(row, col)=>{//this cuntion has not been checked
        let s = ''
        s.append(row)
        s.append(row)
        let num = parseInt(s)
        return num;
        

    }

    const solveMaze = () =>{
        let path = []
        let col = 0,row = 0;
        let current = maze.pop();

        while(current != 99){
            //check if the squares surrounding current are in the maze. example. if we're at sqr 23 to check the top would be row 1 col 13. this is sqr 13. concatenate them
            let row = (calcPosition(current).row)
            let col = (calcPosition(current).col)



        }
        
    }

    return ( 
        <div className="wrapper">
            <div className="maze-wrapper">
            {maze.map(num=>(
                <div className="box-wrapper" onClick ={handleClick} key = {num}>{num}</div>
            ))}
            
            </div>
        <button onClick={solveMaze} className = 'btn'>SOLVE</button>
        </div>
     );
}
 
export default Maze;