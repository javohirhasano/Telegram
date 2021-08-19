import styled from 'styled-components'

const ContainerWrapper = styled.div`
.bar{
    width: 80px;
    background-color:rgb(51, 51, 80);
    color: white;
    height: 100vh;
    position: sticky;
    top: 0;
}
.car {
    display:flex  
}
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
   margin-right:15px;
}
.content{
    width: 100%;
    background: rgb(127,217,113);
background: radial-gradient(circle, rgba(127,217,113,1) 0%, rgba(191,246,237,1) 100%);
    color: black;
    height: 100vh;
    overflow-y:scroll;
}
.hov:hover{
    background-color: rgb(87, 87, 233);
    color:white;
}
.sidebar {
    width: 400px;
    background-color:white;
    color: black;
    height: 100vh;
    position: sticky;
    top: 0 !important;
    overflow:hidden;
    border-right:1px solid rgb(184, 182, 182);
}
header{
    background-color: white;
    position: sticky;
    top: 0;
    padding:5px;
overflow:hidden;
}
.whole {
    flex:1;
}
.contain{
   display:flex
}
Input {
    width: 380px;
    padding:5px;
    font-size:15px;
    background-color: rgb(86, 86, 95);
    color: white;
    margin:4px  
}
Input:hover{
    background-color: white;
    color: black;
}
.text-1{
    margin: -3px;
    margin-bottom:25px;
}
.text-2{
    margin: -3px;
    color: rgb(94, 85, 85);
}
.text-3{
  padding-left:100px;
    margin: -3px;
    margin-bottom:5px;
    color: rgb(94, 85, 85);
}
.text-4{
    color:white;
    margin:10px;
}
a{
    color: black;
    text-decoration: none;
}
a:hover{
    text-decoration: none;
}
.card2 {
    display:flex;
    align-items: center;
}
.card1{
    display:flex;
    justify-content: center;
    align-items: center;
    padding-left:-10px;
}
.header2{
    background-color:rgb(51, 51, 80);
    color: white;
    position: sticky;
    top: 0;
    padding:5px;
overflow:hidden;

}
.butn {
    color:white;
}
.title{
    color:white;
}
.bage {
    border-radius: 50%;
    background-color: white;
    color: rgb(34, 34, 75);
    margin-left: 7px;   
}
.sidebar2 {
    height:100vh;
   position:sticky;
     width: 100%;
     background-color:white;
     color: black;
     height: 100vh;
   
}
.All {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(213, 210, 245);
   
}
.bag {
    width:90%;
}


.bages{
    width:20px;
    margin:5px;
display:flax;
align-items:center;
justify-content:center;
    background-color:rgb(67, 67, 110);
    color:white;
    margin-top: 30px;
    border-radius: 50%;
}

@media(max-width:500px){ 
   .contain{
       display:none;
   }
}
@media(min-width:500px){ 
    .contain2{
        display:none;
    }
 }
 @media(max-width:500px){ 
    .contain2{
        display:inline-block;
    }
 }
`
export default ContainerWrapper