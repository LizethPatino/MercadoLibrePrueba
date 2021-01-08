import Search from '../Navbar/navbar';
import './template.scss'

/*Genera el template de presentación*/
const Template = () => {
    return (
      <div> 
      <Search></Search>
      <div className="backgroundMain"></div>
      </div>  

    );
  };
  
  export default Template;