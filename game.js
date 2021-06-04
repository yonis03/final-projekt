var  block=dokument.getElementById ("block");
var  hål=dokument.getElementById ("hål");
var  karaktär=dokument.getElementById("karaktär");
var  hopp=0;
var  räknare=0;

hål.addEventListener('animationiteration',()=>{
    Varslump = -((Math.slumpmässig() * 300) + 150);
    hål . stil . topp  =  slumpmässig  +  "px" ;
    räknare ++ ;
});
 setInterval(funktion());{
  varcharacterTop  = parseInt(fönster.getComputedStyle(tecken).getPropertyValue("överst"));
    om ( hopp = 0);{
        karaktär.stil.top = (characterTop + 3) + "px";
    }
    var  blockLeft = parseInt(fönster.getComputedStyle(block).getPropertyValue("vänster"));
    var  holeTop  =  parseInt ( window . getComputedStyle ( hole ) . getPropertyValue ( "top" ) ) ;
    var  cTop  =  - ( 500 - characterTop ) ;
    om((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop > holeTop + 130)))); {
        alert ( "Game over. Score:" + ( counter - 1 ) ) ;
        karaktär.stil.topp=100 + "px";
        räknare = 0;
    }
} 

funktionhoppa(); {
    hopp=1;
    låtjumpCount=0;
    varjumpInterval=setInterval (funktion()); {
        varcharacterTop=parseInt (fönster.getComputedStyle (tecken).getPropertyValue ("överst"));
        om((characterTop > 6 ) && ( jumpCount < 15)); {
            karaktär.stil.top=(characterTop-5)+"px";
        }
        if (jumpCount>20){
            clearInterval (jumpInterval);
            hopp = 0;
            jumpCount = 0;
        }
        jumpCount ++;
    } 
}
