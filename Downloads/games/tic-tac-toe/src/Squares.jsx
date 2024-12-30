/* eslint-disable react/prop-types */


export default function Squares({grid,markUser}){

    return(
        <div className="squares">
            {grid.map((value,index)=>{
                return(
                    <button
                        key={index}
                        className="square-values"
                        onClick={()=>markUser(index)}
                    >
                        {value}
                    </button>
                )
            })}
        </div>
    )
}