import styled from 'styled-components'

const ContainerWrapper = styled.div`
.bar{
    width: 80px;
    background-color:rgb(51, 51, 80);
    color: white;
    height: 100vh;
    position: sticky;
    top: 0;
    $.show{
        position: sticky;
    top: 0;
        width: 300px;
    }
}
@-webkit-keyframes blink{
    50%{
        background: rgb(127,217,113);
        background: radial-gradient(circle, rgba(127,217,113,1) 0%, rgba(191,246,237,1) 100%);
       }
       100%{
        background: rgb(203,230,199);
        background: radial-gradient(circle, rgba(203,230,199,1) 0%, rgba(114,232,116,1) 100%);
       }
    }
@keyframes blink{
    25%{
        background: rgb(203,230,199);
        background: radial-gradient(circle, rgba(203,230,199,1) 0%, rgba(109,238,182,1) 100%);
       }
   50%{
    background: rgb(127,217,113);
    background: radial-gradient(circle, rgba(127,217,113,1) 0%, rgba(191,246,237,1) 100%);
   }
   75%{
    background: rgb(167,172,244);
    background: radial-gradient(circle, rgba(167,172,244,1) 0%, rgba(109,238,121,1) 100%);
   }
   100%{
    background: rgb(203,230,199);
    background: radial-gradient(circle, rgba(203,230,199,1) 0%, rgba(114,232,116,1) 100%);
   }
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
    -webkit-animation: blink 10s infinite;
    animation: blink 10s ifinite;
    width: 100%;
    background: rgb(203,230,199);
background: radial-gradient(circle, rgba(203,230,199,1) 0%, rgba(114,232,116,1) 100%);
  
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
    border-bottom: 1px solid rgb(213, 210, 245);
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
    color: black;
    margin:4px  
}
.ikon {
    margin:10px;
}
.ikon2 {
    color:blue;
}
.botoms {
    width:100%;
   position: sticky;
   top: 0;
   height:50px;
   bottom:0px;
   background-color: white;
display:flex;
}
.ikonka {
    margin-right:70px;
    color:white;
}
.rearch {
    display:flex;
    justify-content: space-between;

}
.textss {
    width:600px;
    color:rgb(187, 181, 181);
    padding:10px;
    font-size:18px;
    margin-top:-5px;
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
 .home{
    margin-bottom:10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    width: 90%;
    border: 1px solid rgb(165, 159, 159);
 height:50px;
    border-bottom-left-radius: 20px;
 }
 .write3 {
   margin-left:10px
 }
 .home2{
    background-color: rgb(183, 238, 178);
    color: rgb(27, 211, 11);
    margin-left: 100px;
    border: 1px solid rgb(165, 159, 159);
    border-bottom-left-radius: 20px;
    margin-bottom:10px;
    display: flex;
    justify-content: space-between;
 }
 .write9{
     margin-top:30px;
     color: rgb(27, 211, 11);
 }
`
export default ContainerWrapper