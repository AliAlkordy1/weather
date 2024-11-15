import { Icon } from '@iconify/react';
// metrial ui 
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {createTheme , ThemeProvider} from "@mui/material/styles"
import Button from '@mui/material/Button';

const theme =createTheme({
  Typography:{
    fontFamily:["IBM"],
  },
})

function App() {

  return (
       <div className='App'>
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={{ textAlign: 'center' }}   >
              <div className='flex' >
              <div dir='rtl' style={{background:"rgb(28 52 91/36%", color:"white",padding:"10px", borderRadius:"15px",boxShadow:"0px 11px 1px rgba(0,0,0,0.05)",width:"70%"}}>
                <div>
                <div className='date'>
                  
                  <Typography variant="h1" style={{marginRight:"20px",fontWeight:"600"}}>بغداد </Typography>
                  <Typography variant="h4" style={{marginRight:"20px"}}>الثلاثاء 10/10/2024 </Typography>

                  
                  </div>
                  <hr />
                  {/* container of cloud icon and degree */}
                  <div style={{display:"flex", justifyContent:"space-around"}}>
                  <div>
                  <Typography variant="h1" style={{textAlign:"right"}}>38 </Typography>
                  {/* icon of cloud here  */}

                  <Typography variant="h6" >broken clouds </Typography>
                {/* min and max */}
                
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <h5>الصغرى : 43</h5>
                    <h5 style={{margin:"0 5px"}}>|</h5>
                    <h5>الكبرى : 50 </h5>
                  </div>
                  </div>
                <Icon icon="material-symbols:cloud" width="200" height="200" />
                </div>

              </div>
              </div>
              <div dir='rtl' style={{display:"flex",justifyContent:"end",width:"70%",marginTop:"20px"}}>

              <Button style={{color:"white"}} variant="text">English</Button>
              </div>


              </div>
            </Container>

            </ThemeProvider>
            </div>
    
  )
}

export default App
