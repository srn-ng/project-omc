import imgh from './img/img1.png';
import imgB from './img/imgB.png';
import halal from './img/halal.png';
import './App.css';

function App() {
  return (

    <div className='page '>


       <div className="header ">

           <div className='left'>
              <div className='leftHeader'>
                <img src={imgh} alt=''/>
              </div>
              <div className='leftBottom'>
                  <img className='imgB' src={imgB} alt='' />
              </div>
               


           
           
           </div>

           <div className='right'>
             <div className='rightHeader'>
              <img src={imgh} alt=''/>

             </div>

            <div className='rightBottom'>         
             <h3 className='h3'>Who is Open Minds Club ?</h3>
              <p  className='p'> Each day in December, a new (begim) task
              released, which follows a fun Christmcery t
               s both written learning content, and upp</p>
            </div>

           </div>
       </div>






        <div className='footer'>

          <div className='box1'>
             <img className='halal' src ={halal} alt=''/>
             <h3>Halal hackathon </h3>
          </div>

          <div className='box2'>
             <h4 className='h4'>Quick links</h4>
              <li>
                <ul>Home </ul>
                <ul>About</ul>
                <ul>Event</ul>
                <ul>Contact us </ul>
              </li>
          </div>

          <div className='box3'>
             <h4 className='h4'>Ressources </h4>
             <ul>Community discord</ul>
             <ul>Link</ul>
             <ul>Channel</ul>
             

          </div>

          <div className='box4'>
            <h4 className='h4'>  Social Media </h4>
            <ul>Instagram</ul>
            <ul>Facebook</ul>
            <ul>Linkdin</ul>
            <ul>Git Hub</ul>
            

          </div>
       
        </div>

    </div>
  );
}

export default App;
