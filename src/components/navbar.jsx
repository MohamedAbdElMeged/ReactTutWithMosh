import React from 'react'

const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a class="navbar-brand" >
                 Navbar <span className="badge badge-pill badge-secondary">total is {totalCounters}</span>
                 </a>                        
        </nav>
)
};


// export class Navbar extends Component {
//     render() {
//         return (
//                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                          <a class="navbar-brand" >
//                              Navbar <span className="badge badge-pill badge-secondary">total is {this.props.totalCounters}</span>
//                              </a>                        
//                     </nav>
//         )
//     }
// }

export default Navbar

