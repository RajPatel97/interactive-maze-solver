
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
        if (maze.includes(parseInt(event.target.innerHTML))){
            maze.splice(maze.indexOf(parseInt(event.target.innerHTML)),1)
        }
        console.log(event.target.innerHTML)
        console.log(maze)

    }

    const calcPosition =(num)=>{//calcumation the row and the col of a givin posion in the maze. ex 23 would calulate to row = 2, col = 3.
        let row = Math.floor(num /10) ;
        let col = num%10;
        return {row,col};

    }

    const getNumPosition=(row, col)=>{//this cuntion has not been checked
        let s = ''
        s += row
        s += col;
        let num = parseInt(s)
        return num;
        

    }

    const solveMaze = () =>{
        let path = []
        //let col = 0,row = 0;
        let solveMaze = maze.reverse();
        let current = solveMaze.pop();
        console.log(current)

        while(current !== 99){
            console.log('currently looking at: '+current)
            //check if the squares surrounding current are in the maze. example. if we're at sqr 23 to check the top would be row 1 col 13. this is sqr 13. concatenate them
            let row = (calcPosition(current).row)
            let col = (calcPosition(current).col)
            console.log('this is row : '+ row+ ' | this is col: '+ col)

            //check if the sqrs around the current is in the available moves 
            if(solveMaze.indexOf(getNumPosition(row+1,col)) !== -1){//move up one 
                console.log(getNumPosition(row+1,col))
                console.log(solveMaze.indexOf(getNumPosition(row+1,col)))
                console.log('it is happening here 0')
                //path.push(current);
                current = getNumPosition(row+1,col);
                //remove if condition from the maze array 
                solveMaze.splice(solveMaze.indexOf(getNumPosition(row+1,col)), 1);
            }else if (solveMaze.indexOf(getNumPosition(row-1,col)) !== -1){//mpvve down one 
                console.log('it is happening here 1')
                //path.push(current);
                current = getNumPosition(row-1,col);
                solveMaze.splice(solveMaze.indexOf(getNumPosition(row-1,col)), 1);
            }else if (solveMaze.indexOf(getNumPosition(row,col+1)) !== -1){//mpvve down one 
                console.log('it is happening here 2')
                //path.push(current);
                current = getNumPosition(row,col+1);
                solveMaze.splice(solveMaze.indexOf(getNumPosition(row,col+1)), 1);
            }else if (solveMaze.indexOf(getNumPosition(row,col-1)) !== -1){//mpvve down one 
                console.log('it is happening here 3')
                //path.push(current);
                current = getNumPosition(row,col-1);
                solveMaze.splice(solveMaze.indexOf(getNumPosition(row,col-1)), 1);
            }else{
                path.pop();
                current = path.pop();
            }
            path.push(current);

        }
        console.log(path)
    }

    return ( 
        <div className="wrapper">
            <div className="maze-wrapper">
            {maze.map(num=>(
                <div id ={num} className="box-wrapper" onMouseOver = {handleClick} onClick ={handleClick} key = {num}>{num}</div>
            ))}
            
            </div>
        <button onClick={solveMaze} className = 'btn'>SOLVE</button>
        </div>
     );
}
 
export default Maze;