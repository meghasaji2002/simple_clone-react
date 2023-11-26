import React from 'react'
import primevideotitle from '../images/primevideo_title.png'
import NavDropdown from 'react-bootstrap/NavDropdown';




function Navbar() {
   
  return (
<>


     <div  style={{width:'100%',height:'80px',padding:'0px 10px', display:'flex',alignItems:'center',backgroundColor:'black'}} >
          <div>
          
          <img style={{height:'60px'}} src={primevideotitle} alt="" />
          </div>
         <div className='w-25' style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
            <h6 style={{color:'white',flexGrow:'1'}}>Home</h6>
            <h6 style={{color:'white',flexGrow:'1'}}>TV Shows</h6>
           <h6 style={{color:'white',flexGrow:'1'}}>Movies</h6>
            <h6 style={{color:'white',flexGrow:'1'}}>Kids</h6>
         </div>
  
  
        
        <div  className='ms-auto' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div  style={{display:'flex',flexGrow:'2' ,alignItems:'center',justifyContent:'center'}}> 
         <div style={{border:'1px solid white',borderRadius:'5px'}}  ><i style={{color:'gray',fontSize:'18px'}} class="fa-solid fa-magnifying-glass ms-2 "></i><input className=' rounded ps-2 ms-2  ' style={{height:'30px',background:'transparent',border:'0'}}  placeholder='Search' type="text" /></div>
           </div>
         
  
           <div style={{height:'35px',width:'35px',borderRadius:'50%',border:'1px solid white',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'10px',flexGrow:'1' }}><i class="fa-solid fa-user" style={{color:'gray',fontSize:'20px'}}></i></div>
  
           <NavDropdown className='ms-2 ' style={{color:'white',flexGrow:'1' }} title="Profile" id="basic-nav-dropdown">
                
                <NavDropdown.Item className='text-center' href="#action/3.1">Plans </NavDropdown.Item>
                <NavDropdown.Item className='text-center' href="#action/3.2">
                 Add account
                </NavDropdown.Item>
                <NavDropdown.Item className='text-center' href="#action/3.2">
                 subscription
                </NavDropdown.Item>
                <NavDropdown.Item className='text-center' href="#action/3.2">
                 Settings
                </NavDropdown.Item>
                <NavDropdown.Item className='text-center' href="#action/3.2">
                 Downloads
                </NavDropdown.Item>
                <NavDropdown.Item className='text-center' href="#action/3.3">Logout</NavDropdown.Item>
                
                
                
              </NavDropdown>
  
        </div>
  
  
  
      </div>
   </>
  )
}

export default Navbar